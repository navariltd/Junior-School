// Copyright (c) 2026, Navari and contributors
// For license information, please see license.txt

frappe.query_reports["Academic Performance Analysis"] = {
  filters: [
    {
      fieldname: "company",
      label: __("Company"),
      fieldtype: "Link",
      options: "Company",
      default: frappe.defaults.get_user_default("Company"),
      reqd: 1,
    },
    {
      fieldname: "academic_year",
      label: __("Academic Year"),
      fieldtype: "Link",
      options: "Academic Year",
      reqd: 1,
    },
    {
      fieldname: "academic_term",
      label: __("Academic Term"),
      fieldtype: "Link",
      options: "Academic Term",
      reqd: 1,
    },
    {
      fieldname: "group_by",
      label: __("Group By"),
      fieldtype: "Select",
      options: "\nStudent Group\nProgram\nSubject",
      default: "Student Group",
      reqd: 1,
    },
    {
      fieldname: "program",
      label: __("Program"),
      fieldtype: "Link",
      options: "Program",
      depends_on: "eval:doc.group_by == 'Program'",
    },
    {
      fieldname: "student_group",
      label: __("Student Group"),
      fieldtype: "Link",
      options: "Student Group",
      depends_on: "eval:doc.group_by == 'Student Group'",
    },
    {
      fieldname: "assessment_group",
      label: __("Assessment Group"),
      fieldtype: "Link",
      options: "Assessment Group",
    },
    {
      fieldname: "grading_scale",
      label: __("Grading Scale"),
      fieldtype: "Link",
      options: "Grading Scale",
    },
  ],

  formatter: function (value, row, column, data, default_formatter) {
    value = default_formatter(value, row, column, data);
    if (data.is_total) {
      value = `<strong>${value}</strong>`;
    }
    return value;
  },
};
