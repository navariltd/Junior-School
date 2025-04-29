import frappe
from frappe import _


def create_academic_year():
    """Automatically creates an academic year at the start of each new year."""
    current_year = "2029"
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

    latest_academic_year = frappe.get_all(
        "Academic Year",
        fields=["name"],
        order_by="year_end_date desc",
        limit=1,
    )

    if not latest_academic_year:
        frappe.throw(_("No Academic Year found."))

    enrolment_doc.new_academic_year = latest_academic_year[0].name

    students = enrolment_doc.get_students()

    if students:
        enrolment_doc.students = []

        for student in students:
            enrolment_doc.append(
                "students",
                {
                    "student": student.get("student"),
                    "student_name": student.get("student_name"),
                    "student_category": student.get("student_category"),
                    "student_batch_name": student.get("student_batch_name"),
                },
            )

        enrolment_doc.save()

        enrolment_doc.enroll_students()
    else:
        frappe.msgprint(_("No students found to enroll."))


def change_student_status(doc):
    if doc.date_of_leaving:
        doc.custom_status = "Left"
        doc.enabled = 0
        remove_student_stream(doc)
        cancel_class_enrollment(doc)


def before_save(doc, method=None):
    change_student_status(doc)


def remove_student_stream(student):
    student_stream = frappe.get_doc("Student Group Student", {"student": student.name})
    student_stream.delete()


def cancel_class_enrollment(student):
    latest_student_enrollment = frappe.get_all(
        "Program Enrollment",
        filters={"student": student.name},
        fields=["name"],
        order_by="creation desc",
        limit=1,
    )
    if latest_student_enrollment:
        student_enrollment = frappe.get_doc(
            "Program Enrollment", latest_student_enrollment[0].name
        )
        student_enrollment.cancel()
        frappe.msgprint(_("Cancelled Student Enrollment for {0}").format(student.name))
    else:
        frappe.msgprint(_("No Student Enrollment found for {0}").format(student.name))
