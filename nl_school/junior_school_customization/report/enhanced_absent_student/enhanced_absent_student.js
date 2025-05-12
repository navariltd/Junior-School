// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.query_reports["Enhanced Absent Student"] = {
  filters: [
    {
      fieldname: "company",
      label: __("School"),
      fieldtype: "Link",
      options: "Company",
      reqd: 1,
      on_change: function (report) {
        const company = report.get_filter_value("company");
        report.set_filter_value("stream", "");
        report.get_filter("stream").df.get_query = function () {
          return {
            filters: {
              company: company,
            },
          };
        };
      },
    },
    {
      fieldname: "from_date",
      label: __("From Date"),
      fieldtype: "Date",
      default: frappe.datetime.get_today(),
      reqd: 1,
    },
    {
      fieldname: "to_date",
      label: __("To Date"),
      fieldtype: "Date",
      default: frappe.datetime.get_today(),
      reqd: 1,
    },
    {
      fieldname: "stream",
      label: __("Stream"),
      fieldtype: "Link",
      options: "Student Group",
    },
  ],
};
