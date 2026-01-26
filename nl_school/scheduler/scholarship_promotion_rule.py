import frappe


from ..junior_school_customization.doctype.scholarship_promotion_rule.scholarship_promotion_rule import (
    auto_promote_students_yearly,
)


@frappe.whitelist()
def auto_promote_students():
    auto_promote_students_yearly()
