import frappe
from frappe.utils.modules import get_modules_from_all_apps_for_user


__version__ = "0.0.1"


import education.education.utils

from nl_school.junior_school_customization.patches.override_lap import get_overlap_for_


education.education.utils.get_overlap_for = get_overlap_for_


def check_app_permission():
    if frappe.session.user == "Administrator":
        return True

    allowed_modules = get_modules_from_all_apps_for_user()
    allowed_modules = [x["module_name"] for x in allowed_modules]

    if "Junior School Customization" not in allowed_modules:
        return False

    roles = frappe.get_roles()
    if any(
        role
        in [
            "System Manager",
            "Student",
            "Instructor",
            "Education Manager",
            "Academic User",
        ]
        for role in roles
    ):
        return True

    return False
