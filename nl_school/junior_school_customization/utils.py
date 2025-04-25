import frappe


def create_academic_year():
    """Automatically creates an academic year at the start of each new year."""
    current_year = frappe.utils.get_datetime().year
    academic_year_name = f"{current_year} Academic Year"

    if not frappe.db.exists("Academic Year", academic_year_name):
        academic_year = frappe.get_doc(
            {
                "doctype": "Academic Year",
                "academic_year_name": academic_year_name,
                "year_start_date": f"{current_year}-01-01",
                "year_end_date": f"{current_year}-12-31",
            }
        )
        academic_year.insert(ignore_permissions=True)
        frappe.db.commit()
        frappe.msgprint(f"Created: {academic_year_name}")
