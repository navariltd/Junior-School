import frappe

import frappe
from frappe import _
from frappe.desk.treeview import get_children

import json
import frappe
from frappe import _
from frappe.utils.pdf import get_pdf
from frappe.www.printview import get_letter_head
import frappe
from frappe import _
from frappe.model.document import Document
from frappe.utils.pdf import get_pdf
from frappe.www.printview import get_letter_head

from education.education.report.course_wise_assessment_report.course_wise_assessment_report import (
	get_child_assessment_groups,
	
)

class StudentReportGenerationTool(Document):
	pass

@frappe.whitelist()
def preview_report_card(doc):
	doc = frappe._dict(json.loads(doc))
	doc.students = [doc.student]
	values = get_formatted_result(doc, get_course=True)
	courses = values.get("courses")
	assessment_groups = get_child_assessment_groups(doc.assessment_group)
	letterhead = get_letter_head(doc, not doc.add_letterhead)

	# Get the attendance of the student for that period of time.
	doc.attendance = get_attendance_count(
		doc.students[0], doc.academic_year, doc.academic_term
	)
	averages = calculate_averages(values.get("assessment_result", []))

	html = frappe.render_template(
		"nl_school/public/js/student_report_generation_tool.html",
		{
			"doc": doc,
			"values": values,
			"assessment_result": values.get("assessment_result"),
			"courses": courses,
			"assessment_groups": assessment_groups,
			"letterhead": letterhead and letterhead.get("content", None),
			"add_letterhead": doc.add_letterhead if doc.add_letterhead else 0,
			"averages": averages,
			"academic_term": doc.academic_term,
			"class_teacher": frappe.get_value("Student Group", doc.program, "custom_class_teacher"),
		},
	)

	final_template = frappe.render_template(
		"frappe/www/printview.html", {"body": html, "title": "Report Card"}
	)

	frappe.response.filename = "Report Card " + doc.students[0] + ".pdf"
	frappe.response.filecontent = get_pdf(final_template)
	frappe.response.type = "pdf"
 

def calculate_averages(assessment_result):
	"""
	Calculate average scores and grades for Opener, Mid Term, and End Term assessments.
	"""
	opener_scores = []
	mid_term_scores = []
	end_term_scores = []

	for result in assessment_result:
		if result["assessment_group"] == "Opening Term Exam":
			opener_scores.append(result["total_score"])
		elif result["assessment_group"] == "Mid Term Exam":
			mid_term_scores.append(result["total_score"])
		elif result["assessment_group"] == "End Term Exam":
			end_term_scores.append(result["total_score"])

	# Calculate averages
	avg_opener = sum(opener_scores) / len(opener_scores) if opener_scores else 0
	avg_mid_term = sum(mid_term_scores) / len(mid_term_scores) if mid_term_scores else 0
	avg_end_term = sum(end_term_scores) / len(end_term_scores) if end_term_scores else 0

	# Map averages to grades
	def get_grade(score):
		if score >= 80:
			return "E.E"
		elif score >= 65:
			return "M.E"
		elif score >= 50:
			return "A.E"
		else:
			return "B.E"

	return {
		"opener": {"score": round(avg_opener, 2), "grade": get_grade(avg_opener)},
		"mid_term": {"score": round(avg_mid_term, 2), "grade": get_grade(avg_mid_term)},
		"end_term": {"score": round(avg_end_term, 2), "grade": get_grade(avg_end_term)},
	}

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
			{"student": student, "docstatus": 1, "date": ["between", (from_date, to_date)]},
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
		frappe.throw(_("Please enter the Academic Year and set the Start and End date."))


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
			if not criteria in criterias:
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
	# frappe.throw(str(assessment_result))
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
  
	# frappe.throw(str(filters))
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


