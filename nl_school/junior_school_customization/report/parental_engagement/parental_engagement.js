// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.query_reports["Parental Engagement"] = {
  filters: [
    {
      fieldname: "company",
      label: __("School"),
      fieldtype: "Link",
      options: "Company",
      reqd: 0,
    },
    {
      fieldname: "year",
      label: "Academic Year",
      fieldtype: "Link",
      options: "Academic Year",
      reqd: 0,
    },
    {
      fieldname: "engagement_type",
      label: __("Engagement Type"),
      fieldtype: "Select",
      options: [
        "Discussed School Topics",
        "Helped with Homework",
        "Encouraged Education",
      ],
      reqd: 0,
    },
  ],
};
