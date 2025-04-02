# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import frappe
import random
from datetime import datetime, timedelta

class TimetableGenerator(Document):
	pass
@frappe.whitelist()
def generate_timetable():
    """
    Generates a timetable for the entire academic term using frappe.db.exists() for conflict checking.
    Uses dates from the linked academic term in Timetable Generator.
    """
    try:
        # Get the Timetable Generator document
        timetable_doc = frappe.get_doc("Timetable Generator")
        
        # Get academic term dates
        academic_term = frappe.get_doc("Academic Term", timetable_doc.academic_term)
        term_start_date = academic_term.term_start_date
        term_end_date = academic_term.term_end_date
        
        # Validate term dates
        if not term_start_date or not term_end_date:
            frappe.throw("Academic Term must have start and end dates")
        if term_start_date >= term_end_date:
            frappe.throw("Academic Term end date must be after start date")

        teacher_preferences = frappe.get_all("Teacher Preference", 
            fields=["teacher", "subject", "stream", "max_period_per_day", "max_period_per_week"]
        )
        subject_rules = frappe.get_all("Subject Rules", 
            fields=["subject", "frequency_per_week", "allow_double_session", "double_lessons_per_week"]
        )
        
        classrooms = frappe.get_all("Teaching Rooms", fields=["subject", "room"])

        weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        start_time = datetime.strptime("08:00", "%H:%M") 
        period_duration = 45
        max_periods_per_day = 7  # Assuming 7 periods per day

        successful_schedules = 0
        total_required = sum(rule["frequency_per_week"] for rule in subject_rules) * \
                        ((term_end_date - term_start_date).days // 7)  # Total weeks in term

        # Generate all valid school days in the term
        school_days = []
        current_date = term_start_date
        while current_date <= term_end_date:
            if current_date.strftime("%A") in weekdays:  # Only weekdays
                school_days.append(current_date)
            current_date += timedelta(days=1)

        for rule in subject_rules:
            subject = rule["subject"]
            weekly_frequency = rule["frequency_per_week"]
            allow_double = rule["allow_double_session"]
            double_sessions = rule["double_lessons_per_week"]
            available_teachers = [t for t in teacher_preferences if t["subject"] == subject]
            
            if not available_teachers:
                frappe.msgprint(f"No available teachers for {subject}, skipping")
                continue

            # Calculate total required sessions for the term
            total_weeks = len(school_days) // 5
            total_required_sessions = weekly_frequency * total_weeks
            assigned_sessions = 0
            attempts = 0

            while assigned_sessions < total_required_sessions and attempts < len(available_teachers) * len(school_days) * max_periods_per_day:
                attempts += 1
                
                # Select a random school day
                day = random.choice(school_days)
                
                # Rotate through teachers
                teacher = available_teachers[attempts % len(available_teachers)]
                
                room = next((c["room"] for c in classrooms if c["subject"] == subject), None)
                if not room:
                    room = f"{teacher['stream']} Classroom"  

                # Try different periods
                period_num = (attempts // len(available_teachers)) % max_periods_per_day
                from_time = start_time + timedelta(minutes=(period_num * period_duration))
                
                # Determine if we'll try a double session
                is_double = allow_double and double_sessions > 0 and (total_required_sessions - assigned_sessions) >= 2
                to_time = from_time + timedelta(minutes=period_duration * (2 if is_double else 1))

                # Check for existing conflicts using frappe.db.exists()
                conflict_exists = False
                
                # 1. Check if teacher is already booked at this time
                if frappe.db.exists("Course Schedule", {
                    "instructor": teacher["teacher"],
                    "scheduled_date": day.strftime("%Y-%m-%d"),
                    "from_time": ["<", to_time.strftime("%H:%M")],
                    "to_time": [">", from_time.strftime("%H:%M")]
                }):
                    conflict_exists = True

                # 2. Check if room is already booked
                elif frappe.db.exists("Course Schedule", {
                    "room": room,
                    "scheduled_date": day.strftime("%Y-%m-%d"),
                    "from_time": ["<", to_time.strftime("%H:%M")],
                    "to_time": [">", from_time.strftime("%H:%M")]
                }):
                    conflict_exists = True

                # 3. Check if student group is already booked
                elif frappe.db.exists("Course Schedule", {
                    "student_group": teacher["stream"],
                    "scheduled_date": day.strftime("%Y-%m-%d"),
                    "from_time": ["<", to_time.strftime("%H:%M")],
                    "to_time": [">", from_time.strftime("%H:%M")]
                }):
                    conflict_exists = True

                if conflict_exists:
                    continue  # Skip to next attempt

                # If no conflicts, create the schedule
                try:
                    class_schedule = frappe.get_doc({
                        "doctype": "Course Schedule",
                        "instructor": teacher["teacher"],
                        "student_group": teacher["stream"],
                        "course": subject,
                        "from_time": from_time.strftime("%H:%M"),
                        "to_time": to_time.strftime("%H:%M"),
                        "scheduled_date": day.strftime("%Y-%m-%d"),
                        "room": room
                    })
                    
                    class_schedule.insert(ignore_permissions=True)
                    frappe.db.commit()
                    
                    successful_schedules += 1
                    frappe.msgprint(f"✓ Scheduled: {subject} with {teacher['teacher']} on {day.strftime('%Y-%m-%d')} at {from_time.strftime('%H:%M')}")
                    
                    assigned_sessions += 2 if is_double else 1
                    if is_double:
                        double_sessions -= 1
                        
                except Exception as e:
                    frappe.db.rollback()
                    frappe.log_error(f"Unexpected error creating schedule: {str(e)}")
                    continue

        success_rate = (successful_schedules/total_required)*100 if total_required > 0 else 0
        return {
            "message": f"Generated {successful_schedules} of {total_required} required schedules ({success_rate:.1f}% success)",
            "schedules_created": successful_schedules,
            "success_rate": success_rate,
            "term_start": term_start_date.strftime("%Y-%m-%d"),
            "term_end": term_end_date.strftime("%Y-%m-%d")
        }

    except Exception as e:
        frappe.log_error(f"Timetable Generation Failed: {str(e)}", "Timetable Generator")
        frappe.db.rollback()
        return {
            "error": str(e),
            "message": "Timetable generation failed"
        }