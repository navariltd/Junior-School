# Copyright (c) 2026, Navari and contributors
# For license information, please see license.txt

import json

import frappe
from frappe.model.document import Document

from frappe import _


class AssessmentPlanTool(Document):
    def validate(self):
        self.validate_required_fields()
        self.validate_duplicate_entries()
        self.validate_required_child_fields()

    def validate_required_fields(self):
        if not self.academic_year:
            frappe.throw(_("Academic Year is required"))

        if not self.academic_term:
            frappe.throw(_("Academic Term is required"))

        if not self.assessment_plan_details:
            frappe.throw(_("Please add at least one assessment plan detail"))

    def validate_required_child_fields(self):
        required_fields = self.get_required_child_fields(
            "Assessment Plan Tool", "assessment_plan_details"
        )

        for idx, row in enumerate(self.assessment_plan_details, start=1):
            for field in required_fields:
                if not getattr(row, field):
                    frappe.throw(
                        _(f"Row {idx}: {field.replace('_', ' ').title()} is required")
                    )

    @staticmethod
    def get_required_child_fields(parent_doctype, child_table_fieldname):
        meta = frappe.get_meta(parent_doctype)

        table_field = meta.get_field(child_table_fieldname)
        if not table_field:
            return []

        child_doctype = table_field.options
        child_meta = frappe.get_meta(child_doctype)

        required_fields = [df.fieldname for df in child_meta.fields if df.reqd]

        return required_fields

    def validate_duplicate_entries(self):
        seen = set()
        for row in self.assessment_plan_details:
            key = (row.student_group, row.course)
            if key in seen:
                frappe.throw(
                    _(
                        f"Duplicate entry found for Student Group: {row.student_group}, Course: {row.course}"
                    )
                )
            seen.add(key)


@frappe.whitelist()
def create_assessment_plans(doc_name):
    doc = frappe.get_doc("Assessment Plan Tool", doc_name)

    if not doc.assessment_plan_details:
        frappe.throw(_("No assessment plan details to process"))

    doc.validate()

    created_plans = []
    failed_plans = []

    for row in doc.assessment_plan_details:
        try:
            existing = frappe.db.exists(
                "Assessment Plan",
                {
                    "student_group": row.student_group,
                    "course": row.course,
                    "academic_year": doc.academic_year,
                    "academic_term": doc.academic_term,
                    "custom_exam_type": doc.exam_type,
                },
            )

            if existing:
                failed_plans.append(
                    {
                        "student_group": row.student_group,
                        "course": row.course,
                        "reason": "Assessment Plan already exists",
                    }
                )
                continue

            # Create new assessment plan
            assessment_criteria = [
                {
                    "assessment_criteria": row.assessment_criteria,
                    "maximum_score": row.maximum_assessment_score,
                }
            ]
            assessment_plan = frappe.get_doc(
                {
                    "doctype": "Assessment Plan",
                    "company": doc.company,
                    "student_group": row.student_group,
                    "course": row.course,
                    "academic_year": doc.academic_year,
                    "academic_term": doc.academic_term,
                    "custom_exam_type": doc.exam_type,
                    "grading_scale": row.grading_scale,
                    "maximum_assessment_score": row.maximum_assessment_score,
                    "schedule_date": doc.schedule_date,
                    "from_time": row.from_time,
                    "to_time": row.to_time,
                    "room": row.room,
                    "examiner": row.examiner,
                    "supervisor": row.supervisor,
                    "assessment_criteria": assessment_criteria,
                    "assessment_group": row.assessment_group,
                }
            )

            assessment_plan.insert(ignore_permissions=True)
            created_plans.append(assessment_plan.name)

        except Exception as e:
            frappe.log_error("Assessment Plan Creation Failed", str(e))
            failed_plans.append(
                {
                    "student_group": row.student_group,
                    "course": row.course,
                    "reason": str(e),
                }
            )

    # Generate summary message
    message = f"""
        <h4>Assessment Plan Creation Summary</h4>
        <p><b>Successfully Created:</b> {len(created_plans)}</p>
        <p><b>Failed:</b> {len(failed_plans)}</p>
    """

    frappe.msgprint(
        message,
        title="Bulk Creation Complete",
        indicator="green" if created_plans else "red",
    )

    return {"created": created_plans, "failed": failed_plans}


@frappe.whitelist()
def get_student_groups_for_term(academic_year, academic_term, company):
    return frappe.get_all(
        "Student Group",
        filters={
            "academic_year": academic_year,
            "academic_term": academic_term,
            "company": company,
            "disabled": 0,
        },
        fields=["name", "student_group_name"],
        order_by="student_group_name",
    )


@frappe.whitelist()
def populate_from_student_groups(student_groups):
    if not student_groups:
        return

    if isinstance(student_groups, str):
        student_groups = json.loads(student_groups)

    student_groups = frappe.get_all(
        "Student Group",
        filters={"name": ["in", list(student_groups)], "disabled": 0},
        fields=["name", "student_group_name", "program"],
        order_by="student_group_name",
    )

    programs = set(group.program for group in student_groups)

    assessment_plan_details = []

    for program in programs:  # Grade 6
        program_groups = [group for group in student_groups if group.program == program]
        courses = get_courses_for_program(program)

        for group in program_groups:
            for course in courses:
                assessment_plan_details.append(
                    {
                        "program": program,
                        "student_group": group.name,
                        "course": course.course,
                    }
                )

    return assessment_plan_details


def get_courses_for_program(program):
    courses = frappe.get_all(
        "Program Course",
        filters={"parent": program},
        fields=["course", "course_name"],
        order_by="course_name",
    )
    return courses
