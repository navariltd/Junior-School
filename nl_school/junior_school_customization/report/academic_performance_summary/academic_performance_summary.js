// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.query_reports["Academic Performance Summary"] = {
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
      label: __("Year"),
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
      fieldname: "student_group",
      label: __("Stream"),
      fieldtype: "Link",
      options: "Student Group",
      reqd: 0,
    },
    {
      fieldname: "grading_scale",
      label: __("Grading Scale"),
      fieldtype: "Link",
      options: "Grading Scale",
      reqd: 1,
    },
  ],
  formatter: function (value, row, column, data, default_formatter) {
    if (column.fieldname === "grade") {
      let formatted_value = default_formatter(value, row, column, data);
      if (value) {
        return `<span style="font-weight: bold;">${formatted_value}</span>`;
      }
    }
    return default_formatter(value, row, column, data);
  },
};
