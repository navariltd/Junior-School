# Copyright (c) 2026, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class BeneficiaryTransfer(Document):
    def validate(self):
        if self.from_school == self.to_school:
            frappe.throw("From School and To School cannot be the same.")

    # def before_submit(self):
    #     if getdate(self.transfer_date) > getdate():
    #         frappe.throw(_("Beneficiary Transfer cannot be submitted before Transer Date."), frappe.DocstatusTransitionError,)

    # def on_submit(self):
    #     beneficiary = frappe.get_doc("Beneficiary", self.beneficiary)

    # def update_beneficiary_history(self):
    #     if not self.transfer_details:
    #         return self.beneficiary
