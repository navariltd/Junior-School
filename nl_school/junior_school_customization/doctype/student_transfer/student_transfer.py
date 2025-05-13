# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import getdate
from frappe import _


class StudentTransfer(Document):
    def before_save(self):
        self.validate_date()
        if self.create_new_student_id:
            self.create_new_student()
            self.create_course_enrollment(self.new_student_id)
            self.transfer_student_group(self.new_student_id)

        else:
            self.transfer_student_group(self.student)
            self.create_course_enrollment(self.student)

    def validate_date(self):
        if self.transfer_date and getdate(self.transfer_date) > getdate():
            frappe.throw(
                _("Student Transfer cannot be submitted before Transfer Date"),
                frappe.DocstatusTransitionError,
            )

    def transfer_student_group(self, student):
        # Check if student already exists in target student group
        exists = frappe.db.exists(
            "Student Group Student",
            {
                "parent": self.new_student_group,
                "student": student,
            },
        )
        if not exists:
            # Add to Student Group Student table
            student_group = frappe.get_doc("Student Group", self.new_student_group)
            student_group.company = self.new_company
            student_group.append(
                "students",
                {
                    "student": student,
                    "student_name": self.student_name,
                },
            )
            student_group.save()

    def create_course_enrollment(self, student):
        if not frappe.db.exists(
            "Course Enrollment",
            {
                "student": student,
                "custom_stream": self.new_student_group,
                "academic_year": self.new_academic_year,
                "academic_term": self.new_academic_term,
                "company": self.new_company,
            },
        ):
            enrollment = frappe.new_doc("Program Enrollment")
            enrollment.student = student
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

    def create_new_student(self):
        # Fetch current student
        student = frappe.get_doc("Student", self.student)

        # Mark existing student as 'Left'
        student.custom_status = "Left"
        student.enabled = 0
        student.save()

        # Extract year from current ID
        old_id_parts = (student.custom_student_id or "").split("/")
        if len(old_id_parts) != 3:
            frappe.throw("Invalid student ID format. Expected format like MFG/2025/206")

        year = old_id_parts[1]

        # Decide new prefix based on new school/company
        school_prefix_map = {
            "SHOFCO Mathare School for Girls": "MSG",
            "SHOFCO Kibera School for Girls": "KSG",
        }

        new_prefix = school_prefix_map.get(self.new_company)
        if not new_prefix:
            frappe.throw(f"Prefix not defined for company: {self.new_company}")

        # Find highest existing number for that prefix and year
        like_pattern = f"{new_prefix}/{year}/%"
        last_id = frappe.db.sql(
            """
            SELECT custom_student_id
FROM `tabStudent`
WHERE custom_student_id LIKE %s
  AND enabled = 1
ORDER BY
  LENGTH(SUBSTRING_INDEX(custom_student_id, '/', -1)) DESC,
  CAST(SUBSTRING_INDEX(custom_student_id, '/', -1) AS UNSIGNED) DESC
LIMIT 1

            """,
            (like_pattern,),
            as_dict=True,
        )

        if last_id:
            last_number = int(last_id[0]["custom_student_id"].split("/")[-1])
            new_number = last_number + 1
        else:
            new_number = 1

        # Construct new student ID
        new_student_id = f"{new_prefix}/{year}/{new_number}"
        new_email = f"{new_student_id.replace('/', '')}@gmail.com"
        # Create new student
        new_student = frappe.new_doc("Student")
        new_student.first_name = student.first_name
        new_student.last_name = student.last_name
        new_student.gender = student.gender
        new_student.date_of_birth = student.date_of_birth
        new_student.custom_stream = self.new_student_group
        new_student.custom_status = "Active"
        new_student.custom_student_id = new_student_id
        new_student.custom_student_id_name = new_student_id
        new_student.student_name = student.student_name
        new_student.student_email_id = new_email
        new_student.company = self.new_company
        new_student.insert()

        self.new_student_id = new_student.name
        return new_student.name
