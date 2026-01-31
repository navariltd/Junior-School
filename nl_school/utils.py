import frappe
from frappe.utils import formatdate, format_datetime


@frappe.whitelist()
def get_beneficiary_field_property(beneficiary, fieldname):
    if not (beneficiary and fieldname):
        return

    field = frappe.get_meta("Beneficiary").get_field(fieldname)
    if not field:
        return

    value = frappe.db.get_value("Beneficiary", beneficiary, fieldname)

    if field.fieldtype == "Date":
        value = formatdate(value)
    elif field.fieldtype == "Datetime":
        value = format_datetime(value)

    return {
        "value": value,
        "datatype": field.fieldtype,
        "label": field.label,
        "options": field.options,
    }
