// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.query_reports["Departmental Analysis Report"] = {
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
      fieldname: "grading_scale",
      label: __("Grading Scale"),
      fieldtype: "Link",
      options: "Grading Scale",
      reqd: 1,
    },
  ],
  formatter: function (value, row, column, data, default_formatter) {
    value = default_formatter(value, row, column, data);

    if (data && data.is_total) {
      value = `<b>${value}</b>`;
    }

    if (column.fieldname === "grade" || column.fieldname === "mean") {
      value = `<b>${value}</b>`;
    }

    return value;
  },
};
