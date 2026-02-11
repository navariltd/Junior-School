# Copyright (c) 2026, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

from frappe import _


class StudentBeneficiaryScholarshipAllocation(Document):
    def before_save(self):
        total = 0
        for row in self.allocation_items:
            total += row.amount
        self.grand_total = total

        if self.allocation_type == "Cash":
            self.outstanding_amount = total

    def on_submit(self):
        if self.allocation_type == "Cash":
            self.create_purchase_invoice()
        else:
            self.create_stock_entry()

    def create_purchase_invoice(self):
        expense_account = frappe.db.get_value(
            "Junior School Settings", self.company, "default_expense_account"
        )

        if not expense_account:
            frappe.throw(
                _(
                    "Please set the Default Expense Account in Junior School Settings for the company {0}"
                ).format(self.company)
            )

        items = [
            {
                "item_name": item.item_code,
                "qty": item.qty,
                "rate": item.rate,
                "amount": item.amount,
                "beneficiary": self.beneficiary,
                "academic_year": self.academic_year,
                "academic_term": self.academic_term,
                "expense_account": expense_account,
            }
            for item in self.allocation_items
        ]
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
                "items": items,
            }
        )
        pi.insert(ignore_permissions=True)
        pi.submit()
        pi.db_set("student_beneficiary_scholarship_allocation", self.name)

    def create_stock_entry(self):
        items = [
            {
                "item_code": item.item_code,
                "qty": item.qty,
                "uom": item.uom,
                "basic_rate": item.rate,
                "amount": item.amount,
                "s_warehouse": self.source_warehouse,
                "beneficiary": self.beneficiary,
                "academic_year": self.academic_year,
                "academic_term": self.academic_term,
            }
            for item in self.allocation_items
        ]

        se = frappe.get_doc(
            {
                "doctype": "Stock Entry",
                "stock_entry_type": "Material Issue",
                "from_warehouse": self.source_warehouse,
                "company": self.company,
                "posting_date": frappe.utils.nowdate(),
                "beneficiary": self.beneficiary,
                "academic_year": self.academic_year,
                "academic_term": self.academic_term,
                "items": items,
            }
        )

        se.insert(ignore_permissions=True)
        se.submit()
        se.db_set("student_beneficiary_scholarship_allocation", self.name)
