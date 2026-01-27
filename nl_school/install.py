import frappe


def after_install():
    create_scholarship_manager_role()


def create_scholarship_manager_role():
    if not frappe.db.exists("Role", "Scholarship Manager"):
        frappe.get_doc(
            {"doctype": "Role", "role_name": "Scholarship Manager", "desk_access": 1}
        ).save()


def create_beneficiary_status():
    status_list = [
        "Active - In school",
        "Inactive - Did not enrol",
        "Inactive - Dropped out of school",
        "Inactive - Other",
        "Inactive - Withdrew from scholarship",
        "Alumni",
    ]

    for status in status_list:
        if not frappe.db.exists("Beneficiary Status", status):
            frappe.get_doc({"doctype": "Beneficiary Status", "status": status}).save()
