# Copyright (c) 2026, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

from frappe import _


class StudentBeneficiaryScholarshipAllocation(Document):
    def before_save(self):
        if (
            not self.bank_account_name
            or not self.bank_account_number
            or not self.bank_code
        ):
            frappe.throw(
                _("Bank Account Name, Bank Account Number, and Bank Code are required.")
            )

        allocated_amount = self.fee_balance + self.fee_amount + self.other_fees
        self.outstanding_amount = allocated_amount
        self.allocated_amount = allocated_amount
