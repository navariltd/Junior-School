# Copyright (c) 2026, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

from frappe import _


class ScholarResult(Document):
    def validate(self):
        self.validate_duplicate()

    def validate_duplicate(self):
        existing = frappe.db.exists(
            "Scholar Result",
            {
                "scholar": self.scholar,
                "academic_year": self.academic_year,
                "academic_term": self.academic_term,
                "name": ["!=", self.name],
                "docstatus": 1,
            },
        )

        if existing:
            frappe.throw(
                _(
                    f"Scholar Result already exists for {self.scholar} - {self.academic_year} - {self.academic_term}"
                )
            )
