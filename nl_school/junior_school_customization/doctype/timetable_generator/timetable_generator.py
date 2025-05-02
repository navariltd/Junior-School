from frappe.model.document import Document
import frappe
import random
from datetime import datetime, timedelta, time
import json


class TimetableGenerator(Document):
    pass


def check_conflicts(day, from_time, to_time, teacher, room, student_group):
    """Check for scheduling conflicts with existing course schedules."""
    # return True
    try:
        conflicts = frappe.db.sql(
            """
                SELECT name FROM `tabCourse Schedule`
                WHERE
                    (instructor = %s AND room = %s AND student_group = %s)
                    AND schedule_date = %s
                    AND (
                        (from_time < %s AND to_time > %s) OR  -- complete overlap
                        (from_time >= %s AND from_time < %s) OR  -- start during current period
                        (to_time > %s AND to_time <= %s) OR  -- end during current period
                        (from_time <= %s AND to_time >= %s)  -- current period is contained within existing
                    )
            """,
            (
                teacher,
                room,
                student_group,
                day.strftime("%Y-%m-%d"),
                from_time.strftime("%H:%M:%S"),
                from_time.strftime("%H:%M:%S"),
                from_time.strftime("%H:%M:%S"),
                to_time.strftime("%H:%M:%S"),
                from_time.strftime("%H:%M:%S"),
                to_time.strftime("%H:%M:%S"),
                from_time.strftime("%H:%M:%S"),
                to_time.strftime("%H:%M:%S"),
            ),
            as_dict=1,
        )

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
    new_from = datetime.strptime(str(schedule_entry["from_time"]), "%H:%M:%S")
    new_to = datetime.strptime(str(schedule_entry["to_time"]), "%H:%M:%S")

    # Count occurrences of this subject on this day for this specific student group
    subject_count_today = sum(
        1
        for entry in temp_schedule
        if entry["schedule_date"] == new_day
        and entry["course"] == new_subject
        and entry["student_group"] == new_group
    )
    # Check teacher daily workload
    teacher_daily_load = sum(
        1
        for entry in temp_schedule
        if entry["schedule_date"] == new_day and entry["instructor"] == new_teacher
    )

    # Get teacher preferences for max periods
    teacher_prefs = frappe.get_all(
        "Teacher Preference",
        filters={"teacher": new_teacher},
        fields=["max_period_per_day", "max_period_per_week"],
    )

    max_per_day = teacher_prefs[0].get("max_period_per_day") if teacher_prefs else 7
    if max_per_day == 0:  # If not specified, use default
        max_per_day = 7

    if teacher_daily_load >= max_per_day:
        return False

    # Check weekly teacher load
    teacher_weekly_load = sum(
        1 for entry in temp_schedule if entry["instructor"] == new_teacher
    )

    max_per_week = teacher_prefs[0].get("max_period_per_week") if teacher_prefs else 35
    if max_per_week == 0:  # If not specified, use default
        max_per_week = 35

    if teacher_weekly_load >= max_per_week:
        return False

    # Default to max 1 per day, or 2 if allow_double is True
    subject_rules = frappe.get_all(
        "Subject Rules", filters={"subject": new_subject}, fields=["allow_double"]
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
                entry_from = datetime.strptime(str(entry["from_time"]), "%H:%M:%S")
                entry_to = datetime.strptime(str(entry["to_time"]), "%H:%M:%S")

                # Check for time overlap
                if (entry_from < new_to and entry_to > new_from) or (
                    new_from < entry_to and new_to > entry_from
                ):
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
    # frappe.throw(str(school_days))
    return school_days


def get_period_slots(timetable_doc):
    """Generate time slots from the Time Slots child table in Timetable Generator."""
    slots = []

    # Get time slots from the child table
    time_slots = frappe.get_all(
        "Time Slots",
        filters={"parent": timetable_doc.name},
        fields=["period", "start_time", "end_time"],
        order_by="period ASC",
    )
    if not time_slots:
        frappe.throw(
            "No time slots defined in the Timetable Generator. Please add time slots."
        )
    for slot in time_slots:
        slots.append(
            {
                "period": slot.period,
                "from_time": slot.start_time.strftime("%H:%M")
                if hasattr(slot.start_time, "strftime")
                else slot.start_time,
                "to_time": slot.end_time.strftime("%H:%M")
                if hasattr(slot.end_time, "strftime")
                else slot.end_time,
            }
        )
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

        teacher_preferences = frappe.get_all(
            "Teacher Preference",
            fields=[
                "teacher",
                "subject",
                "stream",
                "max_period_per_week",
                "max_period_per_day",
            ],
        )
        subject_rules = frappe.get_all(
            "Subject Rules",
            fields=["subject", "frequency_per_week", "allow_double", "max_time"],
        )
        classrooms = frappe.get_all("Teaching Rooms", fields=["subject", "room"])
        all_streams = frappe.get_all("Student Group", fields=["name"])

        # If no data is found, throw an error
        if not teacher_preferences:
            frappe.throw(
                "No teacher preferences found. Please configure teacher preferences first."
            )
        if not subject_rules:
            frappe.throw(
                "No subject rules found. Please configure subject frequency first."
            )

        return {
            "term_start_date": term_start_date,
            "term_end_date": term_end_date,
            "teacher_preferences": teacher_preferences,
            "subject_rules": subject_rules,
            "classrooms": classrooms,
            "academic_term": timetable_doc.academic_term,
            "all_streams": all_streams,
            "timetable_doc": timetable_doc,
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
            capable_teachers = [
                t
                for t in teacher_preferences
                if t["subject"] == subject_name and t["stream"] == stream_name
            ]

            # If no specific teacher is assigned, find any teacher for this subject
            if not capable_teachers:
                capable_teachers = [
                    t for t in teacher_preferences if t["subject"] == subject_name
                ]
            # frappe.throw(str(capable_teachers))
            if not capable_teachers:
                continue

            for i in range(frequency):
                scheduling_data.append(
                    {
                        "subject": subject_name,
                        "stream": stream_name,
                        "teachers": capable_teachers,
                        "priority": subject.get("frequency_per_week", 1),
                        "allow_double": subject.get("allow_double", False),
                        "instance": i + 1,
                        "scheduled": False,
                    }
                )

    random.shuffle(scheduling_data)
    scheduling_data.sort(key=lambda x: -x["priority"])
    return scheduling_data


def create_full_schedule(
    scheduling_data, teacher_prefs, classrooms, school_days, period_slots
):
    temp_schedule = []
    scheduled_items = []

    # Create a copy of scheduling_data to avoid modifying the original
    remaining_items = scheduling_data.copy()

    # Pre-compute available rooms by subject
    room_by_subject = {}
    for classroom in classrooms:
        room_by_subject.setdefault(classroom["subject"], []).append(classroom["room"])
    default_room = "HTL-ROOM-2025-00016"

    # Initialize teacher workload tracking
    teacher_workload = {t["teacher"]: {"total": 0, "daily": {}} for t in teacher_prefs}
    for teacher in teacher_workload:
        for day in school_days:
            day_str = day.strftime("%Y-%m-%d")
            teacher_workload[teacher]["daily"][day_str] = 0

    MAX_LESSONS_PER_DAY = 7
    MAX_LESSONS_PER_WEEK = 35

    slot_lookup = {}

    # Track subject occurrences per stream per day
    subject_stream_daily = {}  # Format: {(day_str, subject, stream): count}

    remaining_items.sort(key=lambda x: -x.get("priority", 1))

    # First pass: Schedule with all constraints
    for day_index, day in enumerate(school_days):
        day_str = day.strftime("%Y-%m-%d")

        # Initialize daily tracking for this day
        for item in remaining_items:
            subject = item["subject"]
            stream = item["stream"]
            subject_stream_daily.setdefault((day_str, subject, stream), 0)

        for period_index, period in enumerate(period_slots):
            current_items = remaining_items.copy()

            for item in current_items:
                subject = item["subject"]
                stream = item["stream"]

                # Check if stream is already scheduled in this period
                if (day_str, period_index, "stream", stream) in slot_lookup:
                    continue

                # Check if this subject-stream has already been scheduled today
                # Prevent the same subject in same stream from appearing more than once per day
                if subject_stream_daily.get((day_str, subject, stream), 0) >= 1:
                    continue

                # Try all teachers for this subject
                for teacher_data in item["teachers"]:
                    teacher = teacher_data["teacher"]
                    teacher_subject = teacher_data["subject"]
                    teacher_stream = teacher_data["stream"]

                    # Verify teacher-subject-stream match
                    if teacher_subject != subject or teacher_stream != stream:
                        continue

                    # Check if teacher is already scheduled in this period
                    if (day_str, period_index, "teacher", teacher) in slot_lookup:
                        continue

                    # Check teacher workload constraints
                    if (
                        teacher_workload[teacher]["daily"][day_str]
                        >= MAX_LESSONS_PER_DAY
                    ):
                        continue

                    if teacher_workload[teacher]["total"] >= MAX_LESSONS_PER_WEEK:
                        continue

                    # Get available room
                    available_rooms = room_by_subject.get(subject, [default_room])

                    # Try each room
                    scheduled = False
                    for room in available_rooms:
                        # Check if room is already scheduled in this period
                        if (day_str, period_index, "room", room) in slot_lookup:
                            continue

                        # Create schedule entry
                        schedule_entry = {
                            "doctype": "Course Schedule",
                            "instructor": teacher,
                            "student_group": stream,
                            "course": subject,
                            "from_time": period["from_time"],
                            "to_time": period["to_time"],
                            "schedule_date": day_str,
                            "room": room,
                        }

                        temp_schedule.append(schedule_entry)
                        scheduled_items.append(item)

                        # Mark resources as used for this period
                        slot_lookup[(day_str, period_index, "stream", stream)] = True
                        slot_lookup[(day_str, period_index, "teacher", teacher)] = True
                        slot_lookup[(day_str, period_index, "room", room)] = True

                        # Increment the subject-stream count for this day
                        subject_stream_daily[(day_str, subject, stream)] += 1

                        # Update teacher workload
                        teacher_workload[teacher]["total"] += 1
                        teacher_workload[teacher]["daily"][day_str] += 1

                        # Remove item from remaining items
                        if item in remaining_items:
                            remaining_items.remove(item)

                        scheduled = True
                        break

                    if scheduled:
                        break

    # Second pass: Try with relaxed room constraints but still enforce teacher workload limits
    # and subject frequency limits
    if remaining_items:
        for day_index, day in enumerate(school_days):
            day_str = day.strftime("%Y-%m-%d")

            for period_index, period in enumerate(period_slots):
                # Process a copy to avoid modification during iteration
                current_items = remaining_items.copy()

                for item in current_items:
                    subject = item["subject"]
                    stream = item["stream"]

                    # Check if stream is already scheduled in this period
                    if (day_str, period_index, "stream", stream) in slot_lookup:
                        continue

                    # Check if this subject-stream has already been scheduled today
                    if subject_stream_daily.get((day_str, subject, stream), 0) >= 1:
                        continue

                    # Try all teachers with teacher workload constraints
                    for teacher_data in item["teachers"]:
                        teacher = teacher_data["teacher"]

                        # Only check if teacher is already in this specific period
                        if (day_str, period_index, "teacher", teacher) in slot_lookup:
                            continue

                        # Check teacher workload constraints
                        if (
                            teacher_workload[teacher]["daily"][day_str]
                            >= MAX_LESSONS_PER_DAY
                        ):
                            continue

                        if teacher_workload[teacher]["total"] >= MAX_LESSONS_PER_WEEK:
                            continue

                        # Get any available room, not necessarily subject-specific
                        all_rooms = []
                        for rooms in room_by_subject.values():
                            all_rooms.extend(rooms)
                        if not all_rooms:
                            all_rooms = [default_room]

                        # Try each room with relaxed subject constraints
                        scheduled = False
                        for room in all_rooms:
                            # Check if room is already scheduled in this period
                            if (day_str, period_index, "room", room) in slot_lookup:
                                continue

                            schedule_entry = {
                                "doctype": "Course Schedule",
                                "instructor": teacher,
                                "student_group": stream,
                                "course": subject,
                                "from_time": period["from_time"],
                                "to_time": period["to_time"],
                                "schedule_date": day_str,
                                "room": room,
                            }

                            temp_schedule.append(schedule_entry)
                            scheduled_items.append(item)

                            # Mark resources as used
                            slot_lookup[(day_str, period_index, "stream", stream)] = (
                                True
                            )
                            slot_lookup[(day_str, period_index, "teacher", teacher)] = (
                                True
                            )
                            slot_lookup[(day_str, period_index, "room", room)] = True

                            # Increment the subject-stream count for this day
                            subject_stream_daily[(day_str, subject, stream)] += 1

                            # Update teacher workload
                            teacher_workload[teacher]["total"] += 1
                            teacher_workload[teacher]["daily"][day_str] += 1

                            # Remove item from remaining items
                            if item in remaining_items:
                                remaining_items.remove(item)

                            scheduled = True
                            break

                        if scheduled:
                            break

    # Third pass: Handle remaining items with more relaxed constraints
    # but still respect daily teacher limits and subject frequency per day
    if remaining_items:
        # Find days with fewer scheduled items to better distribute workload
        days_with_capacity = {}
        for day in school_days:
            day_str = day.strftime("%Y-%m-%d")
            # Count total items scheduled this day across all streams
            scheduled_count = sum(
                1
                for key, value in subject_stream_daily.items()
                if key[0] == day_str and value > 0
            )
            days_with_capacity[day_str] = scheduled_count

        # Sort days by scheduled count (ascending)
        sorted_days = [
            day for day, _ in sorted(days_with_capacity.items(), key=lambda x: x[1])
        ]

        for day_str in sorted_days:
            for period_index, period in enumerate(period_slots):
                # Process a copy to avoid modification during iteration
                current_items = remaining_items.copy()

                for item in current_items:
                    subject = item["subject"]
                    stream = item["stream"]

                    # Check if stream is already scheduled in this period
                    if (day_str, period_index, "stream", stream) in slot_lookup:
                        continue

                    # Still respect the once-per-day limit for subject-stream combinations
                    if subject_stream_daily.get((day_str, subject, stream), 0) >= 1:
                        continue

                    # Try all teachers with only daily workload constraints
                    for teacher_data in item["teachers"]:
                        teacher = teacher_data["teacher"]

                        # Only check if teacher is already in this specific period
                        if (day_str, period_index, "teacher", teacher) in slot_lookup:
                            continue

                        # Check only daily teacher workload constraint
                        if (
                            teacher_workload[teacher]["daily"][day_str]
                            >= MAX_LESSONS_PER_DAY
                        ):
                            continue

                        # Use any available room
                        room = default_room
                        for r in [
                            r for rooms in room_by_subject.values() for r in rooms
                        ]:
                            if (day_str, period_index, "room", r) not in slot_lookup:
                                room = r
                                break

                        # Even if room is occupied, schedule anyway with default room
                        # (assuming multiple classes can share a room if necessary)
                        schedule_entry = {
                            "doctype": "Course Schedule",
                            "instructor": teacher,
                            "student_group": stream,
                            "course": subject,
                            "from_time": period["from_time"],
                            "to_time": period["to_time"],
                            "schedule_date": day_str,
                            "room": room,
                        }

                        temp_schedule.append(schedule_entry)
                        scheduled_items.append(item)

                        # Mark resources as used
                        slot_lookup[(day_str, period_index, "stream", stream)] = True
                        slot_lookup[(day_str, period_index, "teacher", teacher)] = True

                        # Increment the subject-stream count for this day
                        subject_stream_daily[(day_str, subject, stream)] += 1

                        # Update teacher workload
                        teacher_workload[teacher]["total"] += 1
                        teacher_workload[teacher]["daily"][day_str] += 1

                        # Remove item from remaining items
                        if item in remaining_items:
                            remaining_items.remove(item)
                        break

    # Final tally of unscheduled items
    unscheduled_items = remaining_items

    # Generate workload report
    workload_report = {}
    for teacher, data in teacher_workload.items():
        workload_report[teacher] = {
            "total_lessons": data["total"],
            "daily_lessons": data["daily"],
            "within_limits": data["total"] <= MAX_LESSONS_PER_WEEK
            and all(count <= MAX_LESSONS_PER_DAY for count in data["daily"].values()),
        }

    # Generate subject-stream distribution report
    subject_distribution = {}
    for (day_str, subject, stream), count in subject_stream_daily.items():
        if count > 0:
            subject_distribution.setdefault((subject, stream), {}).setdefault(
                day_str, count
            )

    return temp_schedule, scheduled_items, unscheduled_items


def convert_timedelta_to_time(timedelta_obj):
    """
    Converts a timedelta object to a datetime time object formatted as HH:MM:SS.
    """
    hours, remainder = divmod(timedelta_obj.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    return time(hour=hours, minute=minutes, second=seconds)


def retry_scheduling(
    unscheduled_items,
    teacher_prefs,
    classrooms,
    school_days,
    period_slots,
    existing_schedule,
):
    """Try again to schedule unscheduled items with relaxed constraints."""
    temp_schedule = existing_schedule.copy()
    newly_scheduled = []
    still_unscheduled = []
    teacher_workload = {}
    for entry in existing_schedule:
        teacher = entry["instructor"]
        day = entry["schedule_date"]

        if teacher not in teacher_workload:
            teacher_workload[teacher] = {"total": 0, "daily": {}}

        teacher_workload[teacher]["total"] = (
            teacher_workload[teacher].get("total", 0) + 1
        )
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

                    room = "HTL-ROOM-2025-00016"
                    for classroom in classrooms:
                        if classroom["subject"] == item["subject"]:
                            room = classroom["room"]
                            break

                    schedule_entry = {
                        "doctype": "Course Schedule",
                        "instructor": teacher,
                        "student_group": item["stream"],
                        "course": item["subject"],
                        "from_time": period["from_time"],
                        "to_time": period["to_time"],
                        "schedule_date": day_str,
                        "room": room,
                    }

                    from_time = datetime.strptime(str(period["from_time"]), "%H:%M:%S")
                    to_time = datetime.strptime(str(period["to_time"]), "%H:%M:%S")

                    if check_conflicts(
                        day, from_time, to_time, teacher, room, item["stream"]
                    ):
                        if check_temp_conflicts(schedule_entry, temp_schedule):
                            temp_schedule.append(schedule_entry)
                            item["scheduled"] = True
                            newly_scheduled.append(item)

                            teacher_workload[teacher]["total"] += 1
                            if day_str not in teacher_workload[teacher]["daily"]:
                                teacher_workload[teacher]["daily"][day_str] = 0
                            teacher_workload[teacher]["daily"][day_str] += 1

                            item_scheduled = True
                            break

        if not item["scheduled"]:
            still_unscheduled.append(item)

    return newly_scheduled, still_unscheduled, temp_schedule


def save_schedule(schedule, batch_size=50):
    """Save schedule entries to the database in batches."""
    successful = 0
    failed = 0

    for i in range(0, len(schedule), batch_size):
        batch = schedule[i : i + batch_size]
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

        # if batch_success > 0:
        #     frappe.db.commit()

    return successful, failed


def clear_existing_schedules(academic_term):
    """Clear existing schedules for the academic term."""
    try:
        term_doc = frappe.get_doc("Academic Term", academic_term)
        start_date = term_doc.term_start_date
        end_date = term_doc.term_end_date

        frappe.db.sql(
            """
        DELETE FROM `tabCourse Schedule`
        WHERE schedule_date BETWEEN %s AND %s
    """,
            (start_date, end_date),
        )

        return True
    except Exception as e:
        frappe.log_error(f"Failed to clear existing schedules: {str(e)}")
        return False


def process_timetable_generation(config=None):
    """Main entry point for timetable generation"""
    if not config:
        config = load_configuration()

    validate_config(config)
    clear_existing_schedules(config["academic_term"])

    schedule_data = generate_initial_schedule(config)

    if schedule_data["unscheduled_items"]:
        schedule_data = retry_unscheduled_items(config, schedule_data)

    return save_and_report_results(config, schedule_data)


def generate_initial_schedule(config):
    """Generate the initial timetable schedule"""
    school_days = get_school_days(config["term_start_date"])
    period_slots = get_period_slots(config["timetable_doc"])
    scheduling_data = prepare_scheduling_data(
        config["teacher_preferences"], config["subject_rules"], config["all_streams"]
    )

    final_schedule, scheduled_items, unscheduled_items = create_full_schedule(
        scheduling_data,
        config["teacher_preferences"],
        config["classrooms"],
        school_days,
        period_slots,
    )

    return {
        "total_items": len(scheduling_data),
        "final_schedule": final_schedule,
        "scheduled_items": scheduled_items,
        "unscheduled_items": unscheduled_items,
    }


def retry_unscheduled_items(config, schedule_data):
    """Attempt to schedule remaining items with extended days"""
    extended_days = get_school_days(config["term_start_date"] + timedelta(days=7), 5)

    newly_scheduled, still_unscheduled, updated_schedule = retry_scheduling(
        schedule_data["unscheduled_items"],
        config["teacher_preferences"],
        config["classrooms"],
        extended_days,
        get_period_slots(config["timetable_doc"]),
        schedule_data["final_schedule"],
    )

    return {
        **schedule_data,
        "final_schedule": updated_schedule,
        "scheduled_items": schedule_data["scheduled_items"] + newly_scheduled,
        "unscheduled_items": still_unscheduled,
    }


def save_and_report_results(config, schedule_data):
    """Save the generated schedule and create result records"""
    successful, failed = save_schedule(schedule_data["final_schedule"])

    total_scheduled = len(schedule_data["scheduled_items"])
    total_unscheduled = len(schedule_data["unscheduled_items"])

    create_result_document(
        config["academic_term"],
        schedule_data["total_items"],
        total_scheduled,
        total_unscheduled,
        successful,
        failed,
        schedule_data["unscheduled_items"],
    )

    return {
        "success": total_unscheduled == 0,
        "message": f"Generated {successful} schedule entries in the background.",
        "stats": {
            "total_items": schedule_data["total_items"],
            "scheduled": total_scheduled,
            "unscheduled": total_unscheduled,
            "save_success": successful,
            "save_failed": failed,
        },
    }


# Creation of Timetable Generation Result Document which keeps track of the results
def create_result_document(
    academic_term,
    total_items,
    scheduled,
    unscheduled,
    successful,
    failed,
    unscheduled_items=None,
):
    """Create and save Timetable Generation Result document"""
    result_doc = frappe.get_doc(
        {
            "doctype": "Timetable Generation Result",
            "academic_term": academic_term,
            "generation_date": datetime.now(),
            "total_subjects": total_items,
            "scheduled_count": scheduled,
            "unscheduled_count": unscheduled,
            "saved_count": successful,
            "failed_count": failed,
            "status": "Complete" if unscheduled == 0 else "Partial",
        }
    )

    if unscheduled_items:
        result_doc.unscheduled_subjects = json.dumps(
            [
                {"subject": item["subject"], "stream": item["stream"]}
                for item in unscheduled_items
            ]
        )

    result_doc.insert(ignore_permissions=True)
    return result_doc


def validate_config(config):
    """Validate configuration parameters"""
    if config["term_start_date"] >= config["term_end_date"]:
        frappe.throw("Invalid Academic Term dates")


@frappe.whitelist()
def generate_timetable():
    """Main function to generate a complete timetable for the week, now using background processing."""
    config = load_configuration()
    process_timetable_generation(config)

    # Uncomment when going to production
    # try:
    #     config = load_configuration()

    #     # Queue the job
    #     frappe.enqueue(
    #         process_timetable_generation,
    #         queue='default',
    #         timeout=120,  # 1 hour timeout
    #         job_name=f"Timetable Generation ",
    #         config=config
    #     )
    #     time.sleep(30)  # Give some time for the job to start
    #     return {
    #         "success": True,
    #         "message": "Timetable generation started in background. You will be notified when complete."
    #     }

    # except Exception as e:
    #     frappe.log_error(f"Failed to start timetable generation: {str(e)}")
    #     return {
    #         "success": False,
    #         "error": str(e),
    #         "message": "Failed to start timetable generation job."
    #     }


@frappe.whitelist()
def check_job_status(job_id):
    """Check the status of a timetable generation job."""
    try:
        job = frappe.get_doc("Timetable Generation Job", job_id)
        return {
            "success": True,
            "status": job.status,
            "progress": job.progress,
            "message": job.status_message,
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "message": "Could not retrieve job status.",
        }


@frappe.whitelist()
def debug_timetable_generation():
    """Run timetable generation with debugging output."""
    try:
        config = load_configuration()

        school_days = get_school_days(config["term_start_date"])
        period_slots = get_period_slots(config["timetable_doc"])

        all_streams = frappe.get_all("Student Group", fields=["name"])

        scheduling_data = prepare_scheduling_data(
            config["teacher_preferences"],
            config["subject_rules"],
            config["all_streams"],
        )

        subjects_per_stream = {}
        for item in scheduling_data:
            stream = item["stream"]
            if stream not in subjects_per_stream:
                subjects_per_stream[stream] = []

            if item["subject"] not in subjects_per_stream[stream]:
                subjects_per_stream[stream].append(item["subject"])

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
            "subjects": [
                {
                    "subject": s["subject"],
                    "frequency": s.get("frequency_per_week", 1),
                    "allow_double": s.get("allow_double", False),
                }
                for s in config["subject_rules"]
            ],
            "teachers": [
                {
                    "teacher": t["teacher"],
                    "subjects": teacher_subjects.get(t["teacher"], []),
                    "max_weekly": t.get("max_period_per_week", 0),
                    "max_daily": t.get("max_period_per_day", 0),
                }
                for t in config["teacher_preferences"]
            ],
            "streams_summary": [
                {"stream": stream, "subject_count": len(subjects)}
                for stream, subjects in subjects_per_stream.items()
            ],
        }

        return {"success": True, "debug_info": debug_info}

    except Exception as e:
        return {"success": False, "error": str(e)}
