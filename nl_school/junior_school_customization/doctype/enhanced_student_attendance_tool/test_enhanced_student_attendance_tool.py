import frappe
from frappe.tests.utils import FrappeTestCase
from nl_school.junior_school_customization.doctype.enhanced_student_attendance_tool.enhanced_student_attendance_tool import (
    get_student_attendance_records,
)

class TestEnhancedStudentAttendanceTool(FrappeTestCase):
    def setUp(self):


        if not frappe.db.exists("Academic Year", "2024-2025"):
           frappe.get_doc({
                "doctype": "Academic Year",
                "academic_year_name": "2024-2025",
                "academic_year": "2024-2025",
                "year_start_date": "2024-01-01",
                "year_end_date": "2024-12-31"
            }).insert()


        """Set up test data: student group, student, course schedule, and attendance."""
        if not frappe.db.exists("Student Group", "Test Group1"):
           self.student_group = frappe.get_doc({
                "doctype": "Student Group",
                "student_group_name": "Test Group1",
                "program": "Test Program",
                "academic_year": "2024-2025",
                "group_based_on": "Batch"
            }).insert()
        else:
            self.student_group = frappe.get_doc("Student Group", "Test Group1")    

        self.student = frappe.get_doc({
            "doctype": "Student",
            "first_name": "Tom",
            "custom_student_id":"TOM001",
            "student_email_id":"tom1@example.com",
            "branch": "branch3",
            "custom_branch": "Test Branch"
        }).insert()

        frappe.get_doc({
            "doctype": "Student Group Student",
            "parent": self.student_group.name,
            "parenttype": "Student Group",
            "parentfield": "students",
            "student": self.student.name,
            "active": 1,
            "student_name": self.student.student_name
        }).insert()

        self.course_schedule = frappe.get_doc({
            "doctype": "Course Schedule",
            "student_group": self.student_group.name,
            "course": "Mathematics",
            "instructor":"John",
            "room":"roomC", 
            "schedule_date": "2025-07-16",
            "from_time": "15:00:00",
            "to_time": "16:00:00"
        }).insert()

        frappe.get_doc({
            "doctype": "Student Attendance",
            "student": self.student.name,
            "student_group": self.student_group.name,
            "date": "2025-07-16",
            "status": "Present"
        }).insert()

    def tearDown(self):
        """Rollback any changes made during the test to keep the database clean."""
        frappe.db.rollback()

    def test_returns_students_based_on_course_schedule(self):
        """Should return students linked to course schedule via student group."""
        result = get_student_attendance_records(
            based_on="Course Schedule",
            course_schedule=self.course_schedule.name
        )
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0].student, self.student.name)

    def test_returns_students_based_on_student_group_and_date(self):
        """Should return students in a student group for a given date."""
        result = get_student_attendance_records(
            based_on="Student Group",
            student_group=self.student_group.name,
            date="2025-07-16"
        )
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0].student, self.student.name)

    def test_invalid_course_schedule(self):
      """Should handle non-existent course schedule gracefully"""
      with self.assertRaises(frappe.DoesNotExistError):
        get_student_attendance_records(
            based_on="Course Schedule",
            course_schedule="Invalid Schedule"
        )    



    def test_no_students_or_attendance(self):
        """Should return empty list if no students or attendance records exist."""
        empty_group = frappe.get_doc({
            "doctype": "Student Group",
            "student_group_name": "Empty Group",
            "program": "Test Program",
            "academic_year": "2024-2025"
        }).insert()

        result = get_student_attendance_records(
            based_on="Student Group",
            student_group=empty_group.name,
            date="2025-07-16"
        )

        self.assertEqual(result, [])

    def test_status_is_set_only_if_student_has_attendance(self):
        """Should attach attendance status only if a student has a matching attendance record."""
        result = get_student_attendance_records(
            based_on="Student Group",
            student_group=self.student_group.name,
            date="2025-07-16"
        )

        student = result[0]
        self.assertEqual(student.student, self.student.name)
        self.assertEqual(student.status, "Present")


