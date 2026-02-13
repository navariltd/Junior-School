import frappe
from frappe.utils.user import is_website_user


__version__ = "0.0.1"


import education.education.utils

from nl_school.junior_school_customization.patches.override_lap import get_overlap_for_


education.education.utils.get_overlap_for = get_overlap_for_


def check_app_permission():
    if frappe.session.user == "Administrator":
        return True

    if is_website_user():
        return False

    return True
