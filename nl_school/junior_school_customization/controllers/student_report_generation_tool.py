import frappe

from frappe import _
from frappe.desk.treeview import get_children

import json
from frappe.utils.pdf import get_pdf
from frappe.www.printview import get_letter_head
from frappe.model.document import Document

# from education.education.report.course_wise_assessment_report.course_wise_assessment_report import (
#     get_child_assessment_groups,
# )
from frappe.utils import now_datetime


class StudentReportGenerationTool(Document):
    pass


@frappe.whitelist()
def preview_report_card(doc):
    """Main function to generate report card PDF"""
    doc = process_document_input(doc)
    template_data = prepare_report_card_data(doc)
    generate_pdf_response(doc, template_data)


def process_document_input(doc):
    """Parse and prepare the document input"""
    doc = frappe._dict(json.loads(doc))
    doc.students = [doc.student]
    return doc


def prepare_report_card_data(doc):
    """Prepare all data needed for the report card template"""
    # Basic document data
    class_teacher = get_class_teacher(doc.student)
    values = get_formatted_result(doc, get_course=True)
    assessment_groups = get_child_assessment_groups(doc.assessment_group)
    letterhead = get_letter_head(doc, not doc.add_letterhead)

    # Attendance data
    doc.attendance = get_attendance_count(
        doc.students[0], doc.academic_year, doc.academic_term
    )

    # Process assessment results
    assessment_results = process_assessment_results(values.get("assessment_result", []))
    averages = calculate_averages(values.get("assessment_result", []))
    exam_types_present = detect_exam_types(values.get("assessment_result", []))

    return {
        "doc": doc,
        "values": values,
        "assessment_result": assessment_results,
        "courses": values.get("courses"),
        "assessment_groups": assessment_groups,
        "letterhead": letterhead and letterhead.get("content", None),
        "add_letterhead": doc.add_letterhead if doc.add_letterhead else 0,
        "averages": averages,
        "academic_term": doc.academic_term,
        "class_teacher": class_teacher,
        "student_image": get_student_image(doc.student),
        "show_levels": True,
        "show_opener": exam_types_present["Opening Term Exam"],
        "show_midterm": exam_types_present["Mid Term Exam"],
        "show_endterm": exam_types_present["End Term Exam"],
        "date": now_datetime().strftime("%Y-%m-%d %H:%M:%S"),
    }


def generate_pdf_response(doc, template_data):
    """Generate and return the PDF response"""
    html = frappe.render_template(
        "nl_school/public/html/student_report_generation_tool.html", template_data
    )

    final_template = frappe.render_template(
        "frappe/www/printview.html", {"body": html, "title": "Report Card"}
    )

    frappe.response.filename = f"Report Card {doc.students[0]}.pdf"
    frappe.response.filecontent = get_pdf(final_template)
    frappe.response.type = "pdf"


def process_assessment_results(assessment_results):
    """Add levels to assessment results"""
    processed_results = []
    for result in assessment_results:
        grading_scale = frappe.db.get_value(
            "Assessment Result", result["name"], "grading_scale"
        )
        grade_info = get_grade(result["total_score"], grading_scale)
        result["levels"] = grade_info["levels"]
        processed_results.append(result)
    return processed_results


def detect_exam_types(assessment_results):
    """Determine which exam types are present in the results"""
    exam_types_present = {
        "Opening Term Exam": False,
        "Mid Term Exam": False,
        "End Term Exam": False,
    }

    for result in assessment_results:
        if result["assessment_group"] in exam_types_present:
            exam_types_present[result["assessment_group"]] = True

    return exam_types_present


def calculate_averages(assessment_result):
    """
    Calculate average scores, grades and levels for assessments
    Returns '-' for both score and levels when no assessments exist for a term
    """
    opener_scores = []
    mid_term_scores = []
    end_term_scores = []
    grading_scale = ""

    for result in assessment_result:
        if not grading_scale:
            grading_scale = frappe.db.get_value(
                "Assessment Result", result["name"], "grading_scale"
            )

        if result["assessment_group"] == "Opening Term Exam":
            opener_scores.append(result["total_score"])
        elif result["assessment_group"] == "Mid Term Exam":
            mid_term_scores.append(result["total_score"])
        elif result["assessment_group"] == "End Term Exam":
            end_term_scores.append(result["total_score"])

    # Default values when no assessments exist
    no_result = {"score": "-", "grade": "-", "levels": "-"}

    # Calculate averages only if assessments exist
    opener = no_result
    if opener_scores:
        avg_opener = sum(opener_scores) / len(opener_scores)
        grade_info = get_grade(avg_opener, grading_scale)
        opener = {
            "score": round(avg_opener, 2),
            "grade": grade_info["grade"],
            "levels": grade_info["levels"],
        }

    mid_term = no_result
    if mid_term_scores:
        avg_mid_term = sum(mid_term_scores) / len(mid_term_scores)
        grade_info = get_grade(avg_mid_term, grading_scale)
        mid_term = {
            "score": round(avg_mid_term, 2),
            "grade": grade_info["grade"],
            "levels": grade_info["levels"],
        }

    end_term = no_result
    if end_term_scores:
        avg_end_term = sum(end_term_scores) / len(end_term_scores)
        grade_info = get_grade(avg_end_term, grading_scale)
        end_term = {
            "score": round(avg_end_term, 2),
            "grade": grade_info["grade"],
            "levels": grade_info["levels"],
        }

    return {"opener": opener, "mid_term": mid_term, "end_term": end_term}


def get_grade(score, grading_scale):
    results = {"grade": None, "levels": None}
    grading_scale = frappe.get_doc("Grading Scale", grading_scale)
    grading_intervals = grading_scale.intervals

    for interval in sorted(grading_intervals, key=lambda x: x.threshold, reverse=True):
        if score >= interval.threshold:
            return {"grade": interval.grade_code, "levels": interval.custom_levels}

    return results


def get_attendance_count(student, academic_year, academic_term=None):
    attendance = frappe._dict()
    attendance.total = 0

    if academic_year:
        from_date, to_date = frappe.db.get_value(
            "Academic Year", academic_year, ["year_start_date", "year_end_date"]
        )
    elif academic_term:
        from_date, to_date = frappe.db.get_value(
            "Academic Term", academic_term, ["term_start_date", "term_end_date"]
        )

    if from_date and to_date:
        data = frappe.get_all(
            "Student Attendance",
            {
                "student": student,
                "docstatus": 1,
                "date": ["between", (from_date, to_date)],
            },
            ["status", "count(student) as count"],
            group_by="status",
        )

        for row in data:
            if row.status == "Present":
                attendance.present = row.count
            if row.status == "Absent":
                attendance.absent = row.count
            attendance.total += row.count
        return attendance
    else:
        frappe.throw(
            _("Please enter the Academic Year and set the Start and End date.")
        )


def execute(filters=None):
    data, chart = [], []

    if filters.get("assessment_group") == "All Assessment Groups":
        frappe.throw(
            _("Please select the assessment group other than 'All Assessment Groups'")
        )

    data, criterias = get_data(filters)
    columns = get_column(criterias)
    chart = get_chart(data, criterias)

    return columns, data, None, chart


def get_data(filters):
    data = []
    criterias = []
    values = get_formatted_result(filters)

    for result in values.get("assessment_result"):
        row = frappe._dict()
        row.student = result.get("student")
        row.student_name = result.get("student_name")

        for detail in result.details:
            criteria = detail.get("assessment_criteria")
            row[frappe.scrub(criteria)] = detail.get("grade")
            row[frappe.scrub(criteria) + "_score"] = detail.get("score")
            if criteria not in criterias:
                criterias.append(criteria)

        data.append(row)

    return data, criterias


def get_formatted_result(args, get_course=False):
    courses = []
    filters = prepare_filters(args)

    assessment_result = frappe.get_all(
        "Assessment Result",
        filters,
        [
            "student",
            "student_name",
            "name",
            "course",
            "assessment_group",
            "total_score",
            "grade",
            "academic_term",
        ],
        order_by="",
    )
    for result in assessment_result:
        if get_course and result.course not in courses:
            courses.append(result.course)

        details = frappe.get_all(
            "Assessment Result Detail",
            {
                "parent": result.name,
            },
            ["assessment_criteria", "maximum_score", "grade", "score"],
        )
        result.update({"details": details})

    return {"assessment_result": assessment_result, "courses": courses}


def prepare_filters(args):
    filters = {"academic_year": args.academic_year, "docstatus": 1}

    options = ["course", "academic_term", "student_group"]
    for option in options:
        if args.get(option):
            filters[option] = args.get(option)

    assessment_groups = get_child_assessment_groups(args.assessment_group)

    filters.update({"assessment_group": ["in", assessment_groups]})

    if args.students:
        filters.update({"student": ["in", args.students]})

    return filters


def get_column(criterias):
    columns = [
        {
            "fieldname": "student",
            "label": _("Student ID"),
            "fieldtype": "Link",
            "options": "Student",
            "width": 150,
        },
        {
            "fieldname": "student_name",
            "label": _("Student Name"),
            "fieldtype": "Data",
            "width": 150,
        },
    ]
    for criteria in criterias:
        columns.append(
            {
                "fieldname": frappe.scrub(criteria),
                "label": criteria,
                "fieldtype": "Data",
                "width": 100,
            }
        )
        columns.append(
            {
                "fieldname": frappe.scrub(criteria) + "_score",
                "label": "Score (" + criteria + ")",
                "fieldtype": "Float",
                "width": 100,
            }
        )

    return columns


def get_chart(data, criterias):
    dataset = []
    students = [row.student_name for row in data]

    for criteria in criterias:
        dataset_row = {"values": []}
        dataset_row["name"] = criteria
        for row in data:
            if frappe.scrub(criteria) + "_score" in row:
                dataset_row["values"].append(row[frappe.scrub(criteria) + "_score"])
            else:
                dataset_row["values"].append(0)

        dataset.append(dataset_row)

    charts = {
        "data": {"labels": students, "datasets": dataset},
        "type": "bar",
        "colors": ["#ff0e0e", "#ff9966", "#ffcc00", "#99cc33", "#339900"],
    }

    return charts


def get_child_assessment_groups(assessment_group):
    assessment_groups = []
    group_type = frappe.get_value("Assessment Group", assessment_group, "is_group")
    if group_type:
        assessment_groups = [
            d.get("value")
            for d in get_children("Assessment Group", assessment_group)
            if d.get("value") and not d.get("expandable")
        ]
    else:
        assessment_groups = [assessment_group]
    return assessment_groups


def get_student_image(student):
    student = frappe.get_doc("Student", student)
    if student.image:
        return student.image
    else:
        return None


def get_class_teacher(student_name):
    parent_list = frappe.get_all(
        "Student Group Student",
        filters={"student": student_name, "active": 1},
        fields=["parent"],
        as_list=True,
    )
    if parent_list:
        first_parent = parent_list[0][0]

        class_teacher = frappe.db.get_value(
            "Student Group", first_parent, "custom_class_teacher"
        )
        return class_teacher


# TODO: Add the function to create charts and convert them to images
