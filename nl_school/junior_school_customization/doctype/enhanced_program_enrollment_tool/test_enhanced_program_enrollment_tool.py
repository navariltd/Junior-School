# Copyright (c) 2025, Navari and Contributors
# See license.txt

import frappe
from frappe.tests.utils import FrappeTestCase


class TestEnhancedProgramEnrollmentTool(FrappeTestCase):
    def setUp(self):
        # test data for Student Applicant
        self.academic_year = "2025-2026"
        self.program = "Test Program"
        self.academic_term = "Term 1"

        # Insert a Student Applicant
        self.student_applicant = frappe.get_doc(
            {
                "doctype": "Student Applicant",
                "title": "Test Student",
                "application_status": "Approved",
                "program": self.program,
                "academic_year": self.academic_year,
                "academic_term": self.academic_term,
            }
        ).insert(ignore_permissions=True)

        # Insert a Program Enrollment and Student
        self.student = frappe.get_doc(
            {"doctype": "Student", "student_name": "Enrolled Student", "enabled": 1}
        ).insert(ignore_permissions=True)

        self.program_enrollment = frappe.get_doc(
            {
                "doctype": "Program Enrollment",
                "student": self.student.name,
                "student_name": self.student.student_name,
                "student_batch_name": "Batch A",
                "student_category": "General",
                "program": self.program,
                "company": "Test Company",
                "custom_stream": "Stream A",
                "academic_year": self.academic_year,
                "academic_term": self.academic_term,
            }
        ).insert(ignore_permissions=True)

    def tearDown(self):
        frappe.delete_doc("Student Applicant", self.student_applicant.name)
        frappe.delete_doc("Program Enrollment", self.program_enrollment.name)
        frappe.delete_doc("Student", self.student.name)

    def test_get_students_from_applicant(self):
        """
        Test that get_students retrieves students from approved Student Applicants
        for the specified program, academic year, and term.
        """
        # Insert approved Student Applicant
        applicant = frappe.get_doc(
            {
                "doctype": "Student Applicant",
                "title": "Test Applicant",
                "application_status": "Approved",
                "program": self.program.name,
                "academic_year": self.academic_year.name,
                "academic_term": self.academic_term.name,
            }
        ).insert()

        # Create the tool document
        tool = frappe.get_doc(
            {
                "doctype": "Enhanced Program Enrollment Tool",
                "get_students_from": "Student Applicant",
                "program": self.program.name,
                "academic_year": self.academic_year.name,
                "academic_term": self.academic_term.name,
            }
        )

        students = tool.get_students()

        # Check if the student applicant is in the result
        self.assertTrue(any(s["student_applicant"] == applicant.name for s in students))

    