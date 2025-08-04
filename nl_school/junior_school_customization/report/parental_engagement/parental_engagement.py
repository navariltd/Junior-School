# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

# import frappe


def execute(filters=None):
    columns, data = get_columns(), get_data(filters)
    return columns, data


def get_columns():
    columns = [
        {
            "fieldname": "student",
            "label": "Student",
            "fieldtype": "Link",
            "options": "Student",
            "width": 200,
        },
        {
            "fieldname": "student",
            "label": "Student Name",
            "fieldtype": "Data",
            "width": 200,
        },
        {
            "fieldname": "parent",
            "label": "Parent",
            "fieldtype": "Link",
            "options": "Guardian",
            "width": 200,
        },
        {
            "fieldname": "parent",
            "label": "Parent Name",
            "fieldtype": "Data",
            "width": 200,
        },
        {
            "fieldname": "discussed_topics",
            "label": "Discussed School Topics",
            "fieldtype": "Data",
        },
        {
            "fieldname": "helped_homework",
            "label": "Helped with Homework",
            "fieldtype": "Data",
        },
        {
            "fieldname": "encouraged_education",
            "label": "Encouraged Education",
            "fieldtype": "Data",
        },
        {
            "fieldname": "frequency",
            "label": "Engagement Frequency",
            "fieldtype": "Data",
            "width": 200,
        },
    ]
    return columns


def get_data(filters):
    return []
