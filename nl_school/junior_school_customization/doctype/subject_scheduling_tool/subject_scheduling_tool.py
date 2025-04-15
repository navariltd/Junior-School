# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import getdate, add_days
import calendar


class SubjectSchedulingTool(Document):
    """Creates course schedules as per specified parameters"""

    @frappe.whitelist()
    def create_course_schedule(self):
        """Creates course schedules based on the child table 'Subject Time'"""

        course_schedules = []
        course_schedules_errors = []
        rescheduled = []
        reschedule_errors = []

        if not self.course_schedule:
            frappe.throw("Please add at least one entry in the Subject Time table.")

        self.validate_date()

        self.instructor_name = frappe.db.get_value(
            "Instructor", self.instructor, "instructor_name"
        )

        group_based_on, course = frappe.db.get_value(
            "Student Group", self.student_group, ["group_based_on", "course"]
        )

        if group_based_on == "Course":
            self.course = course

        date = self.course_start_date
        while date <= self.course_end_date:
            weekday_name = calendar.day_name[getdate(date).weekday()]

            # Iterate through the child table to check matching days
            for subject_time in self.course_schedule:
                if subject_time.day == weekday_name:
                    if subject_time.reschedule:
                        rescheduled, reschedule_errors = self.delete_course_schedule(
                            rescheduled, reschedule_errors, date
                        )

                    course_schedule = self.make_course_schedule(
                        date, subject_time.from_time, subject_time.to_time
                    )
                    try:
                        course_schedule.save()
                    except frappe.exceptions.ValidationError:
                        course_schedules_errors.append(date)
                    else:
                        course_schedules.append(course_schedule)

            date = add_days(date, 1)

        return dict(
            course_schedules=course_schedules,
            course_schedules_errors=course_schedules_errors,
            rescheduled=rescheduled,
            reschedule_errors=reschedule_errors,
        )

    def validate_date(self):
        """Validates if Course Start Date is greater than Course End Date"""
        if self.course_start_date > self.course_end_date:
            frappe.throw("Course Start Date cannot be greater than Course End Date.")

    def delete_course_schedule(self, rescheduled, reschedule_errors, date):
        """Deletes specific course schedules matching the date and time slots"""
        schedules = frappe.get_list(
            "Course Schedule",
            fields=["name", "schedule_date"],
            filters=[
                ["student_group", "=", self.student_group],
                ["course", "=", self.course],
                ["schedule_date", "=", date],
            ],
        )

        for d in schedules:
            try:
                frappe.delete_doc("Course Schedule", d.name)
                rescheduled.append(d.name)
            except Exception:
                reschedule_errors.append(d.name)

        return rescheduled, reschedule_errors

    def make_course_schedule(self, date, from_time, to_time):
        """Creates a new Course Schedule"""
        course_schedule = frappe.new_doc("Course Schedule")
        course_schedule.student_group = self.student_group
        course_schedule.course = self.course
        course_schedule.instructor = self.instructor
        course_schedule.instructor_name = self.instructor_name
        course_schedule.room = self.room
        course_schedule.schedule_date = date
        course_schedule.from_time = from_time
        course_schedule.to_time = to_time
        course_schedule.class_schedule_color = self.class_schedule_color
        return course_schedule
