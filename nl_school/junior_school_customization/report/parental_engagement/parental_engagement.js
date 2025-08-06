// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.query_reports["Parental Engagement"] = {
  filters: [
    {
      fieldname: "company",
      label: __("School"),
      fieldtype: "Link",
      options: "Company",
      reqd: 1,
    },
    {
      fieldname: "year",
      label: "Academic Year",
      fieldtype: "Link",
      options: "Academic Year",
      reqd: 1,
    },
    {
      fieldname: "stream",
      label: "Stream",
      fieldtype: "Link",
      options: "Student Group",
      reqd: 0,
    },
    {
      fieldname: "engagement_type",
      label: __("Engagement Type"),
      fieldtype: "Select",
      options: [
        "",
        "Discussed School Topics",
        "Helped with Homework",
        "Encouraged Education",
      ],
      reqd: 0,
    },
  ],

  formatter: function (value, row, column, data, default_formatter) {
    const engagement_fields = [
      "discussed_school_topics",
      "helped_with_homework",
      "encouraged_education",
    ];

    if (engagement_fields.includes(column.fieldname)) {
      if (value && value !== "No") {
        return `<span style="color: green; font-weight: bold;"> Engaged </span>`;
      } else {
        return `<span style="color: red; font-weight: bold;"> - </span>`;
      }
    }

    return default_formatter(value, row, column, data);
  },
};
