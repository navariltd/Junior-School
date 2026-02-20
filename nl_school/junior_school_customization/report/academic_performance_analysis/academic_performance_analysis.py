# Copyright (c) 2026, Navari and contributors
# For license information, please see license.txt
from typing import TypedDict


import frappe

from frappe import _
from frappe.utils import slug, flt

from frappe.query_builder import DocType

from education.education.api import get_grade


class AcademicPerformanceAnalysisFilters(TypedDict):
    academic_year: str | None
    academic_term: str | None
    group_by: str | None
    program: str | None
    student_group: str | None
    assessment_group: str | None
    grading_scale: str | None


def execute(filters: AcademicPerformanceAnalysisFilters):
    return AcademicPerformanceAnalysisReport(filters).run()


class AcademicPerformanceAnalysisReport:
    def __init__(self, filters: AcademicPerformanceAnalysisFilters):
        self.filters = filters
        self.course_length = 0
        self.columns = []
        self.data = []

    def run(self):
        self.validate_filters()
        self.get_columns()
        self.get_data()
        return self.columns, self.data

    def validate_filters(self):
        if not self.filters.get("academic_year"):
            frappe.throw(_("Academic Year is required"))
        if not self.filters.get("academic_term"):
            frappe.throw(_("Academic Term is required"))
        if not self.filters.get("group_by"):
            frappe.throw(_("Group By is required"))

        if self.filters.get("group_by") == "Student Group" and not self.filters.get(
            "student_group"
        ):
            frappe.throw(
                f"{_('Student Group')} {_('is required when Group By is')} {_('Student Group')}"
            )

    def get_columns(self):
        if self.filters.group_by == "Student Group":
            self.get_student_group_columns()
        if self.filters.group_by == "Program":
            self.get_program_columns()
        pass

    def get_data(self):
        if self.filters.get("group_by") == "Student Group":
            self.get_student_group_data()
        if self.filters.get("group_by") == "Program":
            self.get_program_data()

    def get_student_group_columns(self):
        columns = [
            {
                "label": _("Student"),
                "fieldname": "student",
                "fieldtype": "Link",
                "options": "Student",
                "width": 200,
            },
            {
                "label": _("Student Name"),
                "fieldname": "student_name",
                "fieldtype": "Data",
                "width": 200,
            },
            {
                "label": _("Student Group"),
                "fieldname": "student_group",
                "fieldtype": "Link",
                "options": "Student Group",
                "width": 150,
            },
        ]

        courses = self.get_courses()
        print("Courses:", courses)
        if courses:
            self.course_length = len(courses)
            for course in courses:
                columns_to_append = [
                    {
                        "label": _(course) + _(" - Score"),
                        "fieldname": f"{slug(course).replace('-', '_')}_score",
                        "fieldtype": "Float",
                        "width": 150,
                    },
                    {
                        "label": _(course) + _(" - Grade"),
                        "fieldname": f"{slug(course).replace('-', '_')}_grade",
                        "fieldtype": "Data",
                        "width": 150,
                    },
                ]
                columns.extend(columns_to_append)

        avg_cols = [
            {
                "fieldname": "total_score",
                "label": _("Total Score"),
                "fieldtype": "Float",
                "width": 150,
            },
            {
                "fieldname": "mean_score",
                "label": _("Mean Score"),
                "fieldtype": "Float",
                "width": 150,
            },
            {
                "fieldname": "final_grade",
                "label": _("Final Grade"),
                "fieldtype": "Data",
                "width": 150,
            },
        ]

        columns.extend(avg_cols)

        self.columns = columns

    def get_program_columns(self):
        columns = [
            {
                "label": _("Program"),
                "fieldname": "program",
                "fieldtype": "Link",
                "options": "Program",
                "width": 150,
            }
        ]

        courses = self.get_courses()
        if courses:
            self.course_length = len(courses)
            for course in courses:
                columns_to_append = [
                    {
                        "label": _("Score"),
                        "fieldname": f"{slug(course).replace('-', '_')}_score",
                        "fieldtype": "Float",
                        "width": 150,
                    },
                    {
                        "label": _(course) + " - Grade",
                        "fieldname": f"{slug(course).replace('-', '_')}_grade",
                        "fieldtype": "Data",
                        "width": 150,
                    },
                ]
                columns.extend(columns_to_append)

        avg_cols = [
            {
                "fieldname": "total_score",
                "label": _("Total Score"),
                "fieldtype": "Float",
                "width": 150,
            },
            {
                "fieldname": "mean_score",
                "label": _("Mean Score"),
                "fieldtype": "Float",
                "width": 150,
            },
            {
                "fieldname": "final_grade",
                "label": _("Final Grade"),
                "fieldtype": "Data",
                "width": 150,
            },
        ]

        columns.extend(avg_cols)

        self.columns = columns

    def get_courses(self):
        filters = {}
        if self.filters.get("student_group"):
            filters["student_group"] = self.filters.student_group
        if self.filters.get("program"):
            filters["program"] = self.filters.program
        if self.filters.get("assessment_group"):
            filters["assessment_group"] = self.filters.assessment_group
        if self.filters.get("grading_scale"):
            filters["grading_scale"] = self.filters.grading_scale

        courses = frappe.get_all(
            "Assessment Result", fields=["course"], filters=filters
        )

        return list(set(course.course for course in courses))

    def get_student_group_data(self):
        AR = DocType("Assessment Result")
        ARD = DocType("Assessment Result Detail")

        query = frappe.qb.from_(AR).join(ARD).on(AR.name == ARD.parent)

        # Apply filters
        if self.filters.get("student_group"):
            query = query.where(AR.student_group == self.filters.student_group)
        if self.filters.get("program"):
            query = query.where(AR.program == self.filters.program)
        if self.filters.get("assessment_group"):
            query = query.where(AR.assessment_group == self.filters.assessment_group)
        if self.filters.get("grading_scale"):
            query = query.where(AR.grading_scale == self.filters.grading_scale)

        # Select fields
        query = query.select(
            AR.name,
            AR.student,
            AR.student_name,
            AR.course,
            AR.student_group,
            AR.program,
            AR.grading_scale,
            ARD.maximum_score,
            ARD.score,
            ARD.grade,
        )

        data = query.run(as_dict=True)
        if not data:
            return

        self.data = self.build_student_group_data(data)

    def build_student_group_data(self, data):
        result = {}
        total_dict = {
            "student": "Total",
            "student_name": "",
            "student_group": "",
            "grading_scale": "",
            "total_score": 0,
            "mean_score": 0,
        }

        for row in data:
            student = row.student
            course = row.course
            score = row.score
            grade = row.grade

            if student not in result:
                result[student] = {
                    "student": student,
                    "student_name": row.student_name,
                    "student_group": row.student_group,
                    "grading_scale": row.grading_scale,
                    "maximum_score": row.maximum_score,
                }

            result[student][f"{slug(course).replace('-', '_')}_score"] = score
            result[student][f"{slug(course).replace('-', '_')}_grade"] = grade
            result[student]["total_score"] = result[student].get(
                "total_score", 0
            ) + flt(score)

            course_total = total_dict.get(slug(course).replace("-", "_") + "_score", 0)
            total_dict[slug(course).replace("-", "_") + "_score"] = course_total + flt(
                score
            )
            total_dict[slug(course).replace("-", "_") + "_grade"] = ""
            total_dict["grading_scale"] = (
                self.filters.get("grading_scale") or row.grading_scale
            )
            total_dict["total_score"] = total_dict.get("total_score", 0) + flt(score)

        result = list(result.values())

        for row in result:
            total_score = row.get("total_score", 0)
            course_length = flt(self.course_length)
            row["mean_score"] = (
                total_score / course_length if total_score > 0 and course_length else 0
            )
            total_dict["mean_score"] = (
                total_dict.get("mean_score", 0) + row["mean_score"]
            )
            grading_scale = self.filters.get("grading_scale") or row.get(
                "grading_scale"
            )
            row["final_grade"] = get_grade(grading_scale, row["mean_score"])

        total_row = []

        total = {
            "student": _("Total"),
            "student_name": "",
            "student_group": "",
            "grading_scale": total_dict.get("grading_scale"),
            "total_score": total_dict.get("total_score"),
            "mean_score": total_dict.get("mean_score"),
            "is_total": True,
        }

        for k, v in total_dict.items():
            if k.endswith("_score"):
                total[k] = v

        total_row.append(total)

        mean = {
            "student": _("Mean"),
            "student_name": "",
            "student_group": "",
            "total_score": total_dict.get("total_score"),
            "mean_score": flt(total_dict.get("mean_score")) / len(result),
            "grading_scale": total_dict.get("grading_scale"),
            "is_total": True,
        }

        buffered_value = 0
        for k, v in total_dict.items():
            if k.endswith("_score"):
                mean[k] = flt(v) / len(result)
                buffered_value = flt(v)
            if k.endswith("_grade"):
                mean[k] = get_grade(
                    total_dict.get("grading_scale"), buffered_value / len(result)
                )

        mean["final_grade"] = get_grade(
            total_dict.get("grading_scale"),
            flt(mean.get("mean_score")) / len(result),
        )

        total_row.append(mean)

        result.extend(total_row)

        return result
