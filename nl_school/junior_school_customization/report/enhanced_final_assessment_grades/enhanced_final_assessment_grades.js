// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.query_reports["Enhanced Final Assessment Grades"] = {
  filters: [
    {
      fieldname: "company",
      label: __("School"),
      fieldtype: "Link",
      options: "Company",
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
      get_query: function () {
        return {
          filters: {
            academic_year:
              frappe.query_report.get_filter_value("academic_year"),
          },
        };
      },
    },

    {
      fieldname: "student_group",
      label: __("Student Group"),
      fieldtype: "Link",
      options: "Student Group",
      // reqd: 1,
      get_query: function () {
        return {
          filters: {
            group_based_on: "Batch",
            company: frappe.query_report.get_filter_value("company"),
            academic_year:
              frappe.query_report.get_filter_value("academic_year"),
          },
        };
      },
    },
    {
      fieldname: "program",
      label: __("Class"),
      fieldtype: "Link",
      options: "Program",
    },
    {
      fieldname: "assessment_group",
      label: __("Assessment Group"),
      fieldtype: "Link",
      options: "Assessment Group",
      reqd: 1,
    },
  ],
};
