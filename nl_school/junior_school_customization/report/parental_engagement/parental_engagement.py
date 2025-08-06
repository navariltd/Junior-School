# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.query_builder import DocType


def execute(filters=None):
    columns, data = get_columns(filters), get_data(filters)
    return columns, data


def get_columns(filters):
    columns = [
        {
            "fieldname": "student",
            "label": "Student",
            "fieldtype": "Link",
            "options": "Student",
            "width": 150,
        },
        {
            "fieldname": "student_name",
            "label": "Student Name",
            "fieldtype": "Data",
            "width": 150,
        },
        {
            "fieldname": "parent1",
            "label": "Parent",
            "fieldtype": "Link",
            "options": "Guardian",
            "width": 150,
        },
        {
            "fieldname": "parent",
            "label": "Parent Name",
            "fieldtype": "Data",
            "width": 150,
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
        {
            "fieldname": "session_count",
            "label": "Sessions",
            "fieldtype": "Int",
            "hidden": 0 if filters.get("session_count") else 1,
        },
    ]
    return columns


def map_types(type):
    return type.lower().replace(" ", "_")


def get_data(filters):
    PE = DocType("Parental Engagement")

    students = []
    if filters.get("stream"):
        stream = filters.get("stream")
        students = frappe.get_all(
            "Student Group Student", filters={"parent": stream}, fields=["student"]
        )
        students = [student.student for student in students]
        if not students:
            return []

    query = frappe.qb.from_(PE).select(
        PE.student,
        PE.student_name,
        PE.parent1,
        PE.parent_name,
        PE.discussed_school_topics,
        PE.helped_with_homework,
        PE.encouraged_education,
        PE.frequency,
        (PE.attended_meetings).as_("session_count"),
    )

    conditions = []
    if filters.get("company"):
        conditions.append(PE.school == filters.get("company"))
    if filters.get("year"):
        conditions.append(PE.year == filters.get("year"))
    if filters.get("engagement_type"):
        field_name = map_types(filters.get("engagement_type"))
        if field_name:
            conditions.append(getattr(PE, field_name) == 1)

    for condition in conditions:
        query = query.where(condition)

    if students:
        query = query.where(PE.student.isin(students))

    return query.run()
