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


def update_enrolment_tool():
    enrolment_doc = frappe.get_single("Enhanced Program Enrollment Tool")
    enrolment_doc.academic_year = frappe.get_all(
        "Academic Year",
        filters={"year_start_date": ["<=", frappe.utils.nowdate()]},
        fields=["name"],
        order_by="year_start_date desc",
        limit=1,
    )[0].name
    enrolment_doc.save()
    enrolment_doc.enroll_students()
