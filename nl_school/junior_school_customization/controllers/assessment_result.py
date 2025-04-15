import frappe


def before_submit(doc, method):
    if not doc.academic_term:
        doc.academic_term = frappe.db.get_value(
            "Education Settings", None, "current_academic_term"
        )
