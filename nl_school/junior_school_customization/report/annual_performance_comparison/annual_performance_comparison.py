# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt
import frappe


def execute(filters=None):
    columns = get_columns(filters)
    data = get_data(filters)

    return columns, data


def get_columns(filters):
    columns = [
        {
            "fieldname": "student_group",
            "label": "Stream",
            "fieldtype": "Data",
            "width": 150,
        },
    ]
    for year_key in ["current_year", "compare_year"]:
        year = filters.get(year_key)
        if year:
            columns.append(
                {
                    "fieldname": year,
                    "label": year,
                    "fieldtype": "Percentage",
                    "width": 200,
                }
            )
    columns.append(
        {
            "fieldname": "deviation",
            "label": "Deviation",
            "fieldtype": "Percentage",
            "width": 120,
        }
    )
    return columns


def get_data(filters):

    current_year = filters.get("current_year")
    compare_year = filters.get("compare_year")
    conditions = get_conditions(filters)
    where_clause = " AND ".join(conditions)
    if where_clause:
        where_clause = " AND " + where_clause

    query = f"""
        SELECT
            student_group,
            ROUND(COALESCE(AVG(CASE WHEN academic_year = %(current_year)s THEN NULLIF(total_score, 0) END), 0), 1) AS `{current_year}`,
            ROUND(COALESCE(AVG(CASE WHEN academic_year = %(compare_year)s THEN NULLIF(total_score, 0) END), 0), 1) AS `{compare_year}`,
            ROUND(
                COALESCE(AVG(CASE WHEN academic_year = %(current_year)s THEN NULLIF(total_score, 0) END), 0) -
                COALESCE(AVG(CASE WHEN academic_year = %(compare_year)s THEN NULLIF(total_score, 0) END), 0),
                1
            ) AS deviation
        FROM `tabAssessment Result`
        WHERE academic_year IN (%(current_year)s, %(compare_year)s)
        {where_clause}
        GROUP BY student_group
        ORDER BY student_group
    """
    data = frappe.db.sql(query, filters, as_dict=True)

    mean_query = f"""
        SELECT
            ROUND(COALESCE(AVG(CASE WHEN academic_year = %(current_year)s THEN NULLIF(total_score, 0) END), 0), 1) AS current_year_mean,
            ROUND(COALESCE(AVG(CASE WHEN academic_year = %(compare_year)s THEN NULLIF(total_score, 0) END), 0), 1) AS compare_year_mean
        FROM `tabAssessment Result`
        WHERE academic_year IN (%(current_year)s, %(compare_year)s)
        {where_clause}
    """

    mean_values = frappe.db.sql(mean_query, filters, as_dict=True)[0]
    deviation_mean = round(
        mean_values["current_year_mean"] - mean_values["compare_year_mean"], 1
    )

    data.append(
        {
            "student_group": "",
            current_year: "",
            compare_year: "",
            "deviation": "",
        }
    )

    data.append(
        {
            "student_group": "<b>SCHOOL MEAN</b>",
            current_year: mean_values["current_year_mean"],
            compare_year: mean_values["compare_year_mean"],
            "deviation": deviation_mean,
        }
    )

    return data


def get_conditions(filters):
    conditions = []
    if filters.get("company"):
        conditions.append("company = %(company)s")
    if filters.get("academic_term"):
        conditions.append("academic_term = %(academic_term)s")
    return conditions
