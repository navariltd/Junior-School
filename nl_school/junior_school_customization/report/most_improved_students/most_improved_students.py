# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.query_builder import DocType
from frappe.query_builder.functions import Avg
from collections import defaultdict


def execute(filters=None):
    columns = get_columns()
    data = get_data(filters)
    return columns, data


def get_columns():
    return [
        {
            "label": _("Student"),
            "fieldname": "student",
            "fieldtype": "Link",
            "options": "Student",
            "width": 180,
        },
        {
            "label": _("Student Group"),
            "fieldname": "student_group",
            "fieldtype": "Link",
            "options": "Student Group",
            "width": 150,
        },
        {
            "label": _("Current Term" + " Avg"),
            "fieldname": "current_term_avg",
            "fieldtype": "Float",
            "width": 200,
            "precision": 1,
        },
        {
            "label": _("Compare Term" + " Avg"),
            "fieldname": "compare_term_avg",
            "fieldtype": "Float",
            "width": 200,
            "precision": 1,
        },
        {
            "label": _("Deviation"),
            "fieldname": "deviation",
            "fieldtype": "Float",
            "width": 120,
            "precision": 1,
        },
    ]


def get_data(filters):
    compare_term = filters.get("compare_term")
    current_term = filters.get("current_term")
    company = filters.get("company")
    academic_year = filters.get("current_year")

    if not compare_term or not current_term:
        return []

    AssessmentResult = DocType("Assessment Result")

    query = (
        frappe.qb.from_(AssessmentResult)
        .select(
            AssessmentResult.student,
            AssessmentResult.student_name,
            AssessmentResult.student_group,
            AssessmentResult.academic_term,
            Avg(AssessmentResult.total_score).as_("avg_score"),
        )
        .where(AssessmentResult.academic_term.isin([compare_term, current_term]))
        .groupby(
            AssessmentResult.student,
            AssessmentResult.student_group,
            AssessmentResult.academic_term,
        )
    )

    if company:
        query = query.where(AssessmentResult.company == company)

    if academic_year:
        query = query.where(AssessmentResult.academic_year == academic_year)

    results = query.run(as_dict=True)

    pivot = defaultdict(dict)

    for row in results:
        student = row["student"]
        pivot[student]["student_name"] = row["student_name"]
        pivot[student]["student_group"] = row["student_group"]
        pivot[student][row["academic_term"]] = row["avg_score"]

    data = []

    for student, row in pivot.items():
        term1_avg = row.get(compare_term, 0.0)
        term2_avg = row.get(current_term, 0.0)
        deviation = term2_avg - term1_avg

        data.append(
            {
                "student": row["student_name"],
                "student_group": row["student_group"],
                "current_term_avg": round(term2_avg, 2),
                "compare_term_avg": round(term1_avg, 2),
                "deviation": round(deviation, 2),
            }
        )
    top_per_group = {}
    for row in data:
        group = row["student_group"]
        current_best = top_per_group.get(group)
        if not current_best or row["deviation"] > current_best["deviation"]:
            top_per_group[group] = row
    data = sorted(top_per_group.values(), key=lambda x: x["deviation"], reverse=True)

    return data
