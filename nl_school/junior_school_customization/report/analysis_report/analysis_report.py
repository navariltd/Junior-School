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

    columns.append(
        {
            "fieldname": "total_learners",
            "label": "Total Learners",
            "fieldtype": "Int",
            "width": 120,
        }
    )

    return columns


def get_data(filters):
    data = []

    # Build filter conditions
    conditions = get_conditions(filters)
    where_clause = " AND ".join(conditions) if conditions else "1=1"

    # Get all unique grades with filters applied
    grades = frappe.db.sql(
        f"""
        SELECT DISTINCT grade 
        FROM `tabAssessment Result`
        WHERE grade IS NOT NULL
        AND {where_clause}
        ORDER BY grade
        """,
        filters or {},
        as_dict=1,
    )

    # Get all subjects with filters applied
    subjects = frappe.db.sql(
        f"""
        SELECT DISTINCT course 
        FROM `tabAssessment Result`
        WHERE course IS NOT NULL
        AND {where_clause}
        ORDER BY course
        """,
        filters or {},
        as_dict=1,
    )

    # For each grade, get the count of assessment records for each subject
    for grade in grades:
        row = {"grading": grade.grade}

        # Get subject-wise counts using 'name' field
        for subject in subjects:
            field_name = subject.course.lower().replace(" ", "_")

            count = frappe.db.sql(
                f"""
                SELECT COUNT(DISTINCT name) as count
                FROM `tabAssessment Result`
                WHERE course = %(course)s 
                AND grade = %(grade)s
                AND {where_clause}
                """,
                {"course": subject.course, "grade": grade.grade, **(filters or {})},
                as_dict=1,
            )[0].count

            row[field_name] = count

        # Get total assessment records for this grade (using 'name')
        total_count = frappe.db.sql(
            f"""
            SELECT COUNT(DISTINCT name) as count
            FROM `tabAssessment Result`
            WHERE grade = %(grade)s
            AND {where_clause}
            """,
            {"grade": grade.grade, **(filters or {})},
            as_dict=1,
        )[0].count

        row["total_learners"] = total_count

        data.append(row)

    return data


def get_conditions(filters):
    conditions = []

    if filters:
        if filters.get("company"):
            conditions.append("company = %(company)s")
        if filters.get("academic_year"):
            conditions.append("academic_year = %(academic_year)s")
        if filters.get("academic_term"):
            conditions.append("academic_term = %(academic_term)s")
        if filters.get("student_group"):
            conditions.append("student_group = %(student_group)s")

    return conditions
