// Copyright (c) 2024, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.query_reports['Annual Comparison Performance'] = {
  filters: [
    {
      fieldname: 'current_year',
      label: __('Current Year'),
      fieldtype: 'Link',
      options: 'Academic Year',
      reqd: 1,
      default: frappe.defaults.get_default('academic_year'),
    },
    {
      fieldname: 'academic_term',
      label: __('Academic Term'),
      fieldtype: 'Link',
      options: 'Academic Term',
      reqd: 1,
    },
  ],

  formatter: function (value, row, column, data, default_formatter) {
    value = default_formatter(value, row, column, data)

    if (column.fieldname == 'development') {
      if (data.development > 0) {
        value = `<span style="color: green">+${data.development}</span>`
      } else if (data.development < 0) {
        value = `<span style="color: red">${data.development}</span>`
      }
    }

    return value
  },
}
