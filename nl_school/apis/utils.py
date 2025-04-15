import frappe
from frappe.utils import getdate
from frappe.utils import get_link_to_form
import json
from frappe import _
from frappe.model.document import Document


@frappe.whitelist()
def mark_attendance(
    students_present,
    students_absent,
    course_schedule=None,
    student_group=None,
    date=None,
    shift=None,
    start_time=None,
    end_time=None,
):
    """Creates Multiple Attendance Records.

    :param students_present: Students Present JSON.
    :param students_absent: Students Absent JSON.
    :param course_schedule: Course Schedule.
    :param student_group: Student Group.
    :param date: Date.
    """
    if student_group:
        academic_year = frappe.db.get_value(
            "Student Group", student_group, "academic_year"
        )
        if academic_year:
            year_start_date, year_end_date = frappe.db.get_value(
                "Academic Year", academic_year, ["year_start_date", "year_end_date"]
            )
            if getdate(date) < getdate(year_start_date) or getdate(date) > getdate(
                year_end_date
            ):
                frappe.throw(
                    _(
                        "Attendance cannot be marked outside of Academic Year {0}"
                    ).format(academic_year)
                )

    present = json.loads(students_present)
    absent = json.loads(students_absent)
    # frappe.throw(str(shift))
    for d in present:
        make_attendance_records(
            d["student"],
            d["student_name"],
            "Present",
            course_schedule,
            student_group,
            date,
            shift,
            start_time,
            end_time,
        )

    for d in absent:
        make_attendance_records(
            d["student"],
            d["student_name"],
            "Absent",
            course_schedule,
            student_group,
            date,
            shift,
        )

    frappe.db.commit()
    frappe.msgprint(_("Attendance has been marked successfully."))


def make_attendance_records(
    student,
    student_name,
    status,
    course_schedule=None,
    student_group=None,
    date=None,
    shift=None,
    start_time=None,
    end_time=None,
):
    """Creates/Update Attendance Record."""

    # Check if attendance already exists
    existing_attendance = frappe.db.exists(
        "Student Attendance",
        {
            "student": student,
            "date": date,
            "course_schedule": course_schedule,
            "student_group": student_group,
            "custom_shift": shift,
        },
    )

    if existing_attendance:
        frappe.throw(
            _("Attendance record already exists for {0} on {1}, {2} shift").format(
                student_name, date, shift
            )
        )
        return False  # Prevent duplicate creation

    # Create new attendance record
    student_attendance = frappe.new_doc("Student Attendance")
    student_attendance.student = student
    student_attendance.student_name = student_name
    student_attendance.course_schedule = course_schedule
    student_attendance.student_group = student_group
    student_attendance.date = date
    student_attendance.status = status
    student_attendance.custom_shift = shift
    student_attendance.custom_start_time = start_time
    student_attendance.custom_end_time = end_time
    student_attendance.insert()
    student_attendance.submit()

    return True  # Attendance successfully created


class ModifiedStudentAttendance(Document):
    def validate_duplication(self):
        """Check if the Attendance Record is Unique"""
        attendance_record = None
        if self.course_schedule:
            attendance_record = frappe.db.exists(
                "Student Attendance",
                {
                    "student": self.student,
                    "course_schedule": self.course_schedule,
                    "docstatus": ("!=", 2),
                    "name": ("!=", self.name),
                },
            )
        else:
            attendance_record = frappe.db.exists(
                "Student Attendance",
                {
                    "student": self.student,
                    "student_group": self.student_group,
                    "date": self.date,
                    "docstatus": ("!=", 2),
                    "name": ("!=", self.name),
                    "custom_shift": self.custom_shift,
                },
            )

        if attendance_record:
            record = get_link_to_form("Student Attendance", attendance_record)
            frappe.throw(
                _(
                    "Student Attendance record {0} already exists against the Student {1} with shift {2}"
                ).format(
                    record, frappe.bold(self.student), frappe.bold(self.custom_shift)
                ),
                title=_("Duplicate Entry Test"),
            )


def apply_student_attendance_override(doc, method):
    doc.validate_duplication = ModifiedStudentAttendance.validate_duplication.__get__(
        doc, doc.__class__
    )
