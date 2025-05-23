# Copyright (c) 2025, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe import _


def execute(filters=None):

    columns = get_columns()
    data = get_data(filters)

    return columns, data


def get_columns():
    columns = [
        {"fieldname": "grading", "label": "Grade", "fieldtype": "Data", "width": 120}
    ]

    # Get all unique subjects from Assessment Results
    subjects = frappe.db.sql(
        """
        SELECT DISTINCT course 
        FROM `tabAssessment Result`
        WHERE course IS NOT NULL 
        ORDER BY course
    """,
        as_dict=1,
    )

    # Add a column for each subject
    for subject in subjects:
        columns.append(
            {
                "fieldname": subject.course.lower().replace(" ", "_"),
                "label": subject.course,
                "fieldtype": "Int",
                "width": 120,
            }
        )

    return columns


def get_data(filters):
    data = []

    # Get all unique grades
    grades = frappe.db.sql(
        """
        SELECT DISTINCT grade 
        FROM `tabAssessment Result`
        WHERE grade IS NOT NULL
        ORDER BY grade
    """,
        as_dict=1,
    )

    # Get all subjects
    subjects = frappe.db.sql(
        """
        SELECT DISTINCT course 
        FROM `tabAssessment Result`
        WHERE course IS NOT NULL
        ORDER BY course
    """,
        as_dict=1,
    )

    # Build filter conditions

    conditions = get_conditions(filters)

    where_clause = " AND ".join(conditions) if conditions else "1=1"

    # For each grade, get the count of students for each subject
    for grade in grades:
        row = {"grading": grade.grade}

        for subject in subjects:
            field_name = subject.course.lower().replace(" ", "_")
            count = frappe.db.sql(
                f"""
                SELECT COUNT(DISTINCT student) as count
                FROM `tabAssessment Result`
                WHERE course = %(course)s 
                AND grade = %(grade)s
                AND docstatus = 1
                AND {where_clause}
            """,
                {"course": subject.course, "grade": grade.grade, **(filters or {})},
                as_dict=1,
            )[0].count

            row[field_name] = count

        data.append(row)

    return data


def get_conditions(filters):
    conditions = []

    if filters:

        if filters.get("academic_year"):
            conditions.append("academic_year = %(academic_year)s")
        if filters.get("academic_term"):
            conditions.append("academic_term = %(academic_term)s")
        if filters.get("student_group"):
            conditions.append("student_group = %(student_group)s")

    return conditions
