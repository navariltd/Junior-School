# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.query_builder import DocType


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
            "fieldname": "student_name",
            "label": "Student Name",
            "fieldtype": "Data",
            "width": 200,
        },
        {
            "fieldname": "parent1",
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
            "fieldname": "discussed_school_topics",
            "label": "Discussed School Topics",
            "fieldtype": "Data",
        },
        {
            "fieldname": "helped_with_homework",
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


def map_types(filters=None):
    if filters:
        if filters.get("engagement_type"):
            stripped = filters.get("engagement_type")
            stripped.lower().replace(" ", "_")

            return stripped


def get_data(filters):
    PE = DocType("Parental Engagement")

    query = frappe.qb.from_(PE).select(
        PE.student,
        PE.student_name,
        PE.parent1,
        PE.parent_name,
        PE.discussed_school_topics,
        PE.helped_with_homework,
        PE.encouraged_education,
        PE.frequency,
    )

    conditions = []
    if filters.get("company"):
        conditions.append(PE.year == filters.get("company"))
    if filters.get("year"):
        conditions.append(PE.year == filters.get("year"))
    if filters.get("Engagement Type"):
        field_name = map_types(filters)
        if field_name:
            conditions.append(getattr(PE, field_name) == 1)

    for condition in conditions:
        query = query.where(condition)

    return query.run()
