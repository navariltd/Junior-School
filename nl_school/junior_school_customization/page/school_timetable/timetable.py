import frappe

@frappe.whitelist()
def get_course_schedule(instructor=None, stream=None):
    filters = {}

    if instructor:
        filters["instructor"] = ["like", f"%{instructor}%"]
    if stream:
        filters["student_group"] = ["like", f"%{stream}%"]

    schedules = frappe.get_all(
        "Course Schedule", 
        filters=filters,
        fields=["name", "course", "instructor", "student_group", "schedule_date", "from_time", "to_time","room","program"]
    )
    return schedules


@frappe.whitelist()
def get_teachers():
    """Fetch all teachers."""
    teachers = frappe.get_all("Instructor", fields=["name", "instructor_name"])
    return [{"value": t.name, "label": t.instructor_name} for t in teachers]


@frappe.whitelist()
def get_streams():
    """Fetch all streams."""
    streams = frappe.get_all("Student Group", fields=["name", "program"])
    return [{"value": s.name, "label": s.group_name} for s in streams]
