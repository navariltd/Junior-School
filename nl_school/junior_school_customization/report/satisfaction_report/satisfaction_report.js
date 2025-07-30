// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.query_reports["Satisfaction Report"] = {
  filters: [
    {
      fieldname: "company",
      label: __("School"),
      fieldtype: "Link",
      options: "Company",
      reqd: 0,
    },
    {
      fieldname: "party_type",
      label: "Party Type",
      fieldtype: "Select",
      options: ["Student", "Guardian", "Teacher"],
      reqd: 0,
    },
    {
      fieldname: "academic_year",
      label: __("Academic Year"),
      fieldtype: "Link",
      options: "Academic Year",
      reqd: 0,
    },
    {
      fieldname: "academic_term",
      label: __("Academic Term"),
      fieldtype: "Link",
      options: "Academic Term",
      reqd: 0,
    },
    {
      fieldname: "program",
      label: __("Grade"),
      fieldtype: "Link",
      options: "Program",
      reqd: 0,
      get_query: function () {
        const company = frappe.query_report.get_filter_value("company");
        console.log("company", company);

        return {
          filters: {
            company: company,
          },
        };
      },
    },
    {
      fieldname: "student_group",
      label: __("Stream"),
      fieldtype: "Link",
      options: "Student Group",
      reqd: 0,
      get_query: function () {
        const company = frappe.query_report.get_filter_value("company");
        console.log("company", company);

        return {
          filters: {
            company: company,
          },
        };
      },
    },
  ],
};
