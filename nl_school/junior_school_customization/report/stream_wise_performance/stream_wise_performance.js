// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.query_reports["Stream Wise Performance"] = {
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
      fieldname: "program",
      label: __("Class"),
      fieldtype: "Link",
      options: "Program",
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
    value = default_formatter(value, row, column, data);

    const columns = ["total", "average", "grade"];

    if (columns.includes(column.fieldname)) {
      value = `<b>${value}</b>`;
    }
    return value;
  },
};
