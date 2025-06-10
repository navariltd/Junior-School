# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe import _


def execute(filters: dict | None = None):
    columns = get_columns(filters)
    data = get_data(filters)
    return columns, data


def get_columns(filters: dict) -> list[dict]:
    columns = [
        {"label": _("Metric"), "fieldname": "metric", "fieldtype": "Data", "width": 100}
    ]

    courses = frappe.get_all(
        "Assessment Result",
        distinct=True,
        fields=["course"],
        order_by="course asc",
    )

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
    conditions = get_conditions(filters)

    results = frappe.get_all(
        "Assessment Result",
        filters=conditions,
        fields=[
            "course",
            "SUM(total_score) as total_score",
            "AVG(total_score) as mean",
            "MAX(total_score) as max_score",
            "MIN(total_score) as min_score",
            "grade",
        ],
        group_by="course",
        order_by="course desc",
    )

    if not results:
        return []

    course_lookup = {row["course"]: row for row in results}

    courses = frappe.get_all(
        "Assessment Result",
        distinct=True,
        fields=["course"],
        filters=conditions,
        order_by="course",
    )

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
                    row[safe_fieldname] = (
                        f"{float(value):.1f}" if value is not None else "0.0"
                    )
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
