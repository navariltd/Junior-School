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
	Generates a one-week timetable and creates `Class Schedule` entries in ERPNext.
	"""
	try:
		timetable_doc = frappe.get_doc("Timetable Generator")
		teacher_preferences = frappe.get_all("Teacher Preference", 
			fields=["teacher", "subject", "stream", "max_period_per_day", "max_period_per_week"]
		)
		subject_rules = frappe.get_all("Subject Rules", 
			fields=["subject", "frequency_per_week", "allow_double_session", "double_lessons_per_week"]
		)
		
		classrooms = frappe.get_all("Teaching Rooms", fields=["subject", "room"])

		weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
		start_date = datetime.today()  
		start_time = datetime.strptime("08:00", "%H:%M") 
		period_duration = 45  

		assigned_schedules = []

		for rule in subject_rules:
			subject = rule["subject"]
			frequency = rule["frequency_per_week"]
			allow_double = rule["allow_double_session"]
			double_sessions = rule["double_lessons_per_week"]

			available_teachers = [t for t in teacher_preferences if t["subject"] == subject]
			assigned_periods = 0

			while assigned_periods < frequency:
				day = random.choice(weekdays)
				scheduled_date = start_date + timedelta(days=weekdays.index(day))

				teacher = random.choice(available_teachers) if available_teachers else None
				if not teacher:
					continue

				room = next((c["room"] for c in classrooms if c["subject"] == subject), None)
				if not room:
					room = f"{teacher['stream']} Classroom"  

				from_time = start_time + timedelta(minutes=(assigned_periods * period_duration))
				to_time = from_time + timedelta(minutes=period_duration * (2 if allow_double and double_sessions > 0 else 1))

				if (teacher["teacher"], scheduled_date.strftime("%Y-%m-%d"), from_time.strftime("%H:%M")) in assigned_schedules:
					continue
				frappe.throw(f"Schedule conflict for {teacher['teacher']} on {scheduled_date.strftime('%Y-%m-%d')} at {from_time.strftime('%H:%M')}")
				class_schedule = frappe.get_doc({
					"doctype": "Class Schedule",
					"teacher": teacher["teacher"],
					"stream": teacher["stream"],
					"subject": subject,
					"from_time": from_time.strftime("%H:%M"),
					"to_time": to_time.strftime("%H:%M"),
					"scheduled_date": scheduled_date.strftime("%Y-%m-%d"),
					"room": room
				})
				class_schedule.insert(ignore_permissions=True)

				assigned_schedules.append((teacher["teacher"], scheduled_date.strftime("%Y-%m-%d"), from_time.strftime("%H:%M")))

				assigned_periods += 2 if allow_double and double_sessions > 0 else 1

		frappe.db.commit()
		return "Class Schedule successfully created!"

	except Exception as e:
		frappe.log_error(f"Timetable Generation Error: {str(e)}", "Timetable Generator Error")
		return f"Error generating timetable: {str(e)}"
