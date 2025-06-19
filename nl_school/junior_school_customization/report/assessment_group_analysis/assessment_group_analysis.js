// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.query_reports["Assessment Group Analysis"] = {
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
      label: "Academic Term",
      fieldtype: "Link",
      options: "Academic Term",
      reqd: 0,
    },
    {
      fieldname: "student_group",
      label: __("Stream"),
      fieldtype: "Link",
      options: "Student Group",
      reqd: 0,
    },
  ],
};
