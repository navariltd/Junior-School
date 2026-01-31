# Copyright (c) 2026, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

from frappe import _
from frappe.utils import getdate


class StudentBeneficiaryTransfer(Document):
    def before_submit(self):
        if getdate(self.transfer_date) > getdate():
            frappe.throw(
                _("Beneficiary Transfer cannot be submitted before Transfer Date."),
                frappe.DocstatusTransitionError,
            )

    def on_submit(self):
        beneficiary = frappe.get_doc("Beneficiary", self.beneficiary)
        beneficiary = update_beneficiary_transfer_history(
            beneficiary, self.transfer_details, date=self.transfer_date
        )
        if self.to_school and self.from_school != self.to_school:
            beneficiary.official_school_name = self.to_school
        beneficiary.save()

    def on_cancel(self):
        beneficiary = frappe.get_doc("Beneficiary", self.beneficiary)
        beneficiary = update_beneficiary_transfer_history(
            beneficiary, self.transfer_details, date=self.transfer_date, cancel=True
        )
        if self.from_school and self.from_school != self.to_school:
            beneficiary.official_school_name = self.from_school
        beneficiary.save()


def update_beneficiary_transfer_history(beneficiary, details, date=None, cancel=False):
    if not details:
        return beneficiary

    internal_transfer_history = {}
    for item in details:
        field = frappe.get_meta("Beneficiary").get_field(item.fieldname)
        if not field:
            continue

        new_value = item.new if not cancel else item.current
        setattr(beneficiary, item.fieldname, new_value)

        if item.fieldname == "official_school_name":
            internal_transfer_history["previous_school"] = item.current
            internal_transfer_history["current_school"] = item.new

        internal_transfer_history["status_at_transfer"] = (
            item.current if item.fieldname == "status" else beneficiary.status
        )

    if internal_transfer_history and not cancel:
        internal_transfer_history["transfer_date"] = date
        beneficiary.append(
            "student_beneficiary_transfer_details", internal_transfer_history
        )

    if cancel:
        delete_beneficiary_transfer_history(details, beneficiary, date)

    return beneficiary


def delete_beneficiary_transfer_history(details, beneficiary, date):
    filters = {}
    for d in details:
        for history in beneficiary.student_beneficiary_transfer_details:
            if d.property == "Official School Name" and history.current_school == d.new:
                filters = {
                    "transfer_date": history.transfer_date,
                    "previous_school": history.previous_school,
                    "current_school": history.current_school,
                    "status_at_transfer": history.status_at_transfer,
                }

        if filters:
            frappe.db.delete("Student Beneficiary Transfer History", filters)
            beneficiary.save()
