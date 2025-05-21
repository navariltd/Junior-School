# Copyright (c) 2025, Navari and Contributors
# See license.txt

import frappe
from frappe.tests.utils import FrappeTestCase
from unittest.mock import patch


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

    def test_get_students_from_program_enrollment(self):
        """
        Test that Enhanced Program Enrollment Tool retrieves students enrolled via Program
        Enrollment for a given academic year and term.
            """
        student = frappe.get_doc(
            {"doctype": "Student", "student_name": "Active Student", "enabled": 1}
        ).insert(ignore_permissions=True)

        # Insert Program Enrollment
        enrollment = frappe.get_doc(
            {
                "doctype": "Program Enrollment",
                "student": student.name,
                "student_name": student.student_name,
                "student_batch_name": "Batch A",
                "student_category": "General",
                "program": "Test Program",
                "company": "Test Company",
                "custom_stream": "Stream A",
                "academic_year": "2025-2026",
                "academic_term": "Term 1",
            }
        ).insert(ignore_permissions=True)

        # Create the tool instance
        tool = frappe.get_doc(
            {
                "doctype": "Enhanced Program Enrollment Tool",
                "get_students_from": "Program Enrollment",
                "academic_year": "2025-2026",
                "academic_term": "Term 1",
            }
        )

        # Call the method to get students
        students = tool.get_students()

        # confirm that the student is in the result
        self.assertTrue(any(s["student"] == student.name for s in students))

    def test_disabled_students_are_filtered_out(self):
        """
        Test that disabled students
        are not included in the results when retrieving students from Program Enrollment.
        """
        # Insert a disabled student
        student = frappe.get_doc({
            "doctype": "Student",
            "student_name": "Inactive Student",
            "enabled": 0
        }).insert(ignore_permissions=True)

        # Insert a Program Enrollment for the disabled student
        enrollment = frappe.get_doc({
            "doctype": "Program Enrollment",
            "student": student.name,
            "student_name": student.student_name,
            "student_batch_name": "Batch B",
            "student_category": "General",
            "program": "Test Program",
            "company": "Test Company",
            "custom_stream": "Stream B",
            "academic_year": "2025-2026",
            "academic_term": "Term 1"
        }).insert(ignore_permissions=True)

        # Create the tool document
        tool = frappe.get_doc({
            "doctype": "Enhanced Program Enrollment Tool",
            "get_students_from": "Program Enrollment",
            "academic_year": "2025-2026",
            "academic_term": "Term 1"
        })

        students = tool.get_students()

        # Confirm the disabled student is NOT in the results
        self.assertFalse(any(s["student"] == student.name for s in students))

    def test_get_students_returns_error_when_no_students_found(self):
        """
        Test that get_students raises an error when no students are found
        for the specified criteria.
        """
        # Create the tool instance with filters that will match no records
        tool = frappe.get_doc({
            "doctype": "Enhanced Program Enrollment Tool",
            "get_students_from": "Student Applicant",
            "program": "Nonexistent Program",
            "academic_year": "2030-2031",
            "academic_term": "Term X"
        })

        # Confirm that the method raises the expected exception
        with self.assertRaises(frappe.ValidationError) as context:
            tool.get_students()

        self.assertIn("No students Found", str(context.exception))

    def test_get_students_throws_if_academic_year_missing(self):
        """
        Test that get_students raises an error if the academic year is not provided
        when retrieving students from Student Applicant.
        """
        tool = frappe.get_doc({
            "doctype": "Enhanced Program Enrollment Tool",
            "get_students_from": "Student Applicant",
            "program": "Test Program"
        })

        with self.assertRaises(frappe.ValidationError) as context:
            tool.get_students()

        self.assertIn("Mandatory field - Academic Year", str(context.exception))

    def test_get_students_throws_if_program_missing_for_applicant(self):
        """
        Test that get_students raises an error if the program is not provided
        when retrieving students from Student Applicant.
        """
        tool = frappe.get_doc({
            "doctype": "Enhanced Program Enrollment Tool",
            "get_students_from": "Student Applicant",
            "academic_year": "2025-2026"
        })

        with self.assertRaises(frappe.ValidationError) as context:
            tool.get_students()

        self.assertIn("Mandatory field - Program", str(context.exception))

    def test_get_students_with_invalid_source_throws_no_students(self):
        """ Test that get_students raises an error when an invalid source is provided """
        tool = frappe.get_doc({
            "doctype": "Enhanced Program Enrollment Tool",
            "get_students_from": "Invalid Source",
            "program": "Test Program",
            "academic_year": "2025-2026"
        })

        with self.assertRaises(frappe.ValidationError) as context:
            tool.get_students()

        self.assertIn("No students Found", str(context.exception))

    def test_enroll_students_triggers_expected_workflow(self):
        """
        Test that the enroll_students method triggers the expected workflow
        when called with valid data.
        """
        tool = frappe.get_doc({
            "doctype": "Enhanced Program Enrollment Tool",
            "get_students_from": "Student Applicant",
            "program": "Test Program",
            "academic_year": "2025-2026",
            "academic_term": "Term 1",
            "promotion_rules_engine": [
                {
                    "current_class": "Test Program",
                    "current_stream": "Stream A",
                    "new_class": "Next Program",
                    "new_stream": "Stream B"
                }
            ],
            "new_academic_year": "2026-2027",
            "new_academic_term": "Term 2",
        })

        # Manually assign mock students to the `students` field
        tool.students = [{"item": "fake"}] * 3

        # Patch dependencies
        with patch("nl_school.junior_school_customization.doctype.enhanced_program_enrollment_tool.enhanced_program_enrollment_tool.enroll_students_based_on_promotion") as mock_enroll, \
            patch("nl_school.junior_school_customization.doctype.enhanced_program_enrollment_tool.enhanced_program_enrollment_tool.process_promotions") as mock_process, \
            patch("frappe.msgprint") as mock_msg:

            # Stub out get_students to return mock student records
            tool.get_students = lambda: [{"student": "S001", "student_name": "John Doe"}]

            tool.enroll_students()

            # Assertions
            mock_enroll.assert_called_once()
            mock_process.assert_called_once_with(tool)
            mock_msg.assert_called_once_with("3 Students have been enrolled")
