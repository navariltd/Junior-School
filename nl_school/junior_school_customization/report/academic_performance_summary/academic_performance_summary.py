# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from collections import defaultdict, Counter
from frappe.query_builder import DocType
from frappe.query_builder.functions import Sum, Avg


def execute(filters: dict | None = None):

    columns = get_columns()
    data = get_data(filters)
    chart = get_chart(data)

    return columns, data, None, chart


def get_columns() -> list[dict]:

    columns = [
        {
            "fieldname": "student_group",
            "label": _("Stream"),
            "fieldtype": "Link",
            "options": "Student Group",
            "width": 120,
        },
        {
            "fieldname": "student_name",
            "label": _("Student"),
            "fieldtype": "Link",
            "options": "Student",
            "width": 150,
        },
        {
            "fieldname": "total_score",
            "label": _("Total Score"),
            "fieldtype": "Int",
            "width": 120,
        },
        {
            "fieldname": "average",
            "label": _("Average"),
            "fieldtype": "Percent",
            "width": 120,
            "precision": 1,
        },
        {
            "fieldname": "grade",
            "label": _("Grade"),
            "fieldtype": "Data",
            "width": 120,
        },
    ]

    return columns


def get_data(filters) -> list[list]:

    AssessmentResult = DocType("Assessment Result")
    conditions = get_conditions(filters)
    grading_scales = get_grading_scales(filters)

    query = (
        frappe.qb.from_(AssessmentResult)
        .select(
            AssessmentResult.student,
            AssessmentResult.student_name,
            AssessmentResult.student_group,
            Sum(AssessmentResult.total_score).as_("total_score"),
            Avg(AssessmentResult.total_score).as_("avg_score"),
        )
        .groupby(AssessmentResult.student_group, AssessmentResult.student_name)
    )

    for field, value in conditions.items():
        query = query.where(AssessmentResult[field] == value)

    results = query.run(as_dict=True)

    pivot = defaultdict(dict)
    for row in results:
        student = row["student"]
        pivot[student]["student_name"] = row["student_name"]
        pivot[student]["student_group"] = row["student_group"]
        pivot[student]["total_score"] = row["total_score"]
        pivot[student]["average"] = row["avg_score"]
        pivot[student]["grade"] = get_grade(row["avg_score"], grading_scales)

    data = []
    for student, values in pivot.items():
        row = {"student": student}
        row.update(values)

        data.append(row)

    return data


def get_chart(data):

    grade_counts = Counter([row["grade"] for row in data if row.get("grade")])
    values = list(grade_counts.values())

    return {
        "data": {
            "labels": list(grade_counts.keys()),
            "datasets": [
                {
                    "name": "Grade Distribution",
                    "values": values,
                }
            ],
        },
        "type": "pie",
        "radius": 200,
        "height": 400,
    }


def get_conditions(filters: dict) -> dict:
    conditions = {}
    if not filters:
        return {}
    if filters.get("company"):
        conditions["company"] = filters["company"]
    if filters.get("academic_year"):
        conditions["academic_year"] = filters["academic_year"]
    if filters.get("academic_term"):
        conditions["academic_term"] = filters["academic_term"]
    if filters.get("grading_scale"):
        conditions["grading_scale"] = filters["grading_scale"]
    if filters.get("student_group"):
        conditions["student_group"] = filters["student_group"]
    return conditions


def get_grading_scales(filters):
    """Get grading scale to convert scores to grades"""
    grading_scale = filters.get("grading_scale")
    if not grading_scale:
        return []

    GradingScaleInterval = DocType("Grading Scale Interval")

    results = (
        frappe.qb.from_(GradingScaleInterval)
        .select(GradingScaleInterval.grade_code, GradingScaleInterval.threshold)
        .where(GradingScaleInterval.parent == grading_scale)
        .orderby(GradingScaleInterval.threshold, order=frappe.qb.desc)
    ).run(as_dict=True)

    return results


def get_grade(score, grading_scales):
    """Convert score to grade based on grading scale"""
    if not grading_scales:
        return ""

    for interval in grading_scales:
        if score >= interval.threshold:
            return interval.grade_code

    return ""
