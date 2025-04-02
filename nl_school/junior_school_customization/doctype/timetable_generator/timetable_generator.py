# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

from frappe.model.document import Document
import frappe
import random
from datetime import datetime, timedelta
import json

class TimetableGenerator(Document):
    pass

def check_conflicts(day, from_time, to_time, teacher, room, student_group):
    """Check for scheduling conflicts with existing course schedules."""
    try:
        conflicts = frappe.db.sql("""
            SELECT name FROM `tabCourse Schedule` 
            WHERE 
                (instructor = %s OR room = %s OR student_group = %s)
                AND schedule_date = %s
                AND (
                    (from_time < %s AND to_time > %s) OR 
                    (from_time < %s AND to_time > %s) OR 
                    (from_time >= %s AND to_time <= %s)
                )
        """, (
            teacher, room, student_group, 
            day.strftime("%Y-%m-%d"),
            to_time.strftime("%H:%M:%S"), from_time.strftime("%H:%M:%S"),
            from_time.strftime("%H:%M:%S"), from_time.strftime("%H:%M:%S"),
            from_time.strftime("%H:%M:%S"), to_time.strftime("%H:%M:%S")
        ), as_dict=1)
        
        return len(conflicts) == 0
    except Exception as e:
        frappe.log_error(f"Error checking conflicts: {str(e)}")
        return False

def check_temp_conflicts(schedule_entry, temp_schedule):
    """Check for conflicts within the temporary schedule being built."""
    new_day = schedule_entry["schedule_date"]
    new_teacher = schedule_entry["instructor"]
    new_room = schedule_entry["room"]
    new_group = schedule_entry["student_group"]
    new_from = schedule_entry["from_time"]
    new_to = schedule_entry["to_time"]
    
    for entry in temp_schedule:
        if entry["schedule_date"] == new_day:
            if (entry["instructor"] == new_teacher or 
                entry["room"] == new_room or 
                entry["student_group"] == new_group):
                
                if ((entry["from_time"] <= new_to and entry["to_time"] >= new_from) or
                    (new_from <= entry["to_time"] and new_to >= entry["from_time"])):
                    return False
    
    return True

def get_school_days(start_date, days_needed=5):
    """Get school days (Monday-Friday) starting from the given date."""
    school_days = []
    current_date = start_date
    
    while len(school_days) < days_needed:
        if current_date.weekday() < 5:  
            school_days.append(current_date)
        current_date += timedelta(days=1)
    
    return school_days

def get_period_slots(periods_per_day=7):
    """Generate time slots for periods."""
    start_time = datetime.strptime("08:00", "%H:%M")
    period_duration = 45 
    
    slots = []
    for i in range(periods_per_day):
        from_time = start_time + timedelta(minutes=i * period_duration)
        to_time = from_time + timedelta(minutes=period_duration)
        slots.append({
            "period": i + 1,
            "from_time": from_time.strftime("%H:%M"),
            "to_time": to_time.strftime("%H:%M")
        })
    
    return slots

def load_configuration():
    """Load timetable configuration from documents."""
    try:
        timetable_doc = frappe.get_doc("Timetable Generator")
        academic_term = frappe.get_doc("Academic Term", timetable_doc.academic_term)
        
        term_start_date = academic_term.term_start_date
        term_end_date = academic_term.term_end_date
        
        if not term_start_date or not term_end_date or term_start_date >= term_end_date:
            frappe.throw("Invalid Academic Term dates")
        
        # Fetching required data
        teacher_preferences = frappe.get_all("Teacher Preference", fields=["teacher", "subject", "stream"])
        subject_rules = frappe.get_all("Subject Rules", fields=["subject", "frequency_per_week"])
        classrooms = frappe.get_all("Teaching Rooms", fields=["subject", "room"])
        
        # If no data is found, throw an error
        if not teacher_preferences:
            frappe.throw("No teacher preferences found. Please configure teacher preferences first.")
        if not subject_rules:
            frappe.throw("No subject rules found. Please configure subject frequency first.")
        
        return {
            "term_start_date": term_start_date,
            "term_end_date": term_end_date,
            "teacher_preferences": teacher_preferences,
            "subject_rules": subject_rules,
            "classrooms": classrooms
        }
    except Exception as e:
        frappe.log_error(f"Failed to load configuration: {str(e)}")
        raise

def prepare_subjects(subject_rules):
    """Prepare subjects for scheduling based on frequency."""
    expanded_subjects = []
    
    sorted_subjects = sorted(subject_rules, key=lambda x: -x.get("frequency_per_week", 1))
    
    for subject in sorted_subjects:
        frequency = subject.get("frequency_per_week", 1)
        for i in range(frequency):
            expanded_subjects.append({
                "subject": subject["subject"],
                "instance": i + 1  # Track instance number for distribution
            })
    
    random.shuffle(expanded_subjects)
    
    return expanded_subjects


def distribute_subjects(subjects, school_days):
    """Pre-distribute subjects across days for better balance."""
    day_assignments = {day.strftime("%Y-%m-%d"): [] for day in school_days}
    
    unique_subjects = set(item["subject"] for item in subjects)
    
    for subject_name in unique_subjects:
        target_day = min(day_assignments.keys(), key=lambda d: len(day_assignments[d]))
        day_assignments[target_day].append(subject_name)
    
    for subject in subjects:
        day_counts = {day: day_assignments[day].count(subject["subject"]) for day in day_assignments}
        target_day = min(day_counts, key=day_counts.get)
        day_assignments[target_day].append(subject["subject"])
    
    return day_assignments


def try_schedule_subject(subject, teacher_prefs, classrooms, day, period_slot, temp_schedule):
    """Try to schedule a single subject for a specific day and period."""
    available_teachers = [t for t in teacher_prefs if t["subject"] == subject["subject"]]
    
    if not available_teachers:
        return None
    
    from_time = datetime.strptime(period_slot["from_time"], "%H:%M")
    to_time = datetime.strptime(period_slot["to_time"], "%H:%M")
    
    for teacher in random.sample(available_teachers, len(available_teachers)):
        # Find appropriate room
        room = next((c["room"] for c in classrooms if c["subject"] == subject["subject"]), "HTL-ROOM-2025-00016")
        
        # Create potential schedule entry
        schedule_entry = {
            "doctype": "Course Schedule",
            "instructor": teacher["teacher"],
            "student_group": teacher["stream"],
            "course": subject["subject"],
            "from_time": period_slot["from_time"],
            "to_time": period_slot["to_time"],
            "schedule_date": day.strftime("%Y-%m-%d"),
            "room": room
        }
        
        if check_conflicts(day, from_time, to_time, teacher["teacher"], room, teacher["stream"]):
            if check_temp_conflicts(schedule_entry, temp_schedule):
                return schedule_entry
    
    return None

def create_schedule_batch(subjects_batch, teacher_prefs, classrooms, school_days, period_slots):
    """Create schedule for a batch of subjects."""
    temp_schedule = []
    scheduled_subjects = []
    unscheduled_subjects = []
    
    day_distribution = distribute_subjects(subjects_batch, school_days)
    
    for subject in subjects_batch:
        scheduled = False
        
        preferred_days = [day for day, subjects in day_distribution.items() 
                         if subject["subject"] in subjects]
        
        sorted_days = []
        for day in school_days:
            day_str = day.strftime("%Y-%m-%d")
            if day_str in preferred_days:
                sorted_days.insert(0, day)
            else:
                sorted_days.append(day)
        
        for day in sorted_days:
            if scheduled:
                break
                
            for period in random.sample(period_slots, len(period_slots)):
                entry = try_schedule_subject(
                    subject, teacher_prefs, classrooms, day, period, temp_schedule
                )
                
                if entry:
                    temp_schedule.append(entry)
                    scheduled_subjects.append(subject)
                    scheduled = True
                    break
        
        if not scheduled:
            unscheduled_subjects.append(subject)
    
    return temp_schedule, scheduled_subjects, unscheduled_subjects

def save_schedule(schedule):
    """Save schedule entries to the database."""
    successful = 0
    failed = 0
    
    for entry in schedule:
        try:
            doc = frappe.get_doc(entry)
            doc.insert(ignore_permissions=True)
            successful += 1
        except Exception as e:
            frappe.log_error(f"Failed to create schedule entry: {str(e)}")
            failed += 1
    
    if successful > 0:
        frappe.db.commit()
    
    return successful, failed

def clear_existing_schedules(academic_term):
    """Clear existing schedules for the academic term."""
    try:
        # Get date range for the academic term
        term_doc = frappe.get_doc("Academic Term", academic_term)
        start_date = term_doc.term_start_date
        end_date = term_doc.term_end_date
        
        # Delete existing schedules within the date range
        frappe.db.sql("""
            DELETE FROM `tabCourse Schedule` 
            WHERE schedule_date BETWEEN %s AND %s
        """, (start_date, end_date))
        
        frappe.db.commit()
        return True
    except Exception as e:
        frappe.log_error(f"Failed to clear existing schedules: {str(e)}")
        return False

@frappe.whitelist()
def generate_timetable():
    """Main function to generate a complete timetable for the week."""
    try:
        config = load_configuration()
        
        if frappe.form_dict.get("clear_existing", "0") == "1":
            clear_existing_schedules(frappe.get_doc("Timetable Generator").academic_term)
        
        school_days = get_school_days(config["term_start_date"])
        period_slots = get_period_slots()
        
        subjects = prepare_subjects(config["subject_rules"])
        
        total_subjects = len(subjects)
        final_schedule = []
        scheduled_subjects = []
        unscheduled_subjects = []
        
        batches = 3
        batch_size = (total_subjects + batches - 1) // batches  
        
        for i in range(0, total_subjects, batch_size):
            batch = subjects[i:i+batch_size]
            
            batch_schedule, batch_scheduled, batch_unscheduled = create_schedule_batch(
                batch, 
                config["teacher_preferences"], 
                config["classrooms"], 
                school_days, 
                period_slots
            )
            
            final_schedule.extend(batch_schedule)
            scheduled_subjects.extend(batch_scheduled)
            unscheduled_subjects.extend(batch_unscheduled)
        
        if unscheduled_subjects:
            retry_schedule, retry_scheduled, still_unscheduled = create_schedule_batch(
                unscheduled_subjects,
                config["teacher_preferences"],
                config["classrooms"],
                school_days,
                period_slots
            )
            
            final_schedule.extend(retry_schedule)
            scheduled_subjects.extend(retry_scheduled)
            unscheduled_subjects = still_unscheduled
        
        successful, failed = save_schedule(final_schedule)
        
        total_scheduled = len(scheduled_subjects)
        total_unscheduled = len(unscheduled_subjects)
        
        return {
            "success": total_unscheduled == 0,
            "message": f"Generated {successful} schedule entries.",
            "stats": {
                "total_subjects": total_subjects,
                "scheduled": total_scheduled,
                "unscheduled": total_unscheduled,
                "save_success": successful,
                "save_failed": failed
            },
            "unscheduled_subjects": [s["subject"] for s in unscheduled_subjects]
        }
        
    except Exception as e:
        frappe.log_error(f"Timetable Generation Failed: {str(e)}", "Timetable Generator")
        frappe.db.rollback()
        return {
            "success": False,
            "error": str(e),
            "message": "Timetable generation failed. See error log for details."
        }

@frappe.whitelist()
def debug_timetable_generation():
    """Run timetable generation with debugging output."""
    try:
        config = load_configuration()
        
        school_days = get_school_days(config["term_start_date"])
        period_slots = get_period_slots()
        
        debug_info = {
            "school_days": [day.strftime("%Y-%m-%d") for day in school_days],
            "period_slots": period_slots,
            "teacher_count": len(config["teacher_preferences"]),
            "subject_count": len(config["subject_rules"]),
            "classroom_count": len(config["classrooms"]),
            "subjects": [{
                "subject": s["subject"], 
                "frequency": s.get("frequency_per_week", 1)
            } for s in config["subject_rules"]],
            "teachers": [{
                "teacher": t["teacher"],
                "subject": t["subject"],
                "stream": t["stream"]
            } for t in config["teacher_preferences"][:10]]  
        }
        
        return {
            "success": True,
            "debug_info": debug_info
        }
        
    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }
        
        