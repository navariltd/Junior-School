// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.query_reports["Most Improved Students"] = {
  filters: [
    {
      fieldname: "company",
      label: __("School"),
      fieldtype: "Link",
      options: "Company",
      reqd: 1,
    },
    {
      fieldname: "current_year",
      label: __("Year"),
      fieldtype: "Link",
      options: "Academic Year",
      reqd: 1,
      default: frappe.defaults.get_default("academic_year"),
    },
    {
      fieldname: "current_term",
      label: __("Current Term"),
      fieldtype: "Link",
      options: "Academic Term",
      reqd: 1,
    },
    {
      fieldname: "compare_term",
      label: __("Compare Term"),
      fieldtype: "Link",
      options: "Academic Term",
      reqd: 1,
    },
  ],

  formatter: function (value, row, column, data, default_formatter) {
    if (column.fieldname === "deviation") {
      let formatted_value = default_formatter(value, row, column, data);
      if (value < 0) {
        return `<span style="color: red; font-weight: bold;">${formatted_value}</span>`;
      } else {
        return `<span style="color: green; font-weight: bold;">${formatted_value}</span>`;
      }
    }
    return default_formatter(value, row, column, data);
  },
};
