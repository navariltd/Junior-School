# Copyright (c) 2026, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

from frappe import _
from frappe.utils import getdate


class ScholarTransfer(Document):
    def before_submit(self):
        if getdate(self.transfer_date) > getdate():
            frappe.throw(
                _("Scholar Transfer cannot be submitted before Transfer Date."),
                frappe.DocstatusTransitionError,
            )

    def on_submit(self):
        scholar = frappe.get_doc("Scholar", self.scholar)
        scholar = update_scholar_transfer_history(
            scholar, self.transfer_details, date=self.transfer_date
        )

        scholar.save()

    def on_cancel(self):
        scholar = frappe.get_doc("Scholar", self.scholar)
        scholar = update_scholar_transfer_history(
            scholar, self.transfer_details, date=self.transfer_date, cancel=True
        )

        scholar.save()


def update_scholar_transfer_history(scholar, details, date=None, cancel=False):
    if not details:
        return scholar

    internal_transfer_history = {}
    for item in details:
        field = frappe.get_meta("Scholar").get_field(item.fieldname)
        if not field:
            continue

        new_value = item.new if not cancel else item.current
        setattr(scholar, item.fieldname, new_value)

        if item.fieldname == "official_school_name":
            internal_transfer_history["previous_school"] = item.current
            internal_transfer_history["current_school"] = item.new

        internal_transfer_history["status_at_transfer"] = (
            item.current if item.fieldname == "status" else scholar.status
        )

    if internal_transfer_history and not cancel:
        internal_transfer_history["transfer_date"] = date
        scholar.append("scholar_transfer_details", internal_transfer_history)

    if cancel:
        delete_scholar_transfer_history(details, scholar, date)

    return scholar


def delete_scholar_transfer_history(details, scholar, date):
    filters = {}
    for d in details:
        for history in scholar.scholar_transfer_details:
            if d.property == "Official School Name" and history.current_school == d.new:
                filters = {
                    "transfer_date": history.transfer_date,
                    "previous_school": history.previous_school,
                    "current_school": history.current_school,
                    "status_at_transfer": history.status_at_transfer,
                }

        if filters:
            frappe.db.delete("Scholar Transfer History", filters)
            scholar.save()
