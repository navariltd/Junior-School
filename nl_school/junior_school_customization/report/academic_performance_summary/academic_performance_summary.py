# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from collections import defaultdict


def execute(filters: dict | None = None):

    columns = get_columns()
    data = get_data(filters)

    return columns, data


def get_columns() -> list[dict]:

    columns = [
        {
            "fieldname": "student_group",
            "label": _("Stream"),
            "fieldtype": "Options",
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
        },
    ]

    return columns


def get_data(filters) -> list[list]:

    query = """
			SELECT
				student,
				student_name,
				student_group,
				sum(total_score) as total_score,
				AVG(total_score) AS avg_score
			FROM
				`tabAssessment Result`
			GROUP BY
				student_group,
				student_name;
			"""
    results = frappe.db.sql(query, as_dict=1)

    print(results)

    pivot = defaultdict(dict)
    for row in results:
        print(row)
        student = row["student"]
        pivot[student]["student_name"] = row["student_name"]
        pivot[student]["student_group"] = row["student_group"]
        pivot[student]["total_score"] = row["total_score"]
        pivot[student]["average"] = row["avg_score"]

    data = []
    for student, values in pivot.items():
        row = {"student": student}
        row.update(values)

        data.append(row)

    return data


