# Copyright (c) 2025, Navari and Contributors
# See license.txt

# import frappe
from datetime import datetime
import unittest
from unittest.mock import MagicMock, patch
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

MODULE_PATH = "nl_school.junior_school_customization.doctype.timetable_generator.timetable_generator"


class TestTimetableGenerator(FrappeTestCase):
    pass


class TestTimetableGenerator(unittest.TestCase):
    def setUp(self):

        self.mock_term_start_date = datetime(2025, 1, 1)
        self.mock_term_end_date = datetime(2025, 3, 31)

        # Mock timetable configuration
        self.mock_config = {
            "term_start_date": self.mock_term_start_date,
            "term_end_date": self.mock_term_end_date,
            "teacher_preferences": [
                {
                    "teacher": "Teacher 1",
                    "subject": "Mathematics",
                    "stream": "Science Stream",
                    "max_period_per_week": 20,
                    "max_period_per_day": 4,
                },
                {
                    "teacher": "Teacher 2",
                    "subject": "Physics",
                    "stream": "Science Stream",
                    "max_period_per_week": 15,
                    "max_period_per_day": 3,
                },
            ],
            "subject_rules": [
                {
                    "subject": "Mathematics",
                    "frequency_per_week": 5,
                    "allow_double": True,
                    "max_time": "12:00",
                },
                {
                    "subject": "Physics",
                    "frequency_per_week": 3,
                    "allow_double": False,
                    "max_time": "15:00",
                },
            ],
            "classrooms": [
                {"subject": "Mathematics", "room": "Room 101"},
                {"subject": "Physics", "room": "Lab 201"},
            ],
            "academic_term": "Term 2025",
            "all_streams": [{"name": "Science Stream"}, {"name": "Arts Stream"}],
            "timetable_doc": MagicMock(),
        }

        # Mock period slots
        self.mock_period_slots = [
            {"period": 1, "from_time": "08:00", "to_time": "09:00"},
            {"period": 2, "from_time": "09:00", "to_time": "10:00"},
            {"period": 3, "from_time": "10:00", "to_time": "11:00"},
        ]

        # Mock school days
        self.mock_school_days = [
            datetime(2025, 1, 6),  # Monday
            datetime(2025, 1, 7),  # Tuesday
            datetime(2025, 1, 8),  # Wednesday
            datetime(2025, 1, 9),  # Thursday
            datetime(2025, 1, 10),  # Friday
        ]

    def tearDown(self):
        pass

    @patch("frappe.get_doc")
    @patch("frappe.get_all")
    def test_load_configuration(self, mock_get_all, mock_get_doc):

        mock_timetable_doc = MagicMock()
        mock_timetable_doc.academic_term = "Term 2025"

        mock_academic_term = MagicMock()
        mock_academic_term.term_start_date = self.mock_term_start_date
        mock_academic_term.term_end_date = self.mock_term_end_date

        mock_get_doc.side_effect = [mock_timetable_doc, mock_academic_term]

        mock_get_all.side_effect = [
            self.mock_config["teacher_preferences"],
            self.mock_config["subject_rules"],
            self.mock_config["classrooms"],
            self.mock_config["all_streams"],
        ]

        config_result = load_configuration()

        self.assertEqual(config_result["term_start_date"], self.mock_term_start_date)
        self.assertEqual(config_result["term_end_date"], self.mock_term_end_date)
        self.assertEqual(config_result["academic_term"], "Term 2025")
        self.assertEqual(len(config_result["teacher_preferences"]), 2)
        self.assertEqual(len(config_result["subject_rules"]), 2)
        self.assertEqual(len(config_result["classrooms"]), 2)

    @patch("frappe.throw")
    def test_validate_config_invalid_dates(self, mock_throw):

        invalid_config = self.mock_config.copy()
        invalid_config["term_start_date"] = datetime(2025, 4, 1)
        invalid_config["term_end_date"] = datetime(2025, 3, 31)

        validate_config(invalid_config)

        mock_throw.assert_called_once_with("Invalid Academic Term dates")

    def test_get_school_days(self):
        """Test that school days are correctly generated starting from a given date"""
        # Test with a Wednesday start date (should adjust to next Monday)
        start_date = datetime(2025, 5, 21)  # Tuesday
        days = get_school_days(start_date)

        # Should start from next Monday (January 6)
        self.assertEqual(days[0], datetime(2025, 5, 26))  # Monday
        self.assertEqual(days[4], datetime(2025, 5, 30))  # Friday
        self.assertEqual(len(days), 5)

        # Test with a Monday start date
        start_date = datetime(2025, 5, 26)  # Monday
        days = get_school_days(start_date)

        self.assertEqual(days[0], datetime(2025, 5, 26))  # Monday
        self.assertEqual(len(days), 5)

    @patch("frappe.get_all")
    def test_get_period_slots(self, mock_get_all):
        """Test retrieving period slots from the timetable document"""

        mock_time_slots = [
            MagicMock(period=1, start_time="08:00", end_time="09:00"),
            MagicMock(period=2, start_time="09:00", end_time="10:00"),
        ]
        mock_get_all.side_effect = [mock_time_slots]

        mock_timetable_doc = MagicMock()
        mock_timetable_doc.name = "Test Timetable"

        result = get_period_slots(mock_timetable_doc)

        self.assertEqual(len(result), 2)
        self.assertEqual(result[0]["period"], 1)
        self.assertEqual(result[0]["from_time"], "08:00")
        self.assertEqual(result[0]["to_time"], "09:00")

    @patch("frappe.throw")
    @patch("frappe.get_all")
    def test_get_period_slots_no_slots(self, mock_get_all, mock_throw):
        """Test error handling when no slots are defined"""
        mock_get_all.return_value = []
        mock_timetable_doc = MagicMock()

        get_period_slots(mock_timetable_doc)

        # Verify that frappe.throw was called
        mock_throw.assert_called_once_with(
            "No time slots defined in the Timetable Generator. Please add time slots."
        )

    def test_prepare_scheduling_data(self):
        """Test that scheduling data is correctly prepared from preferences, rules, and streams"""
        result = prepare_scheduling_data(
            self.mock_config["teacher_preferences"],
            self.mock_config["subject_rules"],
            self.mock_config["all_streams"],
        )

        self.assertEqual(len(result), 16)  # 5 math + 3 physics for Science Stream

        # Check that each subject has the right frequency
        math_entries = [item for item in result if item["subject"] == "Mathematics"]
        physics_entries = [item for item in result if item["subject"] == "Physics"]

        self.assertEqual(len(math_entries), 10)
        self.assertEqual(len(physics_entries), 6)

        # Check that teachers are assigned correctly
        self.assertEqual(math_entries[0]["teachers"][0]["teacher"], "Teacher 1")
        self.assertEqual(physics_entries[0]["teachers"][0]["teacher"], "Teacher 2")

    @patch("frappe.db.sql")
    def test_clear_existing_schedules(self, mock_sql):
        """Test clearing existing schedules for an academic term"""
        with patch("frappe.get_doc") as mock_get_doc:
            mock_term_doc = MagicMock()
            mock_term_doc.term_start_date = self.mock_term_start_date
            mock_term_doc.term_end_date = self.mock_term_end_date
            mock_get_doc.return_value = mock_term_doc

            result = clear_existing_schedules("Term 2025")

            # Verify that SQL was called to delete records
            mock_sql.assert_called_once()
            self.assertTrue(result)  # Function should return True on success

    @patch("random.shuffle")
    def test_prepare_scheduling_data_sorting(self, mock_shuffle):
        """Test that scheduling data is sorted by priority"""
        # Create mock data with different priorities
        teacher_prefs = [
            {"teacher": "Teacher 1", "subject": "Math", "stream": "Science"}
        ]

        subject_rules = [
            {"subject": "Math", "frequency_per_week": 5, "allow_double": True}
        ]

        streams = [{"name": "Science"}]

        result = prepare_scheduling_data(teacher_prefs, subject_rules, streams)

        # Verify that shuffle was called and results are sorted
        mock_shuffle.assert_called_once()
        self.assertEqual(len(result), 5)  # 5 math periods

        # Check that all items have the right priority
        for item in result:
            self.assertEqual(item["priority"], 5)

    # Integration test for the full process
    @patch(f"{MODULE_PATH}.load_configuration")
    @patch(f"{MODULE_PATH}.clear_existing_schedules")
    @patch(f"{MODULE_PATH}.generate_initial_schedule")
    @patch(f"{MODULE_PATH}.save_and_report_results")
    def test_process_timetable_generation(
        self, mock_save, mock_generate, mock_clear, mock_load
    ):
        """Test the full timetable generation process"""

        mock_load.return_value = self.mock_config
        mock_clear.return_value = True

        mock_schedule_data = {
            "total_items": 10,
            "final_schedule": [],
            "scheduled_items": [],
            "unscheduled_items": [],
        }
        mock_generate.return_value = mock_schedule_data

        mock_save.return_value = {"success": True}

        result = process_timetable_generation()

        # Verify all steps were called
        mock_load.assert_called_once()
        mock_clear.assert_called_once_with(self.mock_config["academic_term"])
        mock_generate.assert_called_once_with(self.mock_config)
        mock_save.assert_called_once_with(self.mock_config, mock_schedule_data)

        self.assertEqual(result, {"success": True})

        mock_load.reset_mock()
        result = process_timetable_generation(self.mock_config)

        mock_load.assert_not_called()
