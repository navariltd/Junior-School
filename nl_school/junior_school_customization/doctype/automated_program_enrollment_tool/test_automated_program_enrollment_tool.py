# Copyright (c) 2025, Navari and Contributors
# See license.txt
 
import frappe
from frappe.tests.utils import FrappeTestCase
from frappe.utils import nowdate

from nl_school.junior_school_customization.doctype.automated_program_enrollment_tool.automated_program_enrollment_tool import (

    AutomatedProgramEnrollmentTool,
    enroll_students_based_on_promotion,
    promote_students_based_on_rules,
    process_promotions,
)

class TestAutomatedProgramEnrollmentTool(FrappeTestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()

        # Disable term requirement for testing
        frappe.db.set_value("Education Settings", None, "academic_term_reqd", 0)

        # Create shared data
        cls.company = frappe.get_doc({
            "doctype": "Company",
            "company_name": "Test University",
            "default_currency": "KES"
        }).insert(ignore_permissions=True,ignore_if_duplicate=True)

        frappe.db.set_default("company", cls.company.name)


        cls.academic_year = frappe.get_doc({
            "doctype": "Academic Year",
            "academic_year_name":"2025-2026",
            "academic_year": "2025-2026",
            "year_start_date": "2025-01-01",
            "year_end_date": "2026-12-31"
        }).insert(ignore_permissions=True, ignore_if_duplicate=True)

        cls.program = frappe.get_doc({
            "doctype": "Program",
            "program_name": "Test Program"
        }).insert(ignore_permissions=True, ignore_if_duplicate=True)

        cls.stream = frappe.get_doc({
            "doctype": "Student Group",
            "student_group_name": "Class 8",
            "group_based_on": "Batch",
            "program": cls.program.name,
            "academic_year": cls.academic_year.name,
            "students": []
        }).insert(ignore_permissions=True, ignore_if_duplicate=True)

        cls.new_stream = frappe.get_doc({
            "doctype": "Student Group",
            "student_group_name": "Class 9",
            "group_based_on": "Batch",
            "program": cls.program.name,
            "academic_year": cls.academic_year.name,
            "students": []
        }).insert(ignore_permissions=True, ignore_if_duplicate=True)

        cls.student = frappe.get_doc({
            "doctype": "Student",
            "student_name": "Test Student",
            "custom_student_id": "STU001",
            "gender": "Male",
            "date_of_birth": "2010-01-01",
            "email": "test@student.com",
            "enabled": 1
        })
        cls.student.flags.ignore_validate = True
        cls.student.flags.ignore_mandatory = True
        cls.student.insert(ignore_permissions=True, ignore_if_duplicate=True)

        cls.applicant = frappe.get_doc({
            "doctype": "Student Applicant",
            "title": "Test Student",
            "first_name":"Test",
            "student_name": cls.student.name,
            "application_status": "Approved",
            "program": cls.program.name,
            "academic_year": cls.academic_year.name
        }).insert(ignore_permissions=True, ignore_if_duplicate=True)

        cls.enrollment = frappe.get_doc({
            "doctype": "Program Enrollment",
            "student": cls.student.name,
            "student_name": cls.student.student_name,
            "program": cls.program.name,
            "academic_year": cls.academic_year.name,
            "custom_stream": cls.stream.name,
            "company": "Test Company"
        }).insert(ignore_permissions=True, ignore_if_duplicate=True)

    @classmethod
    def tearDownClass(cls):
        for doctype, name in [
            ("Program Enrollment", cls.enrollment.name),
            ("Student Applicant", cls.applicant.name),
            ("Student", cls.student.name),
            ("Student Group", cls.stream.name),
            ("Student Group", cls.new_stream.name),
            ("Program", cls.program.name),
            ("Academic Year", cls.academic_year.name),
        ]:
            try:
                frappe.delete_doc(doctype, name, force=1)
            except Exception:
                pass

    def tearDown(self):
        # Prevent any leftover changes from affecting other tests
        frappe.db.rollback()

    def test_get_students_missing_academic_year(self):
        """Should raise error if academic_year is missing"""
        tool = frappe.get_doc({
            "doctype": "Automated Program Enrollment Tool",
            "get_students_from": "Program Enrollment"
        })
        with self.assertRaises(frappe.ValidationError):
            tool.get_students()

    def test_get_students_from_student_applicant(self):
        """Should return approved student applicant"""
        tool = frappe.get_doc({
            "doctype": "Automated Program Enrollment Tool",
            "get_students_from": "Student Applicant",
            "academic_year": self.academic_year.name,
            "program": self.program.name
        })
        students = tool.get_students()
        self.assertTrue(any(s.get("student_name") == self.applicant.title for s in students))

    def test_get_students_from_program_enrollment(self):
        """Should return enrolled student"""
        tool = frappe.get_doc({
            "doctype": "Automated Program Enrollment Tool",
            "get_students_from": "Program Enrollment",
            "academic_year": self.academic_year.name
        })
        students = tool.get_students()
        self.assertTrue(any(s.get("student") == self.student.name for s in students))

    def test_enroll_students_based_on_promotion(self):

        """Should create enrollment based on promotion rules"""
        frappe.db.delete("Program Enrollment", {"student": self.student.name})

            # Add the student to the current stream
       
        self.stream = frappe.get_doc("Student Group", self.stream.name)
        self.stream.append("students", {
            "student": self.student.name,
            "student_name": self.student.student_name,
            "active": 1
        })
        self.stream.save(ignore_permissions=True)

        
        
        rules = [frappe._dict({
            "current_class": self.program.name,
            "current_stream": self.stream.name,
            "new_class": self.program.name,
            "new_stream": self.new_stream.name
        })]
        students = [frappe._dict({
            "student": self.student.name,
            "student_name": self.student.student_name,
            "student_category": "General",
            "program": self.program.name,
            "custom_stream": self.stream.name,
            "student_batch_name": "Batch 2025"
        })]
        
        count = enroll_students_based_on_promotion(
            students,
            rules,
            academic_year=self.academic_year.name,
            academic_term=None
        )
        

           # Check if enrollment was created
        created = frappe.get_all("Program Enrollment", filters={
            "student": self.student.name,
            "academic_year": self.academic_year.name,
            "program": self.program.name,
            
        })
        
        self.assertGreaterEqual(count, 1, "Expected at least one enrollment")
        self.assertTrue(created, "No Program Enrollment was created")

    def test_promote_students_based_on_rules(self):
        """Should move student from current stream to new stream"""
        self.stream.append("students", {
            "student": self.student.name,
            "student_name": self.student.student_name,
            "active": 1
        })
        self.stream.save(ignore_permissions=True)

        rules = [{
            "current_class": self.program.name,
            "current_stream": self.stream.name,
            "new_class": self.program.name,
            "new_stream": self.new_stream.name
        }]
        total_moved = promote_students_based_on_rules(rules, new_academic_year=self.academic_year.name)
        self.assertGreaterEqual(total_moved, 1)

    def test_process_promotions(self):
        """Should call promotion engine successfully"""
        doc = frappe.get_doc({
            "doctype": "Automated Program Enrollment Tool",
            "promotion_rules_engine": [
                {
                    "current_class": self.program.name,
                    "current_stream": self.stream.name,
                    "new_class": self.program.name,
                    "new_stream": self.new_stream.name
                }
            ],
            "new_academic_year": self.academic_year.name
        })
        process_promotions(doc)
        self.assertTrue(True)
