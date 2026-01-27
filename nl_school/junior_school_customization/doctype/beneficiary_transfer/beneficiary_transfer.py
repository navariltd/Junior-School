# Copyright (c) 2026, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class BeneficiaryTransfer(Document):
    def validate(self):
        if self.from_school == self.to_school:
            frappe.throw("From School and To School cannot be the same.")

    def on_submit(self):
        self.update_beneficiary_record()

    def on_cancel(self):
        self.reverse_beneficiary_update()

    def update_beneficiary_record(self):
        beneficiary = frappe.get_doc("Beneficiary", self.beneficiary)
        old_school = beneficiary.official_school_name

        beneficiary.official_school_name = self.to_school
        beneficiary.previous_school_name = old_school
        beneficiary.current_class = self.to_class
        beneficiary.save(ignore_permissions=True)

    def reverse_beneficiary_update(self):
        beneficiary = frappe.get_doc("Beneficiary", self.beneficiary)
        beneficiary.official_school_name = beneficiary.previous_school_name
        beneficiary.current_class = self.from_class
        beneficiary.previous_school_name = None
        beneficiary.save(ignore_permissions=True)
