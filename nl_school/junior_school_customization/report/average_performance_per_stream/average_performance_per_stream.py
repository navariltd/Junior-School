# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.query_builder import DocType
from frappe.query_builder.functions import Avg, Round


def execute(filters: dict | None = None):
    columns = get_columns()
    data = get_data(filters)
    chart = get_chart(data)
    return columns, data, None, chart


def get_columns() -> list[dict]:
    return [
        {"label": "Stream", "fieldname": "stream", "fieldtype": "Data", "width": 200},
        {
            "label": "Average %",
            "fieldname": "average_percentage",
            "fieldtype": "Float",
            "width": 150,
            "precision": 1,
        },
    ]


def get_data(filters) -> list[dict]:
    AssessmentResult = DocType("Assessment Result")
    conditions = get_conditions(filters, AssessmentResult)

    percentage_expr = Round(
        Avg((AssessmentResult.total_score / AssessmentResult.maximum_score) * 100), 1
    )

    query = (
        frappe.qb.from_(AssessmentResult)
        .select(
            AssessmentResult.student_group.as_("stream"),
            percentage_expr.as_("average_percentage"),
        )
        .where(
            AssessmentResult.total_score.isnotnull(),
            AssessmentResult.maximum_score.isnotnull(),
            AssessmentResult.maximum_score != 0,
            *conditions,
        )
        .groupby(AssessmentResult.student_group)
        .orderby(AssessmentResult.student_group)
    )

    results = frappe.qb.run(query)
    return [{"stream": row[0], "average_percentage": row[1]} for row in results]


def get_chart(data):
    if not data:
        return None

    chart = {
        "data": {
            "labels": [d["stream"] for d in data],
            "datasets": [
                {
                    "name": "Average %",
                    "values": [d["average_percentage"] for d in data],
                }
            ],
        },
        "type": "bar",
        "title": "Average Performance by Stream",
    }

    return chart


def get_conditions(filters, AssessmentResult):
    conditions = []

    if filters.get("academic_year"):
        conditions.append(AssessmentResult.academic_year == filters["academic_year"])
    if filters.get("academic_term"):
        conditions.append(AssessmentResult.academic_term == filters["academic_term"])
    if filters.get("school"):
        conditions.append(AssessmentResult.company == filters["school"])

    return conditions
