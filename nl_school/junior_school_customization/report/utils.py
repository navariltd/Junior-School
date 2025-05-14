from frappe.desk.treeview import get_children

import frappe


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
            "student_group",
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
