# Copyright (c) 2026, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

from frappe.utils import flt


class FeeRequest(Document):
    def before_save(self):
        if self.fee_components:
            total_amount = sum(
                [flt(component.amount) for component in self.fee_components]
            )
            self.total_amount = total_amount


@frappe.whitelist()
def get_fee_structure_template(fee_structure_template):
    fee_component_doc = frappe.get_doc("Fee Structure Template", fee_structure_template)
    return fee_component_doc.components
