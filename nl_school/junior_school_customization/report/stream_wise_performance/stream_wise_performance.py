# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.query_builder import DocType
from frappe.query_builder.functions import Sum
from collections import defaultdict


def execute(filters=None):
    columns = get_columns(filters)
    data = get_data(filters)
    return columns, data


def get_columns(filters=None):
    AR = DocType("Assessment Result")

    columns = [
        {
            "label": _("Student ID"),
            "fieldname": "student",
            "fieldtype": "Link",
            "options": "Student",
            "width": 100,
        },
        {
            "label": _("Student"),
            "fieldname": "student_name",
            "fieldtype": "Data",
            "width": 100,
        },
    ]

    conditions = get_conditions(filters)

    query = frappe.qb.from_(AR).select(AR.course).distinct().orderby(AR.course)

    for field, value in conditions.items():
        query = query.where(AR[field] == value)

    courses = query.run(as_dict=True)

    for course in courses:
        course_name = course["course"]
        safe_fieldname = course_name.lower().replace(" ", "_").replace("-", "_")
        columns.append(
            {
                "label": _(course_name),
                "fieldname": safe_fieldname,
                "fieldtype": "Int",
                "width": 170,
            }
        )
    columns.extend(
        [
            {
                "label": _("Total"),
                "fieldname": "total",
                "fieldtype": "Int",
                "width": 170,
            },
            {
                "label": _("Average"),
                "fieldname": "average",
                "fieldtype": "Int",
                "width": 170,
            },
            {
                "label": _("Grade"),
                "fieldname": "grade",
                "fieldtype": "Data",
                "width": 120,
            },
        ]
    )

    return columns


def get_data(filters):
    AR = DocType("Assessment Result")
    conditions = get_conditions(filters) if filters else {}
    grading_scales = get_grading_scales(filters) if filters else {}

    student_query = (
        frappe.qb.from_(AR)
        .select(AR.student, AR.student_name)
        .distinct()
        .orderby(AR.student)
    )

    course_query = frappe.qb.from_(AR).select(AR.course).distinct().orderby(AR.course)

    for field, value in conditions.items():
        student_query = student_query.where(AR[field] == value)
        course_query = course_query.where(AR[field] == value)

    students = student_query.run(as_dict=True)
    courses = course_query.run(as_dict=True)

    course_fields = {
        c["course"]: c["course"].lower().replace(" ", "_").replace("-", "_")
        for c in courses
    }

    pivot = defaultdict(dict)

    for student in students:
        student_id = student["student"]
        student_name = student["student_name"]

        pivot[student_id]["student"] = student_id
        pivot[student_id]["student_name"] = student_name

        for fieldname in course_fields.values():
            pivot[student_id][fieldname] = 0.0

        score_query = (
            frappe.qb.from_(AR)
            .select(AR.course, Sum(AR.total_score).as_("total_score"))
            .where(AR.student == student_id)
            .groupby(AR.course)
        )

        for field, value in conditions.items():
            score_query = score_query.where(AR[field] == value)

        scores = score_query.run(as_dict=True)

        for score in scores:
            fieldname = score["course"].lower().replace(" ", "_").replace("-", "_")
            pivot[student_id][fieldname] = score["total_score"] or 0.0

        total = sum(pivot[student_id][field] for field in course_fields.values())
        avg = total / len(course_fields) if course_fields else 0.0

        pivot[student_id]["total"] = round(total, 2)
        pivot[student_id]["average"] = round(avg, 2)
        pivot[student_id]["grade"] = get_grade(
            pivot[student_id]["average"], grading_scales
        )

    data = list(pivot.values())
    data = sorted(data, key=lambda x: x["average"], reverse=True)

    return data


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
    if filters.get("program"):
        conditions["program"] = filters["program"]
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
