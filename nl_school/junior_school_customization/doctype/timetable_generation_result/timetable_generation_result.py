# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from datetime import datetime, timedelta


class TimetableGenerationResult(Document):
    pass


@frappe.whitelist()
def get_timetable_view(result_name):
    """
    Return the full weekly schedule grid for the academic term linked to result_name.
    """
    result = frappe.get_doc("Timetable Generation Result", result_name)
    if not result.academic_term:
        frappe.throw("This result has no Academic Term linked.")

    term = frappe.get_doc("Academic Term", result.academic_term)
    start = _to_date(term.term_start_date)

    # Advance to the first Monday on or after term start
    while start.weekday() != 0:
        start += timedelta(days=1)

    week_dates = [start + timedelta(days=i) for i in range(5)]  # Mon – Fri

    raw = frappe.get_all(
        "Course Schedule",
        filters={
            "schedule_date": [
                "between",
                [
                    week_dates[0].strftime("%Y-%m-%d"),
                    week_dates[4].strftime("%Y-%m-%d"),
                ],
            ],
        },
        fields=[
            "name",
            "course",
            "instructor",
            "student_group",
            "room",
            "from_time",
            "to_time",
            "schedule_date",
        ],
        order_by="from_time ASC, schedule_date ASC",
    )

    # Build sorted unique time slots
    slot_set = {}
    for s in raw:
        key = (_fmt_time(s.from_time), _fmt_time(s.to_time))
        slot_set[key] = True
    time_slots = sorted(slot_set.keys())

    # Build the grid: slot_key → day_name → [entry, ...]
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    grid = {f"{slot[0]}-{slot[1]}": {day: [] for day in days} for slot in time_slots}

    for s in raw:
        date_val = (
            _to_date(s.schedule_date)
            if not isinstance(s.schedule_date, str)
            else datetime.strptime(s.schedule_date, "%Y-%m-%d").date()
        )
        day_idx = date_val.weekday()
        if day_idx >= 5:
            continue
        day_name = days[day_idx]
        slot_key = f"{_fmt_time(s.from_time)}-{_fmt_time(s.to_time)}"
        if slot_key in grid:
            grid[slot_key][day_name].append(
                {
                    "name": s.name,
                    "course": s.course,
                    "instructor": s.instructor,
                    "student_group": s.student_group,
                    "room": s.room,
                }
            )

    return {
        "time_slots": [{"from": s[0], "to": s[1]} for s in time_slots],
        "days": days,
        "grid": grid,
        # Metadata for filter dropdowns — sorted, de-duplicated
        "student_groups": sorted({s.student_group for s in raw if s.student_group}),
        "instructors": sorted({s.instructor for s in raw if s.instructor}),
        "subjects": sorted({s.course for s in raw if s.course}),
    }


def _fmt_time(val):
    """Convert a Frappe time value (timedelta, str) to HH:MM display string."""
    if isinstance(val, timedelta):
        total = int(val.total_seconds())
        h, rem = divmod(total, 3600)
        m, _ = divmod(rem, 60)
        return f"{h:02d}:{m:02d}"
    if isinstance(val, str):
        return val[:5]
    return str(val)[:5]


def _to_date(val):
    """Normalize a date field value to a datetime.date object."""
    if isinstance(val, datetime):
        return val.date()
    return val
