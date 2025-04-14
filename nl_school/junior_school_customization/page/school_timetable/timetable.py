import frappe
from frappe import _

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
        fields=["name", "course", "instructor", "student_group", "schedule_date", "from_time", "to_time", "room", "program"]
    )
    return schedules

@frappe.whitelist()
def get_course_schedule_details(schedule_name):
    """Get all details of a specific course schedule."""
    if not schedule_name:
        return None
    
    return frappe.get_doc("Course Schedule", schedule_name)

@frappe.whitelist()
def update_course_schedule(schedule_name, schedule_date=None, from_time=None, to_time=None):
    """Update time and date of course schedule after drag/resize."""
    try:
        if not schedule_name:
            return "error"
        
        doc = frappe.get_doc("Course Schedule", schedule_name)
        
        if schedule_date:
            doc.schedule_date = schedule_date
            
        if from_time:
            doc.from_time = from_time
            
        if to_time:
            doc.to_time = to_time
            
        doc.save()
        frappe.db.commit()
        return "success"
    except Exception as e:
        frappe.log_error(f"Failed to update course schedule: {str(e)}")
        return "error"

@frappe.whitelist()
def update_course_schedule_details(schedule_name, course=None, instructor=None, student_group=None, 
                                   room=None, schedule_date=None, from_time=None, to_time=None):
    """Update all details of a course schedule from the edit modal."""
    try:
        if not schedule_name:
            return "error"
        
        doc = frappe.get_doc("Course Schedule", schedule_name)
        
        if course:
            doc.course = course
            
        if instructor:
            doc.instructor = instructor
            
        if student_group:
            doc.student_group = student_group
            
        if room:
            doc.room = room
            
        if schedule_date:
            doc.schedule_date = schedule_date
            
        if from_time:
            doc.from_time = from_time
            
        if to_time:
            doc.to_time = to_time
            
        doc.save()
        frappe.db.commit()
        return "success"
    except Exception as e:
        frappe.log_error(f"Failed to update course schedule details: {str(e)}")
        return "error"

@frappe.whitelist()
def get_teachers():
    """Fetch all teachers."""
    teachers = frappe.get_all("Instructor", fields=["name", "instructor_name"])
    return [{"value": t.name, "label": t.instructor_name} for t in teachers]

@frappe.whitelist()
def get_streams():
    """Fetch all streams."""
    streams = frappe.get_all("Student Group", fields=["name", "program"])
    return [{"value": s.name, "label": s.program} for s in streams]