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
