# Copyright (c) 2025, Navari and Contributors
# See license.txt

import frappe
from datetime import datetime
import unittest
from nl_school.junior_school_customization.doctype.timetable_generator.timetable_generator import (
    clear_existing_schedules,
    get_period_slots,
    get_school_days,
    load_configuration,
    prepare_scheduling_data,
    process_timetable_generation,
    validate_config,
)
from frappe.tests.utils import FrappeTestCase


class TestTimetableGenerator(FrappeTestCase):

    def create_events(self):

        # Create test academic term
        self.academic_term = frappe.get_doc(
            {
                "doctype": "Academic Term",
                "academic_year": "2025-2026",
                "term_name": "Test Term 2025",
                "term_start_date": "2025-01-01",
                "term_end_date": "2025-03-31",
            }
        ).insert()

        # Create test streams (student groups)
        self.streams = [
            frappe.get_doc(
                {
                    "doctype": "Student Group",
                    "group_name": "Science Stream Test",
                    "academic_term": self.academic_term.name,
                    "academic_year": "2025-2026",
                    "group_based_on": "Course",
                }
            ).insert(),
            frappe.get_doc(
                {
                    "doctype": "Student Group",
                    "group_name": "Arts Stream Test",
                    "academic_term": self.academic_term.name,
                    "academic_year": "2025-2026",
                    "group_based_on": "Course",
                }
            ).insert(),
        ]

        # Create test teachers
        self.teachers = [
            frappe.get_doc(
                {
                    "doctype": "Instructor",
                    "instructor_name": "Test Teacher 1",
                    "department": "Science",
                }
            ).insert(),
            frappe.get_doc(
                {
                    "doctype": "Instructor",
                    "instructor_name": "Test Teacher 2",
                    "department": "Science",
                }
            ).insert(),
        ]

        # Create test subjects
        self.subjects = [
            frappe.get_doc(
                {
                    "doctype": "Course",
                    "course_name": "Test Mathematics",
                    "course_code": "MATH101",
                }
            ).insert(),
            frappe.get_doc(
                {
                    "doctype": "Course",
                    "course_name": "Test Physics",
                    "course_code": "PHYS101",
                }
            ).insert(),
        ]

        # Create test rooms
        self.rooms = [
            frappe.get_doc(
                {
                    "doctype": "Room",
                    "room_name": "Test Room 101",
                    "room_number": "101",
                    "seating_capacity": 30,
                }
            ).insert(),
            frappe.get_doc(
                {
                    "doctype": "Room",
                    "room_name": "Test Lab 201",
                    "room_number": "201",
                    "seating_capacity": 25,
                }
            ).insert(),
        ]

        # Create timetable generator
        self.timetable = frappe.get_doc(
            {"doctype": "Timetable Generator", "academic_term": self.academic_term.name}
        )

        # Add time slots
        self.timetable.extend(
            "time_slots",
            [
                {"period": 1, "start_time": "08:00:00", "end_time": "09:00:00"},
                {"period": 2, "start_time": "09:00:00", "end_time": "10:00:00"},
                {"period": 3, "start_time": "10:00:00", "end_time": "11:00:00"},
            ],
        )
        self.timetable.insert()

        # Create teacher preferences
        self.teacher_prefs = [
            frappe.get_doc(
                {
                    "doctype": "Teacher Preference",
                    "teacher": self.teachers[0].name,
                    "subject": self.subjects[0].name,
                    "stream": self.streams[0].name,
                    "max_period_per_week": 20,
                    "max_period_per_day": 4,
                }
            ).insert(),
            frappe.get_doc(
                {
                    "doctype": "Teacher Preference",
                    "teacher": self.teachers[1].name,
                    "subject": self.subjects[1].name,
                    "stream": self.streams[0].name,
                    "max_period_per_week": 15,
                    "max_period_per_day": 3,
                }
            ).insert(),
        ]

        # Create subject rules
        self.subject_rules = [
            frappe.get_doc(
                {
                    "doctype": "Subject Rules",
                    "subject": self.subjects[0].name,
                    "frequency_per_week": 5,
                    "allow_double": 1,
                    "max_time": "12:00:00",
                }
            ).insert(),
            frappe.get_doc(
                {
                    "doctype": "Subject Rules",
                    "subject": self.subjects[1].name,
                    "frequency_per_week": 3,
                    "allow_double": 0,
                    "max_time": "15:00:00",
                }
            ).insert(),
        ]

        # Create teaching rooms
        self.teaching_rooms = [
            frappe.get_doc(
                {
                    "doctype": "Teaching Rooms",
                    "subject": self.subjects[0].name,
                    "room": self.rooms[0].name,
                }
            ).insert(),
            frappe.get_doc(
                {
                    "doctype": "Teaching Rooms",
                    "subject": self.subjects[1].name,
                    "room": self.rooms[1].name,
                }
            ).insert(),
        ]

    def setUp(self):
        self.create_events()

    def tearDown(self):
        # Delete all test data in reverse order of creation
        for doc in self.teaching_rooms:
            frappe.delete_doc(doc.doctype, doc.name)

        for doc in self.subject_rules:
            frappe.delete_doc(doc.doctype, doc.name)

        for doc in self.teacher_prefs:
            frappe.delete_doc(doc.doctype, doc.name)

        frappe.delete_doc(self.timetable.doctype, self.timetable.name)

        for doc in self.rooms:
            frappe.delete_doc(doc.doctype, doc.name)

        for doc in self.subjects:
            frappe.delete_doc(doc.doctype, doc.name)

        for doc in self.teachers:
            frappe.delete_doc(doc.doctype, doc.name)

        for doc in self.streams:
            frappe.delete_doc(doc.doctype, doc.name)

        frappe.delete_doc(self.academic_term.doctype, self.academic_term.name)

    def test_load_configuration(self):
        """Test loading timetable configuration with actual documents"""
        config = load_configuration()

        self.assertEqual(config["academic_term"], self.academic_term.name)
        self.assertEqual(len(config["teacher_preferences"]), 2)
        self.assertEqual(len(config["subject_rules"]), 2)
        self.assertEqual(len(config["classrooms"]), 2)

    def test_validate_config_invalid_dates(self):
        """Test validation of configuration with invalid dates"""
        invalid_config = {
            "term_start_date": datetime(2025, 4, 1),
            "term_end_date": datetime(2025, 3, 31),
        }

        with self.assertRaises(frappe.ValidationError):
            validate_config(invalid_config)

    def test_get_school_days(self):
        """Test school days generation with actual dates"""
        # Test with a Wednesday start date
        start_date = datetime(2025, 5, 21)  # Wednesday
        days = get_school_days(start_date)

        self.assertEqual(
            days[0], datetime(2025, 5, 26)
        )  # Should start from next Monday
        self.assertEqual(days[4], datetime(2025, 5, 30))  # Should end on Friday
        self.assertEqual(len(days), 5)

        # Test with a Monday start date
        start_date = datetime(2025, 5, 26)  # Monday
        days = get_school_days(start_date)

        self.assertEqual(days[0], datetime(2025, 5, 26))  # Should start same Monday
        self.assertEqual(len(days), 5)

    def test_get_period_slots(self):
        """Test retrieving period slots from actual timetable document"""
        slots = get_period_slots(self.timetable)

        self.assertEqual(len(slots), 3)
        self.assertEqual(slots[0]["period"], 1)
        self.assertEqual(slots[0]["from_time"], "08:00")
        self.assertEqual(slots[0]["to_time"], "09:00")

    def test_prepare_scheduling_data(self):
        """Test scheduling data preparation with actual documents"""
        config = load_configuration()
        result = prepare_scheduling_data(
            config["teacher_preferences"],
            config["subject_rules"],
            config["all_streams"],
        )

        # Should have 16 total slots (5 math + 3 physics for Science Stream)
        self.assertEqual(len(result), 16)

        # Check subject frequencies
        math_entries = [
            item for item in result if item["subject"] == self.subjects[0].name
        ]
        physics_entries = [
            item for item in result if item["subject"] == self.subjects[1].name
        ]

        self.assertEqual(len(math_entries), 10)  # 5 per stream
        self.assertEqual(len(physics_entries), 6)  # 3 per stream

        # Check teacher assignments
        self.assertEqual(
            math_entries[0]["teachers"][0]["teacher"], self.teachers[0].name
        )
        self.assertEqual(
            physics_entries[0]["teachers"][0]["teacher"], self.teachers[1].name
        )

    def test_clear_existing_schedules(self):
        """Test clearing existing schedules with actual database operations"""
        # First create a test schedule
        test_schedule = frappe.get_doc(
            {
                "doctype": "Course Schedule",
                "schedule_date": "2025-01-06",
                "instructor": self.teachers[0].name,
                "room": self.rooms[0].name,
                "student_group": self.streams[0].name,
                "course": self.subjects[0].name,
                "from_time": "08:00:00",
                "to_time": "09:00:00",
            }
        ).insert()

        # Clear schedules
        result = clear_existing_schedules(self.academic_term.name)
        self.assertTrue(result)

        # Verify schedule was cleared
        remaining_schedules = frappe.get_all(
            "Course Schedule",
            filters={
                "schedule_date": [
                    "between",
                    (
                        self.academic_term.term_start_date,
                        self.academic_term.term_end_date,
                    ),
                ]
            },
        )
        self.assertEqual(len(remaining_schedules), 0)

    def test_process_timetable_generation(self):
        """Test the complete timetable generation process with actual documents"""
        result = process_timetable_generation()

        self.assertTrue(result["success"])
        self.assertTrue("stats" in result)
        self.assertTrue(result["stats"]["total_items"] > 0)
        self.assertTrue(result["stats"]["scheduled"] > 0)

        # Verify schedules were created
        schedules = frappe.get_all(
            "Course Schedule",
            filters={
                "schedule_date": [
                    "between",
                    (
                        self.academic_term.term_start_date,
                        self.academic_term.term_end_date,
                    ),
                ]
            },
        )
        self.assertTrue(len(schedules) > 0)
