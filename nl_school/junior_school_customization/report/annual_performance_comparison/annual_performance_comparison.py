# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

# import frappe
from frappe import _


def execute(filters: dict | None = None):
    """Return columns and data for the report.

    This is the main entry point for the report. It accepts the filters as a
    dictionary and should return columns and data. It is called by the framework
    every time the report is refreshed or a filter is updated.
    """
    columns = get_columns()
    data = get_data()

    return columns, data


def get_columns() -> list[dict]:

    return []


def get_data() -> list[list]:

    return []
