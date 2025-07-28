# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt
import frappe
from frappe.query_builder import DocType


def execute(filters=None):
    columns, data = get_columns(filters), get_data(filters)
    return columns, data


def get_columns(filters):
    session_type = filters.get("session_type") if filters else None

    if session_type == "Individual Session":
        columns = [
            {
                "fieldname": "cohort",
                "label": "Cohort",
                "fieldtype": "Data",
                "width": 120,
            },
            {
                "fieldname": "student",
                "label": "Student",
                "fieldtype": "Link",
                "options": "Student",
                "width": 120,
            },
            {
                "fieldname": "student_name",
                "label": "Student Name",
                "fieldtype": "Data",
                "options": "student",
                "width": 120,
            },
            {"fieldname": "date", "label": "Date", "fieldtype": "Date", "width": 120},
            {
                "fieldname": "topic",
                "label": "Topic",
                "fieldtype": "Link",
                "options": "Topic",
                "width": 120,
            },
            {
                "fieldname": "case_history",
                "label": "Case History",
                "fieldtype": "Text",
                "width": 200,
            },
            {
                "fieldname": "case_management",
                "label": "Case Management",
                "fieldtype": "Text",
                "width": 200,
            },
            {
                "fieldname": "grade",
                "label": "Grade",
                "fieldtype": "Link",
                "options": "Program",
                "width": 120,
            },
            {
                "fieldname": "stream",
                "label": "Stream",
                "fieldtype": "Link",
                "options": "Student Group",
                "width": 120,
            },
            {
                "fieldname": "next_steps",
                "label": "Next Steps",
                "fieldtype": "Text",
                "width": 200,
            },
        ]
    elif session_type == "Group Session":
        columns = [
            {
                "fieldname": "cohort",
                "label": "Cohort",
                "fieldtype": "Data",
                "width": 120,
            },
            {"fieldname": "date", "label": "Date", "fieldtype": "Date", "width": 120},
            {
                "fieldname": "sub_topic",
                "label": "Sub Topic",
                "fieldtype": "Link",
                "options": "Topic",
                "width": 120,
            },
            {
                "fieldname": "topic",
                "label": "Topic",
                "fieldtype": "Link",
                "options": "Topic",
                "width": 120,
            },
            {
                "fieldname": "grade",
                "label": "Grade",
                "fieldtype": "Link",
                "options": "Program",
                "width": 120,
            },
            {
                "fieldname": "stream",
                "label": "Stream",
                "fieldtype": "Link",
                "options": "Student Group",
                "width": 120,
            },
            {
                "fieldname": "number_of_students_trained",
                "label": "Number of Students Trained",
                "fieldtype": "Int",
                "width": 120,
            },
        ]

    return columns


def get_data(filters=None):
    Session = DocType("Session")

    filters = filters or {}
    conditions = get_conditions(filters, Session)
    session_type = filters.get("session_type")

    if not session_type:
        return []

    if session_type == "Individual Session":
        fields = [
            Session.cohort,
            Session.student,
            Session.student_name,
            Session.date,
            Session.topic,
            Session.case_history,
            Session.case_management,
            Session.grade,
            Session.stream,
            Session.next_steps,
        ]
    elif session_type == "Group Session":
        fields = [
            Session.cohort,
            Session.date,
            Session.sub_topic,
            Session.topic,
            Session.grade,
            Session.stream,
            Session.no_students_trained.as_("number_of_students_trained"),
        ]
    else:
        return []

    query = frappe.qb.from_(Session).select(*fields).where(Session.type == session_type)

    for condition in conditions:
        query = query.where(condition)
    data = query.run()
    return data


def get_conditions(filters, doctype):
    conditions = []

    if filters.get("company"):
        conditions.append(doctype.school == filters.get("company"))

    if filters.get("academic_year"):
        conditions.append(doctype.year == filters.get("academic_year"))

    if filters.get("academic_term"):
        conditions.append(doctype.term == filters.get("academic_term"))

    if filters.get("program"):
        conditions.append(doctype.grade == filters.get("program"))

    if filters.get("student_group"):
        conditions.append(doctype.stream == filters.get("student_group"))

    if filters.get("date"):
        conditions.append(doctype.date == filters.get("date"))

    if filters.get("session_type"):
        conditions.append(doctype.type == filters.get("session_type"))

    return conditions
