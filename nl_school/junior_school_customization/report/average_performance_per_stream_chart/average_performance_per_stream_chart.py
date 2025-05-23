# Copyright (c) 2025, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe import _


def execute(filters: dict | None = None):

    columns = get_columns()
    data = get_data(filters)
    chart = get_chart(data)

    return columns, data, None, chart


def get_columns() -> list[dict]:
    """Return columns for the report.

    One field definition per column, just like a DocType field definition.
    """
    return [
        {
            "label": "School",
            "fieldname": "school",
            "fieldtype": "Float",
            "width": 150,
            "precision": 2,
        },
        {"label": "Stream", "fieldname": "stream", "fieldtype": "Data", "width": 200},
        {
            "label": "Average %",
            "fieldname": "average_percentage",
            "fieldtype": "Float",
            "width": 150,
            "precision": 1,
        },
    ]


def get_data(filters) -> list[list]:
    conditions = get_conditions(filters)

    data = frappe.db.sql(
        """
        SELECT
            ar.company AS school,
            ap.student_group AS stream,
            ROUND(AVG(ar.total_score / ar.maximum_score * 100), 1) AS average_percentage
        FROM
            `tabAssessment Result` ar
        JOIN
            `tabAssessment Plan` ap ON ap.name = ar.assessment_plan
        WHERE
            ar.total_score IS NOT NULL
            AND ar.maximum_score IS NOT NULL
            {conditions}
        GROUP BY
            ar.company, ap.student_group
        ORDER BY
            ar.company, ap.student_group
    """.format(
            conditions=conditions
        ),
        filters,
        as_dict=True,
    )

    return data


def get_chart(data):
    if not data:
        return None

    schools = list(set(d.school for d in data))
    datasets = []

    for school in schools:
        school_data = [d.average_percentage for d in data if d.school == school]
        if school_data:
            datasets.append({"name": school, "values": school_data})

    chart = {
        "data": {
            "labels": [d.stream for d in data],
            "datasets": datasets,
        },
        "type": "bar",
        "title": "Average Performance by Stream per School",
    }

    return chart


def get_conditions(filters):
    conditions = ""
    if filters.get("academic_year"):
        conditions += " AND ar.academic_year = %(academic_year)s"
    if filters.get("academic_term"):
        conditions += " AND ar.academic_term = %(academic_term)s"
    if filters.get("company"):
        conditions += " AND ar.company = %(company)s"

    return conditions
