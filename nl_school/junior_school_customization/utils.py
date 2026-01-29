import frappe
from frappe import _
from frappe.utils import (
    getdate,
    get_year_start,
    get_year_ending,
    get_first_day,
    get_last_day,
)


# TODO: Refactor this into smaller functions
def promote_students_based_on_rules(promotion_rules, new_academic_year=None):
    """
    Promote students based on defined promotion rules and update streams with the new academic year before adding students.
    Handles duplicate roll numbers by auto-incrementing them.
    """
    if not promotion_rules:
        frappe.throw(_("No promotion rules defined"))

    sorted_rules = sorted(
        promotion_rules, key=lambda x: (x["current_class"], x["current_stream"])
    )

    moved_students = set()
    total_moved = 0

    for rule in sorted_rules:
        try:
            current_stream = frappe.get_doc("Student Group", rule["current_stream"])

            if not current_stream:
                frappe.log_error(
                    "Student Group Not Found",
                    f"Group not found: {rule['current_stream']}",
                )
                continue

            students_to_move = [
                s for s in current_stream.students if s.student not in moved_students
            ]

            if not students_to_move:
                continue

            current_students_to_keep = [
                s
                for s in current_stream.students
                if s.student not in [sm.student for sm in students_to_move]
            ]
            current_stream.students = current_students_to_keep
            current_stream.save(ignore_permissions=True)
            frappe.db.commit()

            new_stream = frappe.get_doc("Student Group", rule["new_stream"])
            if not new_stream:
                frappe.log_error(
                    "Student Group Not Found",
                    f"Group not found: {rule['new_stream']}",
                )
                continue

            if new_academic_year and new_stream.academic_year != new_academic_year:
                new_stream.academic_year = new_academic_year

            existing_students = {s.student for s in new_stream.students}
            students_added = False

            for student in students_to_move:
                if student.student not in existing_students:
                    new_stream.append(
                        "students",
                        {
                            "student": student.student,
                            "student_name": student.student_name,
                            "active": student.active,
                        },
                    )
                    moved_students.add(student.student)
                    total_moved += 1
                    students_added = True

            if students_added:
                new_stream.save(ignore_permissions=True)
                frappe.db.commit()

        except Exception as e:
            frappe.db.rollback()
            frappe.log_error(
                "Promotion Process Error", f"Error processing rule {rule}: {str(e)}"
            )
            continue

    return total_moved


@frappe.whitelist()
def process_promotions(doc):
    if not doc.promotion_rules_engine:
        frappe.throw(_("Please define promotion rules first"))

    promotion_rules = []
    academic_year = doc.new_academic_year if doc.new_academic_year else None
    for rule in doc.promotion_rules_engine:
        promotion_rules.append(
            {
                "current_class": rule.get("current_class"),
                "current_stream": rule.get("current_stream"),
                "new_class": rule.get("new_class"),
                "new_stream": rule.get("new_stream"),
            }
        )
    promote_students_based_on_rules(promotion_rules, academic_year)

    frappe.msgprint(_("Student promotion started in background"))


def enroll_students_based_on_promotion(
    students,
    promotion_rules,
    academic_year=None,
    academic_term=None,
    enrollment_date=getdate(),
):
    """
    Enroll students based on promotion rules into a new program.
    """
    if not promotion_rules:
        frappe.throw(_("No promotion rules defined for enrollment."))

    created_enrollments = 0

    promotion_map = {rule.current_class: rule.new_class for rule in promotion_rules}
    new_stream_map = {rule.current_stream: rule.new_stream for rule in promotion_rules}

    for student in students:
        try:
            current_program = student.program

            new_program = promotion_map.get(current_program)
            new_stream = new_stream_map.get(student.custom_stream)
            if not new_program:
                continue
            if not new_stream:
                continue

            # Create new Program Enrollment
            new_enrollment = frappe.new_doc("Program Enrollment")
            new_enrollment.student = student.student
            new_enrollment.student_name = student.student_name
            new_enrollment.student_category = student.student_category
            new_enrollment.program = new_program
            new_enrollment.custom_stream = new_stream
            new_enrollment.academic_year = academic_year
            new_enrollment.academic_term = academic_term
            new_enrollment.student_batch_name = student.student_batch_name
            new_enrollment.enrollment_date = enrollment_date
            new_enrollment.save()
            new_enrollment.submit()
            created_enrollments += 1

        except Exception as e:
            frappe.log_error(
                title="Error in enroll_students_based_on_promotion",
                message=f"Error: {str(e)}",
            )
            continue

    return created_enrollments


def create_academic_year():
    settings = get_education_settings()
    if not settings.custom_autocreate_academic_year:
        return
    """Automatically creates an academic year at the start of each new year."""
    current_year = getdate().year
    academic_year_name = f"{current_year} Academic Year"

    if not frappe.db.exists("Academic Year", academic_year_name):
        academic_year = frappe.get_doc(
            {
                "doctype": "Academic Year",
                "academic_year_name": academic_year_name,
                "year_start_date": get_year_start(getdate()),
                "year_end_date": get_year_ending(getdate()),
            }
        )
        academic_year.insert(ignore_permissions=True)
        frappe.db.commit()


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


def update_enrollment_tool():
    settings = get_education_settings()
    if not settings.custom_auto_enroll_students_yearly:
        return

    year_start = get_year_start(getdate())
    month_last_day = get_last_day(year_start)
    year_end = get_year_ending(getdate())
    month_first_day = get_first_day(year_end)

    for auto_enrollments in frappe.get_all(
        "Automated Program Enrollment Tool", fields=["name"]
    ):
        enrollment_doc = frappe.get_doc(
            "Automated Program Enrollment Tool", auto_enrollments.name
        )
        if not enrollment_doc:
            continue

        # TODO: Change this academic year fetching logic to check if there is an academic year that starts in January and ends in Dec of the current year
        academic_year = frappe.get_all(
            "Academic Year",
            fields=["name"],
            filters={
                "year_start_date": ["between", [year_start, month_last_day]],
                "year_end_date": ["between", [month_first_day, year_end]],
            },
        )

        if not academic_year:
            frappe.throw(_("No Academic Year found."))

        enrollment_doc.new_academic_year = academic_year[0].name

        # Get students from Automated Program Enrollment
        students = enrollment_doc.get_students()

        if students:
            enrollment_doc.students = []

            for student in students:
                enrollment_doc.append(
                    "students",
                    {
                        "student": student.get("student"),
                        "student_name": student.get("student_name"),
                        "student_category": student.get("student_category"),
                        "student_batch_name": student.get("student_batch_name"),
                    },
                )

            enrollment_doc.save()

            enrollment_doc.enroll_students()
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


@frappe.whitelist()
def get_students(
    academic_year,
    group_based_on,
    company,
    student_group,
    academic_term=None,
    program=None,
    batch=None,
    student_category=None,
    course=None,
):
    enrolled_students = get_program_enrollment(
        academic_year,
        company,
        student_group,
        academic_term,
        program,
        batch,
        student_category,
        course,
    )

    if enrolled_students:
        student_list = []
        for s in enrolled_students:
            if frappe.db.get_value("Student", s.student, "enabled"):
                s.update({"active": 1})
            else:
                s.update({"active": 0})
            student_list.append(s)
        return student_list
    else:
        frappe.msgprint(_("No students found"))
        return []


def get_program_enrollment(
    academic_year,
    company,
    student_group,
    academic_term=None,
    program=None,
    batch=None,
    student_category=None,
    course=None,
):
    PE = frappe.qb.DocType("Program Enrollment")

    query = (
        frappe.qb.from_(PE)
        .select(PE.student, PE.student_name)
        .where(
            (PE.academic_year == academic_year)
            & (PE.company == company)
            & (PE.docstatus == 1)
            & (PE.custom_stream == student_group)
        )
        .orderby(PE.student_name)
    )

    if academic_term:
        query = query.where(PE.academic_term == academic_term)
    if program:
        query = query.where(PE.program == program)
    if batch:
        query = query.where(PE.student_batch_name == batch)
    if student_category:
        query = query.where(PE.student_category == student_category)

    if course:
        PEC = frappe.qb.DocType("Program Enrollment Course")
        query = (
            query.left_join(PEC).on(PE.name == PEC.parent).where(PEC.course == course)
        )

    return query.run(as_dict=True)
