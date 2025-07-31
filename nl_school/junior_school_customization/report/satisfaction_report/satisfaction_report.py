# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.query_builder import DocType


def execute(filters=None):
    columns, data = get_columns(filters), get_data(filters)
    print("data", data)
    return columns, data


def get_party_type(filters):
    party_type_mapping = {
        "Student": "Student",
        "Guardian": "Guardian",
        "Teacher": "Instructor",
    }

    return party_type_mapping.get(filters.get("party_type"), "Student")


def get_columns(filters):
    party_type_options = get_party_type(filters)

    columns = [
        {
            "fieldname": "name",
            "label": "SAT Name",
            "fieldtype": "Link",
            "options": "Satisfaction",
            "width": 200,
        },
        {
            "fieldname": "party",
            "label": "Party",
            "fieldtype": "Link",
            "options": party_type_options,
            "width": 200,
        },
        {
            "fieldname": "term_1_score",
            "label": "Term 1",
            "fieldtype": "Int",
            "width": 100,
            "precision": 1,
        },
        {
            "fieldname": "term_2_score",
            "label": "Term 2",
            "fieldtype": "Int",
            "width": 100,
            "precision": 1,
        },
        {
            "fieldname": "term_3_score",
            "label": "Term 3",
            "fieldtype": "Int",
            "width": 100,
            "precision": 1,
        },
        {
            "fieldname": "avg_score",
            "label": "Average",
            "fieldtype": "Float",
            "width": 100,
            "precision": 1,
        },
    ]
    return columns


def get_data(filters):
    SD = DocType("Satisfaction")

    parent_names_to_fetch = []
    if filters.get("academic_term"):
        academic_term_scores = frappe.get_all(
            "Satisfaction Scores",
            filters={"academic_term": filters.get("academic_term")},
            fields=["parent"],
            distinct=True,
        )
        parent_names_to_fetch = [d.parent for d in academic_term_scores]

        if not parent_names_to_fetch:
            return []

    base_query = frappe.qb.from_(SD).select(SD.name, SD.party, SD.avg_score)

    parent_conditions = []
    if filters.get("company"):
        parent_conditions.append(SD.school == filters.get("company"))
    if filters.get("academic_year"):
        parent_conditions.append(SD.year == filters.get("academic_year"))
    if filters.get("program"):
        parent_conditions.append(SD.grade == filters.get("program"))
    if filters.get("student_group"):
        parent_conditions.append(SD.stream == filters.get("student_group"))

    party_type = get_party_type(filters)
    if party_type:
        parent_conditions.append(SD.party_type == party_type)

    for condition in parent_conditions:
        base_query = base_query.where(condition)

    if parent_names_to_fetch:
        base_query = base_query.where(SD.name.isin(parent_names_to_fetch))

    satisfaction_records = base_query.run(as_dict=True)

    final_data = []
    for record in satisfaction_records:
        satisfaction_scores = frappe.get_all(
            "Satisfaction Scores",
            filters={"parent": record.name},
            fields=["academic_term", "score"],
            order_by="idx asc",
        )

        term_scores = {
            "term_1_score": None,
            "term_2_score": None,
            "term_3_score": None,
        }

        for i, score_row in enumerate(satisfaction_scores):
            if i == 0:
                term_scores["term_1_score"] = score_row.score
            elif i == 1:
                term_scores["term_2_score"] = score_row.score
            elif i == 2:
                term_scores["term_3_score"] = score_row.score

        row = {
            "name": record.name,
            "party": record.party,
            "term_1_score": term_scores["term_1_score"],
            "term_2_score": term_scores["term_2_score"],
            "term_3_score": term_scores["term_3_score"],
            "avg_score": record.avg_score,
        }
        final_data.append(row)

    return final_data
