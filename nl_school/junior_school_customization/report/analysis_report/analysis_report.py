# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.query_builder import DocType
from frappe.query_builder.functions import Count
from frappe import _


def execute(filters=None):
    columns = get_columns()
    data = get_data(filters)
    return columns, data


def get_columns():
    columns = [
        {"fieldname": "grading", "label": "Grade", "fieldtype": "Data", "width": 120}
    ]

    AssessmentResult = DocType("Assessment Result")

    subject_query = (
        frappe.qb.from_(AssessmentResult)
        .select(AssessmentResult.course)
        .where(AssessmentResult.course.isnotnull())
        .distinct()
        .orderby(AssessmentResult.course)
    )

    subjects = frappe.qb.run(subject_query)

    for subject_row in subjects:
        course_name = subject_row[0]
        columns.append(
            {
                "fieldname": course_name.lower().replace(" ", "_"),
                "label": course_name,
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
    AssessmentResult = DocType("Assessment Result")

    conditions = get_conditions(filters, AssessmentResult)

    grade_query = (
        frappe.qb.from_(AssessmentResult)
        .select(AssessmentResult.grade)
        .where(AssessmentResult.grade.isnotnull(), *conditions)
        .distinct()
        .orderby(AssessmentResult.grade)
    )

    grades = frappe.qb.run(grade_query)

    subject_query = (
        frappe.qb.from_(AssessmentResult)
        .select(AssessmentResult.course)
        .where(AssessmentResult.course.isnotnull(), *conditions)
        .distinct()
        .orderby(AssessmentResult.course)
    )
    subjects = frappe.qb.run(subject_query)

    for grade_row in grades:
        grade = grade_row[0]
        row = {"grading": grade}

        for subject_row in subjects:
            course_name = subject_row[0]
            fieldname = course_name.lower().replace(" ", "_")

            subject_count_query = (
                frappe.qb.from_(AssessmentResult)
                .select(Count("*").as_("count"))
                .where(
                    AssessmentResult.grade == grade,
                    AssessmentResult.course == course_name,
                    *conditions,
                )
            )

            subject_count = frappe.qb.run(subject_count_query)[0][0] or 0
            row[fieldname] = subject_count

        total_query = (
            frappe.qb.from_(AssessmentResult)
            .select(Count("*").as_("count"))
            .where(AssessmentResult.grade == grade, *conditions)
        )

        total_count = frappe.qb.run(total_query)[0][0] or 0
        row["total_learners"] = total_count

        data.append(row)

    return data


def get_conditions(filters, AssessmentResult):
    """Return list of Frappe Query Builder conditions"""
    conditions = []

    if filters:
        if filters.get("company"):
            conditions.append(AssessmentResult.company == filters["company"])
        if filters.get("academic_year"):
            conditions.append(
                AssessmentResult.academic_year == filters["academic_year"]
            )
        if filters.get("academic_term"):
            conditions.append(
                AssessmentResult.academic_term == filters["academic_term"]
            )
        if filters.get("student_group"):
            conditions.append(
                AssessmentResult.student_group == filters["student_group"]
            )

    return conditions
