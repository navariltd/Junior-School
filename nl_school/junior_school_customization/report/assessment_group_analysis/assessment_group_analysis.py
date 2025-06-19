# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.query_builder import DocType
from frappe.query_builder.functions import Sum, Avg, Max, Min

def execute(filters: dict | None = None):
    columns = get_columns(filters)
    data = get_data(filters)
    return columns, data

def get_columns(filters: dict) -> list[dict]:
    columns = [
        {"label": _("Metric"), "fieldname": "metric", "fieldtype": "Data", "width": 100}
    ]

    AssessmentResult = DocType("Assessment Result")

    conditions = get_conditions(filters)
    query = (
        frappe.qb.from_(AssessmentResult)
        .select(AssessmentResult.course)
        .distinct()
        .orderby(AssessmentResult.course)
    )

    for field, value in conditions.items():
        query = query.where(AssessmentResult[field] == value)

    courses = query.run(as_dict=True)

    for course in courses:
        course_name = course["course"]
        safe_fieldname = course_name.lower().replace(" ", "_").replace("-", "_")

        columns.append(
            {
                "label": _(course_name),
                "fieldname": safe_fieldname,
                "fieldtype": "Data",
                "width": 170,
            }
        )

    return columns

def get_data(filters: dict) -> list[dict]:
    AssessmentResult = DocType("Assessment Result")
    conditions = get_conditions(filters)

    query = (
        frappe.qb.from_(AssessmentResult)
        .select(
            AssessmentResult.course,
            Sum(AssessmentResult.total_score).as_("total_score"),
            Avg(AssessmentResult.total_score).as_("mean"),
            Max(AssessmentResult.total_score).as_("max_score"),
            Min(AssessmentResult.total_score).as_("min_score"),
            AssessmentResult.grade,
        )
        .groupby(AssessmentResult.course)
    )

    for field, value in conditions.items():
        query = query.where(AssessmentResult[field] == value)

    results = query.run(as_dict=True)

    if not results:
        return []

    course_lookup = {row["course"]: row for row in results}

    course_query = (
        frappe.qb.from_(AssessmentResult)
        .select(AssessmentResult.course)
        .distinct()
        .orderby(AssessmentResult.course)
    )
    for field, value in conditions.items():
        course_query = course_query.where(AssessmentResult[field] == value)

    courses = course_query.run(as_dict=True)

    metrics = [
        {"label": "Total Score", "field": "total_score"},
        {"label": "Mean Score", "field": "mean"},
        {"label": "Grade", "field": "grade"},
        {"label": "Max Score", "field": "max_score"},
        {"label": "Min Score", "field": "min_score"},
    ]

    data = []

    for metric in metrics:
        row = {"metric": metric["label"]}

        for course in courses:
            course_name = course["course"]
            safe_fieldname = course_name.lower().replace(" ", "_").replace("-", "_")

            if course_name in course_lookup:
                value = course_lookup[course_name].get(metric["field"])
                if metric["field"] == "grade":
                    row[safe_fieldname] = str(value) if value else ""
                else:
                    row[safe_fieldname] = f"{float(value):.1f}" if value is not None else "0.0"
            else:
                row[safe_fieldname] = ""

        data.append(row)

    return data

def get_conditions(filters: dict) -> dict:
    conditions = {}
    if filters.get("company"):
        conditions["company"] = filters["company"]
    if filters.get("academic_year"):
        conditions["academic_year"] = filters["academic_year"]
    if filters.get("academic_term"):
        conditions["academic_term"] = filters["academic_term"]
    if filters.get("student_group"):
        conditions["student_group"] = filters["student_group"]
    return conditions
