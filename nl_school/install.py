import frappe


def after_install():
    create_scholarship_manager_role()


def create_scholarship_manager_role():
    if not frappe.db.exists("Role", "Scholarship Manager"):
        frappe.get_doc(
            {"doctype": "Role", "role_name": "Scholarship Manager", "desk_access": 1}
        ).save()
