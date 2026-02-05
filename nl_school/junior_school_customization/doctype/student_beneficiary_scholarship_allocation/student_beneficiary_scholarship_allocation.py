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

    def on_submit(self):
        self.create_purchase_invoice()

    def create_purchase_invoice(self):
        school_fee_item = frappe.get_single_value(
            "Junior School Settings", "school_fee_item"
        )
        if not school_fee_item:
            frappe.throw(_("Please set the School Fee Item in Junior School Settings."))

        pi = frappe.get_doc(
            {
                "doctype": "Purchase Invoice",
                "supplier": self.official_school_name,
                "company": self.company,
                "posting_date": frappe.utils.nowdate(),
                "due_date": frappe.utils.nowdate(),
                "beneficiary": self.beneficiary,
                "academic_year": self.academic_year,
                "academic_term": self.academic_term,
                "items": [
                    {
                        "item_name": school_fee_item,
                        "qty": 1,
                        "rate": self.allocated_amount,
                        "amount": self.allocated_amount,
                        "beneficiary": self.beneficiary,
                        "academic_year": self.academic_year,
                        "academic_term": self.academic_term,
                        "expense_account": "5111 - Cost of Goods Sold - SHOFCO",
                    }
                ],
                "total": self.allocated_amount,
                "grand_total": self.allocated_amount,
            }
        )
        pi.insert()
        pi.submit()
        self.purchase_invoice = pi.name
        self.save()
