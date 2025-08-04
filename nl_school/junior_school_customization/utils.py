import frappe
from frappe import _
from frappe.utils import getdate


def create_academic_year():
    settings = get_education_settings()
    if not settings.custom_autocreate_academic_year:
        return
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


# TODO: Just incase you decide to go with this doctype for automatic enrolment, then uncomment the code, but i created teh other one for multi-schools purpose
# def update_enrolment_tool():
#     enrolment_doc = frappe.get_single("Enhanced Program Enrollment Tool")

#     latest_academic_year = frappe.get_all(
#         "Academic Year",
#         fields=["name"],
#         order_by="year_end_date desc",
#         limit=1,
#     )

#     if not latest_academic_year:
#         frappe.throw(_("No Academic Year found."))

#     enrolment_doc.new_academic_year = latest_academic_year[0].name

#     students = enrolment_doc.get_students()

#     if students:
#         enrolment_doc.students = []

#         for student in students:
#             enrolment_doc.append(
#                 "students",
#                 {
#                     "student": student.get("student"),
#                     "student_name": student.get("student_name"),
#                     "student_category": student.get("student_category"),
#                     "student_batch_name": student.get("student_batch_name"),
#                 },
#             )

#         enrolment_doc.save()

#         enrolment_doc.enroll_students()
#     else:
#         frappe.msgprint(_("No students found to enroll."))


def update_enrolment_tool():
    settings = get_education_settings()
    if not settings.custom_auto_enroll_students_yearly:
        return
    for auto_enrollments in frappe.get_all(
        "Automated Program Enrollment Tool", fields=["name"]
    ):
        enrolment_doc = frappe.get_doc(
            "Automated Program Enrollment Tool", auto_enrollments.name
        )
        if not enrolment_doc:
            continue

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


@frappe.whitelist()
def get_students_for_stream():
    stream = frappe.form_dict.get("stream")
    if not stream:
        frappe.throw(_("Stream is required."))
    doc = frappe.get_doc("Student Group", stream)
    students = []

    for row in doc.students:
        students.append({"student": row.student, "student_name": row.student_name})

    return students


@frappe.whitelist()
def get_students_education_level():
    education_level = frappe.form_dict.get("education_level")
    """Fetch students based on education level without saving anything."""

    students = frappe.get_all(
        "Student",
        filters={"custom_education_level": education_level},
        fields=["name", "student_name"],
    )

    return students


@frappe.whitelist()
def get_template_details():
    template_name = frappe.form_dict.get("template_name")

    """Fetch mentor and students from Mentorship Activity Template without saving anything."""
    if not template_name:
        return {}

    template = frappe.get_doc("Mentorship Activity Template", template_name)

    return {
        "mentor": template.mentor,
        "students": [
            {"student": row.student, "student_name": row.student_name}
            for row in template.students
        ],
    }


def update_academic_term():
    """Automatically updates academic terms for student groups based on today's date."""
    today = getdate()
    current_year = getdate().year
    academic_year_name = f"{current_year} Academic Year"

    # Find the academic term that matches today's date
    academic_term = frappe.get_all(
        "Academic Term",
        filters={
            "term_start_date": ["<=", today],
            "term_end_date": [">=", today],
            "academic_year": academic_year_name,
        },
        fields=["name"],
        limit=1,
    )

    if not academic_term:
        frappe.log_error(
            "No Academic Term found for today's date", "Academic Term Update"
        )
        return

    academic_term_name = academic_term[0]["name"]

    # Get all student groups for the current academic year
    streams = frappe.get_all(
        "Student Group",
        filters={"academic_year": academic_year_name},
        fields=["name", "academic_term"],
    )

    # Update each student group with the new academic term
    for stream in streams:
        if stream.academic_term != academic_term_name:
            frappe.db.set_value(
                "Student Group", stream.name, "academic_term", academic_term_name
            )
        else:
            frappe.db.set_value(
                "Student Group", stream.name, "academic_term", academic_term_name
            )
        frappe.db.commit()

    frappe.msgprint(
        f"Academic Term updated to {academic_term_name} for {len(streams)} student groups."
    )


def close_assessment_plan():
    all_assessment_plans = frappe.get_all(
        "Assessment Plan", filters={"status": "Open"}, fields=["name", "academic_term"]
    )
    for assessment in all_assessment_plans:
        academic_term = frappe.get_doc("Academic Term", assessment.academic_term)
        if getdate(academic_term.term_end_date) < getdate():
            frappe.db.set_value("Assessment Plan", assessment.name, "status", "Closed")


def get_education_settings():
    settings = frappe.get_single("Education Settings")
    return settings


@frappe.whitelist()
def get_subtopics(topic):
    return frappe.db.get_all(
        "Course Topic", filters={"parent": topic}, fields=["name", "topic_name"]
    )


@frappe.whitelist()
def get_student_guardian(student):
    return frappe.db.get_value("Student Guardian", {"parent": student}, "guardian")
