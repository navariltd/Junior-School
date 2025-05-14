# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document
from frappe.utils import cint


class EnhancedProgramEnrollmentTool(Document):
    def onload(self):
        academic_term_reqd = cint(
            frappe.db.get_single_value("Education Settings", "academic_term_reqd")
        )
        self.set_onload("academic_term_reqd", academic_term_reqd)

    @frappe.whitelist()
    def get_students(self):
        students = []
        # if not self.get_students_from:
        # 	frappe.throw(_("Mandatory field - Get Students From"))
        # elif not self.program:
        # 	frappe.throw(_("Mandatory field - Program"))
        if not self.academic_year:
            frappe.throw(_("Mandatory field - Academic Year"))
        else:
            if self.get_students_from == "Student Applicant":
                student_applicant = frappe.qb.DocType("Student Applicant")

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
            # frappe.throw(str(students))
            return students
        else:
            frappe.throw(_("No students Found"))

    @frappe.whitelist()
    def enroll_students(self):
        total = len(self.students)
        students = self.get_students()

        enroll_students_based_on_promotion(
            students,
            self.promotion_rules_engine,
            academic_year=self.new_academic_year,
            academic_term=self.new_academic_term,
        )

        process_promotions(self)
        frappe.msgprint(_("{0} Students have been enrolled").format(total))


# TODO: Refactor this into smaller functions
def promote_students_based_on_rules(promotion_rules, new_academic_year=None):
    """
    Promote students based on defined promotion rules and update streams with the new academic year before adding students.
    Handles duplicate roll numbers by auto-incrementing them.
    """
    if not promotion_rules:
        frappe.throw(_("No promotion rules defined"))

    sorted_rules = sorted(
        promotion_rules, key=lambda x: (x["current_class"], x["current_stream"])
    )

    moved_students = set()
    total_moved = 0

    for rule in sorted_rules:
        try:
            current_stream = frappe.get_doc("Student Group", rule["current_stream"])

            if not current_stream:
                frappe.log_error(
                    "Student Group Not Found",
                    f"Group not found: {rule['current_stream']}",
                )
                continue

            students_to_move = [
                s for s in current_stream.students if s.student not in moved_students
            ]

            if not students_to_move:
                continue

            current_students_to_keep = [
                s
                for s in current_stream.students
                if s.student not in [sm.student for sm in students_to_move]
            ]
            current_stream.students = current_students_to_keep
            current_stream.save(ignore_permissions=True)
            frappe.db.commit()

            new_stream = frappe.get_doc("Student Group", rule["new_stream"])
            if not new_stream:
                frappe.log_error(
                    "Student Group Not Found",
                    f"Group not found: {rule['new_stream']}",
                )
                continue

            if new_academic_year and new_stream.academic_year != new_academic_year:
                new_stream.academic_year = new_academic_year

            existing_students = {s.student for s in new_stream.students}
            students_added = False

            for student in students_to_move:
                if student.student not in existing_students:
                    new_stream.append(
                        "students",
                        {
                            "student": student.student,
                            "student_name": student.student_name,
                            "active": student.active,
                        },
                    )
                    moved_students.add(student.student)
                    total_moved += 1
                    students_added = True

            if students_added:
                new_stream.save(ignore_permissions=True)
                frappe.db.commit()

        except Exception as e:
            frappe.db.rollback()
            frappe.log_error(
                "Promotion Process Error", f"Error processing rule {rule}: {str(e)}"
            )
            continue

    return total_moved


@frappe.whitelist()
def process_promotions(doc):
    if not doc.promotion_rules_engine:
        frappe.throw(_("Please define promotion rules first"))

    promotion_rules = []
    academic_year = doc.new_academic_year if doc.new_academic_year else None
    for rule in doc.promotion_rules_engine:
        promotion_rules.append(
            {
                "current_class": rule.get("current_class"),
                "current_stream": rule.get("current_stream"),
                "new_class": rule.get("new_class"),
                "new_stream": rule.get("new_stream"),
            }
        )
    promote_students_based_on_rules(promotion_rules, academic_year)

    frappe.msgprint(_("Student promotion started in background"))


def enroll_students_based_on_promotion(
    students, promotion_rules, academic_year=None, academic_term=None
):
    """
    Enroll students based on promotion rules into a new program.
    """
    if not promotion_rules:
        frappe.throw(_("No promotion rules defined for enrollment."))

    created_enrollments = 0

    promotion_map = {rule.current_class: rule.new_class for rule in promotion_rules}
    new_stream_map = {rule.current_stream: rule.new_stream for rule in promotion_rules}

    try:
        for student in students:
            current_program = student.program

            new_program = promotion_map.get(current_program)
            new_stream = new_stream_map.get(student.custom_stream)
            if not new_program:
                continue

            # Create new Program Enrollment
            new_enrollment = frappe.new_doc("Program Enrollment")
            new_enrollment.student = student.student
            new_enrollment.student_name = student.student_name
            new_enrollment.student_category = student.student_category
            new_enrollment.program = new_program
            new_enrollment.custom_stream = new_stream
            new_enrollment.academic_year = academic_year
            new_enrollment.academic_term = academic_term
            new_enrollment.student_batch_name = student.student_batch_name
            new_enrollment.enrollment_date = frappe.utils.nowdate()
            new_enrollment.save()
            new_enrollment.submit()
            created_enrollments += 1

    except Exception as e:
        frappe.log_error(
            title="Error in enroll_students_based_on_promotion",
            message=f"Error: {str(e)}",
        )

    return created_enrollments
