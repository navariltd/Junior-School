# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe import _, msgprint
from frappe.utils import getdate, add_days
from erpnext.setup.doctype.holiday_list.holiday_list import is_holiday
from frappe.query_builder import DocType
from education.education.doctype.student_attendance.student_attendance import (
    get_holiday_list,
)


def execute(filters=None):
    if not filters:
        filters = {}

    from_date = filters.get("from_date")
    to_date = filters.get("to_date")
    company = filters.get("company")
    stream = filters.get("stream")

    if not from_date or not to_date:
        msgprint(_("Please select both From Date and To Date"), raise_exception=1)
    if not company:
        msgprint(_("Please select a School"), raise_exception=1)

    columns = get_columns()
    data = []

    holiday_list = get_holiday_list()
    current_date = getdate(from_date)

    while current_date <= getdate(to_date):
        if is_holiday(holiday_list, current_date):
            current_date = add_days(current_date, 1)
            continue

        absent_students = get_absent_students(current_date, company, stream)

        leave_applicants = get_leave_applications(current_date)

        for student in absent_students:
            if student.student not in leave_applicants:
                row = [
                    student.student,
                    student.student_name,
                    student.student_group,
                    student.custom_shift or "",
                    student.date,
                ]

                stud_details = frappe.db.get_value(
                    "Student",
                    student.student,
                    ["student_email_id", "student_mobile_number"],
                    as_dict=True,
                )

                row.append(stud_details.student_email_id or "")
                row.append(stud_details.student_mobile_number or "")

                data.append(row)

        current_date = add_days(current_date, 1)

    return columns, data


def get_columns():
    return [
        _("Student") + ":Link/Student:90",
        _("Student Name") + "::150",
        _("Student Group") + ":Link/Student Group:180",
        _("Shift") + ":Link/Shift Type:120",
        _("Absent Date") + ":Date:110",
        _("Student Email Address") + "::180",
        _("Student Mobile No.") + "::150",
    ]


def get_absent_students(date, company, stream=None):
    StudentAttendance = DocType("Student Attendance")
    query = (
        frappe.qb.from_(StudentAttendance)
        .select(
            StudentAttendance.student,
            StudentAttendance.student_name,
            StudentAttendance.student_group,
            StudentAttendance.custom_shift,
            StudentAttendance.date,
        )
        .where(
            (StudentAttendance.status == "Absent")
            & (StudentAttendance.docstatus == 1)
            & (StudentAttendance.date >= date)
            & (StudentAttendance.company == company)
        )
    )
    if stream:
        query = query.where(StudentAttendance.student_group == stream)
    query = query.orderby(StudentAttendance.student_group).orderby(
        StudentAttendance.student_name
    )
    return query.run(as_dict=True)


def get_leave_applications(date):
    StudentLeaveApplication = DocType("Student Leave Application")
    query = (
        frappe.qb.from_(StudentLeaveApplication)
        .select(StudentLeaveApplication.student)
        .where(
            (StudentLeaveApplication.docstatus == 1)
            & (StudentLeaveApplication.mark_as_present == 1)
            & (StudentLeaveApplication.from_date <= date)
            & (StudentLeaveApplication.to_date >= date)
        )
    )
    result = query.run(as_list=True)
    return {row[0] for row in result}
