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
        # Fix the time comparison logic - simplify the query to check basic overlap
        conflicts = frappe.db.sql("""
            SELECT name FROM `tabCourse Schedule` 
            WHERE 
                (instructor = %s OR room = %s OR student_group = %s)
                AND schedule_date = %s
                AND (
                    (from_time < %s AND to_time > %s) OR 
                    (from_time >= %s AND from_time < %s) OR 
                    (to_time > %s AND to_time <= %s)
                )
        """, (
            teacher, room, student_group, 
            day.strftime("%Y-%m-%d"),
            to_time.strftime("%H:%M:%S"), from_time.strftime("%H:%M:%S"),
            from_time.strftime("%H:%M:%S"), to_time.strftime("%H:%M:%S"),
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
    new_subject = schedule_entry["course"]
    # Convert string times to datetime objects for proper comparison
    new_from = datetime.strptime(schedule_entry["from_time"], "%H:%M")
    new_to = datetime.strptime(schedule_entry["to_time"], "%H:%M")
    
    # Count occurrences of this subject on this day for this specific student group
    subject_count_today = sum(1 for entry in temp_schedule 
                             if entry["schedule_date"] == new_day 
                             and entry["course"] == new_subject
                             and entry["student_group"] == new_group)
    
    # Check teacher daily workload
    teacher_daily_load = sum(1 for entry in temp_schedule 
                             if entry["schedule_date"] == new_day 
                             and entry["instructor"] == new_teacher)
    
    # Get teacher preferences for max periods
    teacher_prefs = frappe.get_all(
        "Teacher Preference", 
        filters={"teacher": new_teacher},
        fields=["max_period_per_day", "max_period_per_week"]
    )
    
    max_per_day = teacher_prefs[0].get("max_period_per_day") if teacher_prefs else 7
    if max_per_day == 0:  # If not specified, use default
        max_per_day = 7
    
    if teacher_daily_load >= max_per_day:
        return False
    
    # Check weekly teacher load
    teacher_weekly_load = sum(1 for entry in temp_schedule 
                             if entry["instructor"] == new_teacher)
    
    max_per_week = teacher_prefs[0].get("max_period_per_week") if teacher_prefs else 35
    if max_per_week == 0:  # If not specified, use default
        max_per_week = 35
        
    if teacher_weekly_load >= max_per_week:
        return False
    
    # Default to max 1 per day, or 2 if allow_double is True
    subject_rules = frappe.get_all(
        "Subject Rules", 
        filters={"subject": new_subject},
        fields=["allow_double"]
    )
    
    max_per_day = 2 if subject_rules and subject_rules[0].get("allow_double") else 1
    
    if subject_count_today >= max_per_day:
        return False
    
    for entry in temp_schedule:
        if entry["schedule_date"] == new_day:
            # Check for resource conflicts - only consider real conflicts
            conflict_resources = []
            
            if entry["instructor"] == new_teacher:
                conflict_resources.append("teacher")
            if entry["room"] == new_room:
                conflict_resources.append("room")
            if entry["student_group"] == new_group:
                conflict_resources.append("student_group")
                
            # If any resources conflict, check for time overlap
            if conflict_resources:
                # Convert entry times to datetime for comparison
                entry_from = datetime.strptime(entry["from_time"], "%H:%M")
                entry_to = datetime.strptime(entry["to_time"], "%H:%M")
                
                # Check for time overlap
                if ((entry_from < new_to and entry_to > new_from) or
                    (new_from < entry_to and new_to > entry_from)):
                    return False
    
    return True

def get_school_days(start_date, days_needed=5):
    """Get school days (Monday-Friday) starting from the given date."""
    school_days = []
    current_date = start_date
    
    # If start date isn't a Monday, adjust to next Monday
    while current_date.weekday() != 0:  # 0 = Monday
        current_date += timedelta(days=1)
    
    while len(school_days) < days_needed:
        if current_date.weekday() < 5:  # Monday-Friday (0-4)
            school_days.append(current_date)
        current_date += timedelta(days=1)
    
    return school_days

def get_period_slots(periods_per_day=7):
    """Generate time slots for periods."""
    start_time = datetime.strptime("08:00", "%H:%M")
    period_duration = 45  # minutes
    break_duration = 5    # minutes between periods
    
    slots = []
    current_time = start_time
    
    for i in range(periods_per_day):
        from_time = current_time
        to_time = from_time + timedelta(minutes=period_duration)
        
        slots.append({
            "period": i + 1,
            "from_time": from_time.strftime("%H:%M"),
            "to_time": to_time.strftime("%H:%M")
        })
        
        # Add break between periods
        current_time = to_time + timedelta(minutes=break_duration)
    
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
        teacher_preferences = frappe.get_all("Teacher Preference", 
                                           fields=["teacher", "subject", "stream", "max_period_per_week", "max_period_per_day"])
        subject_rules = frappe.get_all("Subject Rules", 
                                     fields=["subject", "frequency_per_week", "allow_double", "max_time"])
        classrooms = frappe.get_all("Teaching Rooms", 
                                  fields=["subject", "room"])
        # Get all available streams
        all_streams = frappe.get_all("Student Group", fields=["name"])
        
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
            "classrooms": classrooms,
            "academic_term": timetable_doc.academic_term,
            "all_streams": all_streams
        }
    except Exception as e:
        frappe.log_error(f"Failed to load configuration: {str(e)}")
        raise

def prepare_scheduling_data(teacher_preferences, subject_rules, all_streams):
    """Prepare comprehensive scheduling data by matching subjects with streams and teachers."""
    scheduling_data = []
    
    # Process each stream
    for stream in all_streams:
        stream_name = stream["name"]
        
        # For this stream, find all applicable subjects from subject rules
        for subject in subject_rules:
            subject_name = subject["subject"]
            frequency = subject.get("frequency_per_week", 1)
            
            # Find teachers who can teach this subject to this stream
            capable_teachers = [t for t in teacher_preferences 
                               if t["subject"] == subject_name and t["stream"] == stream_name]
            
            # If no specific teacher is assigned, find any teacher for this subject
            if not capable_teachers:
                capable_teachers = [t for t in teacher_preferences if t["subject"] == subject_name]
            
            # Skip if no teacher available
            if not capable_teachers:
                continue
                
            # Create scheduling entries for this subject-stream combination
            for i in range(frequency):
                scheduling_data.append({
                    "subject": subject_name,
                    "stream": stream_name,
                    "teachers": capable_teachers,
                    "priority": subject.get("frequency_per_week", 1),
                    "allow_double": subject.get("allow_double", False),
                    "instance": i + 1,
                    "scheduled": False
                })
    
    # Shuffle for better distribution but respect priority
    random.shuffle(scheduling_data)
    scheduling_data.sort(key=lambda x: -x["priority"])
    
    return scheduling_data

def create_full_schedule(scheduling_data, teacher_prefs, classrooms, school_days, period_slots):
    """Create a complete schedule for all subjects across all streams."""
    temp_schedule = []
    scheduled_items = []
    unscheduled_items = []
    
    # Track teacher workload
    teacher_workload = {t["teacher"]: {"total": 0, "daily": {}} for t in teacher_prefs}
    
    # Pre-compute available rooms by subject
    room_by_subject = {}
    for classroom in classrooms:
        if classroom["subject"] not in room_by_subject:
            room_by_subject[classroom["subject"]] = []
        room_by_subject[classroom["subject"]].append(classroom["room"])
    
    # Default room if none specified
    default_room = "HTL-ROOM-2025-00016"
    
    # For each day and period, try to schedule high-priority items first
    for day in school_days:
        day_str = day.strftime("%Y-%m-%d")
        
        # Initialize daily workload tracking
        for teacher in teacher_workload:
            teacher_workload[teacher]["daily"][day_str] = 0
        
        for period in period_slots:
            # Sort scheduling data by whether it's been tried today
            for item in scheduling_data:
                if item["scheduled"]:
                    continue
                
                subject = item["subject"]
                stream = item["stream"]
                
                # Try each available teacher
                for teacher_data in item["teachers"]:
                    teacher = teacher_data["teacher"]
                    
                    # Check teacher workload limits
                    max_per_day = teacher_data.get("max_period_per_day") or 7
                    max_per_week = teacher_data.get("max_period_per_week") or 35
                    
                    if teacher_workload[teacher]["daily"].get(day_str, 0) >= max_per_day:
                        continue
                        
                    if teacher_workload[teacher]["total"] >= max_per_week:
                        continue
                    
                    # Select room
                    room = None
                    if subject in room_by_subject and room_by_subject[subject]:
                        room = random.choice(room_by_subject[subject])
                    else:
                        room = default_room
                    
                    # Create potential schedule entry
                    schedule_entry = {
                        "doctype": "Course Schedule",
                        "instructor": teacher,
                        "student_group": stream,
                        "course": subject,
                        "from_time": period["from_time"],
                        "to_time": period["to_time"],
                        "schedule_date": day_str,
                        "room": room
                    }
                    
                    # Check for conflicts
                    from_time = datetime.strptime(period["from_time"], "%H:%M")
                    to_time = datetime.strptime(period["to_time"], "%H:%M") 
                    
                    if check_conflicts(day, from_time, to_time, teacher, room, stream):
                        if check_temp_conflicts(schedule_entry, temp_schedule):
                            # Schedule is valid
                            temp_schedule.append(schedule_entry)
                            item["scheduled"] = True
                            scheduled_items.append(item)
                            
                            # Update teacher workload
                            teacher_workload[teacher]["total"] += 1
                            if day_str not in teacher_workload[teacher]["daily"]:
                                teacher_workload[teacher]["daily"][day_str] = 0
                            teacher_workload[teacher]["daily"][day_str] += 1
                            
                            break  # Move to next item
                
                if item["scheduled"]:
                    continue  # Move to next item if this one was scheduled
    
    # Identify unscheduled items
    unscheduled_items = [item for item in scheduling_data if not item["scheduled"]]
    
    # Attempt to schedule any remaining items with more relaxed constraints
    return temp_schedule, scheduled_items, unscheduled_items

def retry_scheduling(unscheduled_items, teacher_prefs, classrooms, school_days, period_slots, existing_schedule):
    """Try again to schedule unscheduled items with relaxed constraints."""
    temp_schedule = existing_schedule.copy()
    newly_scheduled = []
    still_unscheduled = []
    
    # Track teacher workload based on existing schedule
    teacher_workload = {}
    for entry in existing_schedule:
        teacher = entry["instructor"]
        day = entry["schedule_date"]
        
        if teacher not in teacher_workload:
            teacher_workload[teacher] = {"total": 0, "daily": {}}
        
        teacher_workload[teacher]["total"] = teacher_workload[teacher].get("total", 0) + 1
        if day not in teacher_workload[teacher]["daily"]:
            teacher_workload[teacher]["daily"][day] = 0
        teacher_workload[teacher]["daily"][day] += 1
    
    # Initialize any missing teachers
    for t in teacher_prefs:
        if t["teacher"] not in teacher_workload:
            teacher_workload[t["teacher"]] = {"total": 0, "daily": {}}
    
    # Try all combinations of days and periods
    for item in unscheduled_items:
        item_scheduled = False
        
        # Try all days and periods
        for day in school_days:
            if item_scheduled:
                break
                
            day_str = day.strftime("%Y-%m-%d")
            
            for period in period_slots:
                if item_scheduled:
                    break
                    
                for teacher_data in item["teachers"]:
                    teacher = teacher_data["teacher"]
                    
                    # Get room (less strict)
                    room = "HTL-ROOM-2025-00016"  # Default room as fallback
                    for classroom in classrooms:
                        if classroom["subject"] == item["subject"]:
                            room = classroom["room"]
                            break
                    
                    # Create potential schedule entry
                    schedule_entry = {
                        "doctype": "Course Schedule",
                        "instructor": teacher,
                        "student_group": item["stream"],
                        "course": item["subject"],
                        "from_time": period["from_time"],
                        "to_time": period["to_time"],
                        "schedule_date": day_str,
                        "room": room
                    }
                    
                    # Check for conflicts with relaxed constraints
                    from_time = datetime.strptime(period["from_time"], "%H:%M")
                    to_time = datetime.strptime(period["to_time"], "%H:%M")
                    
                    if check_conflicts(day, from_time, to_time, teacher, room, item["stream"]):
                        if check_temp_conflicts(schedule_entry, temp_schedule):
                            # Schedule is valid
                            temp_schedule.append(schedule_entry)
                            item["scheduled"] = True
                            newly_scheduled.append(item)
                            
                            # Update teacher workload
                            teacher_workload[teacher]["total"] += 1
                            if day_str not in teacher_workload[teacher]["daily"]:
                                teacher_workload[teacher]["daily"][day_str] = 0  
                            teacher_workload[teacher]["daily"][day_str] += 1
                            
                            item_scheduled = True
                            break
        
        if not item["scheduled"]:
            still_unscheduled.append(item)
    
    return newly_scheduled, still_unscheduled, temp_schedule

def save_schedule(schedule, academic_term, batch_size=50):
    """Save schedule entries to the database in batches."""
    successful = 0
    failed = 0
    
    # Update job status
    frappe.publish_realtime(
        "timetable_generation_progress", 
        {"status": "Saving schedule entries", "progress": 0, "total": len(schedule)}
    )
    
    # Process in manageable batches to prevent timeouts
    for i in range(0, len(schedule), batch_size):
        batch = schedule[i:i+batch_size]
        batch_success = 0
        
        for entry in batch:
            try:
                doc = frappe.get_doc(entry)
                doc.insert(ignore_permissions=True)
                batch_success += 1
                successful += 1
            except Exception as e:
                frappe.log_error(f"Failed to create schedule entry: {str(e)}")
                failed += 1
        
        if batch_success > 0:
            frappe.db.commit()
        
        # Update progress
        progress_percent = min(100, int((i + len(batch)) / len(schedule) * 100))
        frappe.publish_realtime(
            "timetable_generation_progress", 
            {"status": "Saving schedule entries", "progress": progress_percent, "total": len(schedule)}
        )
    
    # Update job completion
    frappe.publish_realtime(
        "timetable_generation_complete", 
        {
            "academic_term": academic_term,
            "success": successful,
            "failed": failed
        }
    )
    
    return successful, failed

def clear_existing_schedules(academic_term):
    """Clear existing schedules for the academic term."""
    try:
        # Get date range for the academic term
        term_doc = frappe.get_doc("Academic Term", academic_term)
        start_date = term_doc.term_start_date
        end_date = term_doc.term_end_date
        
        # Update job status
        frappe.publish_realtime(
            "timetable_generation_progress", 
            {"status": "Clearing existing schedules", "progress": 0}
        )
        
        # Delete existing schedules within the date range
        deleted_count = frappe.db.sql("""
            DELETE FROM `tabCourse Schedule` 
            WHERE schedule_date BETWEEN %s AND %s
        """, (start_date, end_date))
        
        frappe.db.commit()
        
        # Update job status
        frappe.publish_realtime(
            "timetable_generation_progress", 
            {"status": "Existing schedules cleared", "progress": 100}
        )
        
        return True
    except Exception as e:
        frappe.log_error(f"Failed to clear existing schedules: {str(e)}")
        return False

def process_timetable_generation(config=None):
    """
    Background job processing function that handles the actual timetable generation.
    This will be called by frappe.enqueue to run in the background.
    """
    try:
        if not config:
            config = load_configuration()
        
        academic_term = config["academic_term"]
        
        # Step 1: Clear existing schedules
        frappe.publish_realtime(
            "timetable_generation_progress", 
            {"status": "Starting timetable generation", "progress": 0}
        )
        clear_existing_schedules(academic_term)
        
        # Step 2: Generate the schedule
        frappe.publish_realtime(
            "timetable_generation_progress", 
            {"status": "Preparing timetable data", "progress": 10}
        )
        
        school_days = get_school_days(config["term_start_date"])
        period_slots = get_period_slots()
        
        # New approach: prepare comprehensive scheduling data
        scheduling_data = prepare_scheduling_data(
            config["teacher_preferences"],
            config["subject_rules"],
            config["all_streams"]
        )
        
        total_items = len(scheduling_data)
        
        frappe.publish_realtime(
            "timetable_generation_progress", 
            {"status": "Creating schedule", "progress": 20}
        )
        
        # Generate the full schedule
        final_schedule, scheduled_items, unscheduled_items = create_full_schedule(
            scheduling_data,
            config["teacher_preferences"],
            config["classrooms"],
            school_days,
            period_slots
        )
        
        frappe.publish_realtime(
            "timetable_generation_progress", 
            {"status": "Processing unscheduled items", "progress": 70}
        )
        
        # Try to schedule any remaining subjects with relaxed constraints
        if unscheduled_items:
            # Add additional days if needed
            extended_days = get_school_days(config["term_start_date"] + timedelta(days=7), 5)
            
            # Try again with relaxed constraints
            newly_scheduled, still_unscheduled, updated_schedule = retry_scheduling(
                unscheduled_items,
                config["teacher_preferences"],
                config["classrooms"],
                extended_days,  # Try extended days
                period_slots,
                final_schedule  # Pass existing schedule
            )
            
            scheduled_items.extend(newly_scheduled)
            unscheduled_items = still_unscheduled
            final_schedule = updated_schedule
        
        frappe.publish_realtime(
            "timetable_generation_progress", 
            {"status": "Saving timetable to database", "progress": 80}
        )
        
        # Save the schedule to the database
        successful, failed = save_schedule(final_schedule, academic_term)
        
        total_scheduled = len(scheduled_items)
        total_unscheduled = len(unscheduled_items)
        
        # Record results to the database
        result_doc = frappe.get_doc({
            "doctype": "Timetable Generation Result",
            "academic_term": academic_term,
            "generation_date": datetime.now(),
            "total_subjects": total_items,
            "scheduled_count": total_scheduled,
            "unscheduled_count": total_unscheduled,
            "saved_count": successful,
            "failed_count": failed,
            "status": "Complete" if total_unscheduled == 0 else "Partial"
        })
        
        if unscheduled_items:
            unscheduled_info = []
            for item in unscheduled_items:
                unscheduled_info.append({
                    "subject": item["subject"],
                    "stream": item["stream"]
                })
            result_doc.unscheduled_subjects = json.dumps(unscheduled_info)
            
        result_doc.insert(ignore_permissions=True)
        frappe.db.commit()
        
        # Final notification
        frappe.publish_realtime(
            "timetable_generation_complete", 
            {
                "success": total_unscheduled == 0,
                "message": f"Generated {successful} schedule entries. Unscheduled: {total_unscheduled}",
                "stats": {
                    "total_items": total_items,
                    "scheduled": total_scheduled,
                    "unscheduled": total_unscheduled,
                    "save_success": successful,
                    "save_failed": failed
                },
                "unscheduled_items": [{"subject": s["subject"], "stream": s["stream"]} for s in unscheduled_items]
            }
        )
        
        return {
            "success": total_unscheduled == 0,
            "message": f"Generated {successful} schedule entries in the background.",
            "stats": {
                "total_items": total_items,
                "scheduled": total_scheduled,
                "unscheduled": total_unscheduled,
                "save_success": successful,
                "save_failed": failed
            }
        }
        
    except Exception as e:
        error_msg = f"Timetable Generation Failed: {str(e)}"
        frappe.log_error(error_msg, "Timetable Generator")
        frappe.db.rollback()
        
        # Notify about failure
        frappe.publish_realtime(
            "timetable_generation_error", 
            {
                "error": str(e),
                "message": "Timetable generation failed. See error log for details."
            }
        )
        
        return {
            "success": False,
            "error": str(e),
            "message": "Timetable generation failed. See error log for details."
        }

@frappe.whitelist()
def generate_timetable():
    """Main function to generate a complete timetable for the week, now using background processing."""
    try:
        config = load_configuration()
        
        # Queue the job
        frappe.enqueue(
            process_timetable_generation,
            queue='long',
            timeout=3600,  # 1 hour timeout
            job_name=f"Timetable Generation ",
            config=config
        )
        
        return {
            "success": True,
            "message": "Timetable generation started in background. You will be notified when complete."
        }
        
    except Exception as e:
        frappe.log_error(f"Failed to start timetable generation: {str(e)}")
        return {
            "success": False,
            "error": str(e),
            "message": "Failed to start timetable generation job."
        }

@frappe.whitelist()
def check_job_status(job_id):
    """Check the status of a timetable generation job."""
    try:
        job = frappe.get_doc("Timetable Generation Job", job_id)
        return {
            "success": True,
            "status": job.status,
            "progress": job.progress,
            "message": job.status_message
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "message": "Could not retrieve job status."
        }

@frappe.whitelist()
def debug_timetable_generation():
    """Run timetable generation with debugging output."""
    try:
        config = load_configuration()
        
        school_days = get_school_days(config["term_start_date"])
        period_slots = get_period_slots()
        
        # Get all streams
        all_streams = frappe.get_all("Student Group", fields=["name"])
        
        # New approach: prepare comprehensive scheduling data to see what should be scheduled
        scheduling_data = prepare_scheduling_data(
            config["teacher_preferences"],
            config["subject_rules"],
            config["all_streams"]
        )
        
        # Count subjects per stream
        subjects_per_stream = {}
        for item in scheduling_data:
            stream = item["stream"]
            if stream not in subjects_per_stream:
                subjects_per_stream[stream] = []
            
            if item["subject"] not in subjects_per_stream[stream]:
                subjects_per_stream[stream].append(item["subject"])
        
        # Teacher assignments
        teacher_subjects = {}
        for t in config["teacher_preferences"]:
            teacher = t["teacher"]
            if teacher not in teacher_subjects:
                teacher_subjects[teacher] = []
            
            if t["subject"] not in teacher_subjects[teacher]:
                teacher_subjects[teacher].append(t["subject"])
        
        debug_info = {
            "school_days": [day.strftime("%Y-%m-%d") for day in school_days],
            "period_slots": period_slots,
            "teacher_count": len(config["teacher_preferences"]),
            "subject_count": len(config["subject_rules"]),
            "classroom_count": len(config["classrooms"]),
            "stream_count": len(all_streams),
            "total_scheduling_items": len(scheduling_data),
            "subjects": [{
                "subject": s["subject"], 
                "frequency": s.get("frequency_per_week", 1),
                "allow_double": s.get("allow_double", False)
            } for s in config["subject_rules"]],
            "teachers": [{
                "teacher": t["teacher"],
                "subjects": teacher_subjects.get(t["teacher"], []),
                "max_weekly": t.get("max_period_per_week", 0),
                "max_daily": t.get("max_period_per_day", 0)
            } for t in config["teacher_preferences"]],
            "streams_summary": [{
                "stream": stream,
                "subject_count": len(subjects)
            } for stream, subjects in subjects_per_stream.items()]
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