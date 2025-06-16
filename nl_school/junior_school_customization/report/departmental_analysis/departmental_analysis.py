from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.query_builder import DocType
from frappe.query_builder.functions import Avg, Sum, Max, Min, Count


def execute(filters=None):
    columns = get_columns(filters)
    data = get_data(filters)
    return columns, data


def get_columns(filters):
    columns = [
        {
            "fieldname": "student_group",
            "label": _("Stream"),
            "fieldtype": "Link",
            "options": "Student Group",
            "width": 150,
        }
    ]

    AssessmentResult = DocType("Assessment Result")

    query = (
        frappe.qb.from_(AssessmentResult)
        .select(AssessmentResult.course)
        .distinct()
        .orderby(AssessmentResult.course)
    )
    query = apply_filters(query, AssessmentResult, filters)

    courses = query.run(as_dict=True)

    for course in courses:
        columns.append(
            {
                "fieldname": course.course.replace(" ", "_").lower(),
                "label": course.course,
                "fieldtype": "Data",
                "width": 130,
            }
        )

    columns.extend(
        [
            {
                "fieldname": "mean",
                "label": _("Mean"),
                "fieldtype": "Data",
                "width": 80,
            },
            {
                "fieldname": "grade",
                "label": _("Rubric"),
                "fieldtype": "Data",
                "width": 80,
            },
        ]
    )

    return columns


def get_data(filters):
    data = []

    AssessmentResult = DocType("Assessment Result")
    student_group_query = (
        frappe.qb.from_(AssessmentResult)
        .select(AssessmentResult.student_group)
        .distinct()
        .orderby(AssessmentResult.student_group)
    )
    student_group_query = apply_filters(student_group_query, AssessmentResult, filters)

    student_groups = student_group_query.run(as_dict=True)
    courses_query = (
        frappe.qb.from_(AssessmentResult)
        .select(AssessmentResult.course)
        .distinct()
        .orderby(AssessmentResult.course)
    )

    courses_query = apply_filters(courses_query, AssessmentResult, filters)

    courses = courses_query.run(as_dict=True)
    course_list = [c.course for c in courses]

    grading_scales = get_grading_scales(filters)

    for group in student_groups:
        group_name = group.student_group
        row = {"student_group": group_name}
        scores_query = (
            frappe.qb.from_(AssessmentResult)
            .select(
                AssessmentResult.course,
                Avg(AssessmentResult.total_score).as_("avg_score"),
            )
            .where(AssessmentResult.student_group == group_name)
            .groupby(AssessmentResult.course)
        )

        scores = scores_query.run(as_dict=True)

        course_scores = {}
        total = 0
        count = 0

        for score in scores:
            course = score.course
            avg_score = score.avg_score
            course_scores[course] = avg_score
            total += avg_score
            count += 1

        for course in course_list:
            row[course.replace(" ", "_").lower()] = "{:.1f}".format(
                course_scores.get(course, 0)
            )

        mean = total / count if count > 0 else 0
        row["mean"] = "{:.1f}".format(mean)
        row["grade"] = get_grade(mean, grading_scales)

        data.append(row)

    if data:
        total_row = {"student_group": "TOTAL", "is_total": True}
        mean_row = {"student_group": "MEAN", "is_total": True}
        rubric_row = {"student_group": "Rubric", "is_total": True}
        max_row = {"student_group": "MAX", "is_total": True}
        min_row = {"student_group": "MIN", "is_total": True}

        for course in course_list:
            fieldname = course.replace(" ", "_").lower()
            values = [float(row[fieldname]) for row in data if fieldname in row]

            if values:
                total_row[fieldname] = "{:.1f}".format(sum(values))
                mean_row[fieldname] = "{:.1f}".format(sum(values) / len(values))
                max_row[fieldname] = "{:.1f}".format(max(values))
                min_row[fieldname] = "{:.1f}".format(min(values))
                rubric_row[fieldname] = get_grade(
                    sum(values) / len(values), grading_scales
                )
            else:
                total_row[fieldname] = "0.0"
                mean_row[fieldname] = "0.0"
                max_row[fieldname] = "0.0"
                min_row[fieldname] = "0.0"
                rubric_row[fieldname] = ""

        summary_values = [float(row["mean"]) for row in data if "mean" in row]
        if summary_values:
            total_row["mean"] = "{:.1f}".format(sum(summary_values))
            mean_row["mean"] = "{:.1f}".format(
                sum(summary_values) / len(summary_values)
            )
            max_row["mean"] = "{:.1f}".format(max(summary_values))
            min_row["mean"] = "{:.1f}".format(min(summary_values))
            rubric_row["mean"] = get_grade(
                sum(summary_values) / len(summary_values), grading_scales
            )
            rubric_row["grade"] = get_grade(
                sum(summary_values) / len(summary_values), grading_scales
            )

        data.append(total_row)
        data.append(mean_row)
        data.append(rubric_row)
        data.append(max_row)
        data.append(min_row)

    return data


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


def apply_filters(query, ar_doctype, filters):
    if not filters:
        return query

    if filters.get("company"):
        query = query.where(ar_doctype.company == filters["company"])

    if filters.get("academic_year"):
        query = query.where(ar_doctype.academic_year == filters["academic_year"])

    if filters.get("academic_term"):
        query = query.where(ar_doctype.academic_term == filters["academic_term"])

    return query
