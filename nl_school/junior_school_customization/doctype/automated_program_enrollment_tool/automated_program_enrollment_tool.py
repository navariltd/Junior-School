# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document
from frappe.utils import cint

from ...utils import enroll_students_based_on_promotion, process_promotions


class AutomatedProgramEnrollmentTool(Document):
    def onload(self):
        academic_term_reqd = cint(
            frappe.db.get_single_value("Education Settings", "academic_term_reqd")
        )
        self.set_onload("academic_term_reqd", academic_term_reqd)

    def before_save(self):
        if self.new_academic_year == self.academic_year:
            frappe.throw(
                _("New Academic Year cannot be the same as Current Academic Year")
            )

        if self.academic_term and self.new_academic_term:
            if self.academic_term == self.new_academic_term:
                frappe.throw(
                    _("New Academic Term cannot be the same as Current Academic Term")
                )

        if not self.promotion_rules_engine:
            frappe.throw(_("Please add promotion rules"))

        for rule in self.promotion_rules_engine:
            if rule.current_class == rule.new_class:
                frappe.throw(
                    _(
                        "In Promotion Rules Engine, Current Class cannot be the same as New Class"
                    )
                )

            if rule.current_stream == rule.new_stream:
                frappe.throw(
                    _(
                        "In Promotion Rules Engine, Current Stream cannot be the same as New Stream"
                    )
                )

    @frappe.whitelist()
    def get_students(self):
        students = []

        if not self.academic_year:
            frappe.throw(_("Mandatory field - Academic Year"))
        else:
            if self.get_students_from == "Student Applicant":
                student_applicant = frappe.qb.DocType("Student Applicant")
                if not self.program:
                    frappe.throw(_("Mandatory field - Program"))
                students = (
                    frappe.qb.from_(student_applicant)
                    .select(
                        (student_applicant.name).as_("student_applicant"),
                        (student_applicant.title).as_("student_name"),
                    )
                    .where(student_applicant.application_status == "Approved")
                    .where(student_applicant.program == self.program)
                    .where(student_applicant.academic_year == self.academic_year)
                )

                if self.academic_term:
                    students = students.where(
                        student_applicant.academic_term == self.academic_term
                    )
                students = students.run(as_dict=1)
            elif self.get_students_from == "Program Enrollment":
                program_enrollment = frappe.qb.DocType("Program Enrollment")
                students = (
                    frappe.qb.from_(program_enrollment)
                    .select(
                        program_enrollment.student,
                        program_enrollment.student_name,
                        program_enrollment.student_batch_name,
                        program_enrollment.student_category,
                        program_enrollment.program,
                        program_enrollment.company,
                        program_enrollment.custom_stream,
                    )
                    .where(program_enrollment.academic_year == self.academic_year)
                )
                if self.academic_term:
                    students = students.where(
                        program_enrollment.academic_term == self.academic_term
                    )

                students = students.run(as_dict=1)
                student_list = [d.student for d in students]
                if student_list:
                    inactive_students = frappe.db.sql(
                        """
						select name as student, student_name from `tabStudent` where name in (%s) and enabled = 0"""
                        % ", ".join(["%s"] * len(student_list)),
                        tuple(student_list),
                        as_dict=1,
                    )

                    for student in students:
                        if student.student in [d.student for d in inactive_students]:
                            students.remove(student)

        if students:
            return students
        else:
            frappe.throw(_("No students Found"))

    @frappe.whitelist()
    def enroll_students(self):
        students = self.get_students()

        enroll_students_based_on_promotion(
            students,
            self.promotion_rules_engine,
            academic_year=self.new_academic_year,
            academic_term=self.new_academic_term,
            enrollment_date=self.enrollment_date,
        )

        process_promotions(self)
