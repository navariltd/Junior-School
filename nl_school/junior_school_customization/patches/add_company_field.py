import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_fields


def execute():
    doctypes_with_mandatory = {
        "Student": {"insert_after": "last_name"},
        "Instructor": {"insert_after": "instructor_name"},
        "Room": {"insert_before": "room_name"},
        "Assessment Plan": {"insert_before": "student_group"},
        "Assessment Result": {"insert_before": "assessment_plan"},
        "Student Log": {"insert_before": "student"},
        "Course Schedule": {"insert_before": "student_group"},
        "Student Group": {"insert_before": "academic_year"},
        "Program Enrollment": {"insert_after": "student_name"},
        "Student Attendance": {"insert_before": "student"},
    }

    doctypes_with_optional = {
        "Program": {"insert_before": "__first"},
        "Course": {"insert_before": "__first"},
    }

    fields = {}

    # Process mandatory fields
    for doctype, options in doctypes_with_mandatory.items():
        fieldname = "company"
        custom_field_name = f"{doctype.lower().replace(' ', '_')}-{fieldname}"
        if frappe.db.exists("Custom Field", custom_field_name):
            frappe.delete_doc("Custom Field", custom_field_name, force=True)

        field_def = {
            "fieldname": fieldname,
            "label": "School",
            "fieldtype": "Link",
            "options": "Company",
            "reqd": 1,
        }
        field_def.update(options)
        fields.setdefault(doctype, []).append(field_def)

    for doctype, options in doctypes_with_optional.items():
        fieldname = "company"
        custom_field_name = f"{doctype.lower().replace(' ', '_')}-{fieldname}"
        if frappe.db.exists("Custom Field", custom_field_name):
            frappe.delete_doc("Custom Field", custom_field_name, force=True)

        field_def = {
            "fieldname": fieldname,
            "label": "School",
            "fieldtype": "Link",
            "options": "Company",
            "reqd": 0,
        }
        field_def.update(options)
        fields.setdefault(doctype, []).append(field_def)

    create_custom_fields(fields)
