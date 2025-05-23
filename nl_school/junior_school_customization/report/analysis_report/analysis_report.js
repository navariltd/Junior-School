// Copyright (c) 2024, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.query_reports['Analysis Report'] = {
  filters: [
    {
      fieldname: 'academic_year',
      label: __('Academic Year'),
      fieldtype: 'Link',
      options: 'Academic Year',
      reqd: 0,
    },

    {
      fieldname: 'student_group',
      label: __('Student Group'),
      fieldtype: 'Link',
      options: 'Student Group',
      reqd: 0,
    },
  ],
}
