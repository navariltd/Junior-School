# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import getdate
from frappe import _


class StudentTransfer(Document):
    def before_save(self):
        self.validate_date()
        self.transfer_student_group()
        self.create_course_enrollment()

    def validate_date(self):
        if self.transfer_date and getdate(self.transfer_date) > getdate():
            frappe.throw(
                _("Student Transfer cannot be submitted before Transfer Date"),
                frappe.DocstatusTransitionError,
            )

    def transfer_student_group(self):
        # Check if student already exists in target student group
        exists = frappe.db.exists(
            "Student Group Student",
            {
                "parent": self.new_student_group,
                "student": self.student,
            },
        )

        if not exists:
            # Add to Student Group Student table
            student_group = frappe.get_doc("Student Group", self.new_student_group)
            student_group.company = self.new_company
            student_group.append(
                "students",
                {
                    "student": self.student,
                    "student_name": self.student_name,
                },
            )
            student_group.save()

    def create_course_enrollment(self):
        if not frappe.db.exists(
            "Course Enrollment",
            {
                "student": self.student,
                "custom_stream": self.new_student_group,
                "academic_year": self.new_academic_year,
                "academic_term": self.new_academic_term,
                "company": self.new_company,
            },
        ):
            enrollment = frappe.new_doc("Program Enrollment")
            enrollment.student = self.student
            enrollment.custom_stream = self.new_student_group
            enrollment.academic_year = self.new_academic_year
            enrollment.academic_term = self.new_academic_term
            enrollment.company = self.new_company
            enrollment.enrollment_date = self.transfer_date or frappe.utils.nowdate()
            enrollment.program = self.new_program

            for subject in self.get_subjects():
                enrollment.append(
                    "courses",
                    {
                        "course": subject["course"],
                        "course_name": subject.get("course_name"),
                    },
                )

            enrollment.insert()

    def get_subjects(self):
        class_doc = frappe.get_doc("Program", self.new_program)
        subjects = []
        for subject in class_doc.courses:
            subjects.append(
                {
                    "course": subject.course,
                    "course_name": subject.course_name,
                }
            )

        return subjects

    # def create_new_student(self):
    #     student = frappe.get_doc("Student", self.student)
    #     student.
