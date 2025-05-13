# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import getdate
from frappe import _


class TeacherTransfer(Document):
    def before_save(self):
        self.validate_date()
        if self.create_new_teacher_id:
            self.new_teacher_id()
        else:
            self.update_teacher()

    def validate_date(self):
        if self.transfer_date and getdate(self.transfer_date) > getdate():
            frappe.throw(
                _("Teacher Transfer cannot be submitted before Transfer Date"),
                frappe.DocstatusTransitionError,
            )

    def update_teacher(self):
        teacher = frappe.get_doc("Instructor", self.teacher)
        teacher.company = self.new_company
        teacher.department = self.department
        teacher.save()

    def new_teacher_id(self):
        teacher = frappe.get_doc("Instructor", self.teacher)
        teacher.status = "Left"
        teacher.save()

        new_teacher = frappe.new_doc("Instructor")
        new_teacher.instructor_name = teacher.instructor_name
        new_teacher.company = self.new_company
        new_teacher.department = self.department
        new_teacher.gender = teacher.gender
        new_teacher.employee = teacher.employee
        new_teacher.instructor_log = teacher.instructor_log
        new_teacher.status = "Active"
        new_teacher.insert()

        self.new_id = new_teacher.name
