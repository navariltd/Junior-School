// Copyright (c) 2025, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.query_reports['Average Performance per Stream Chart'] = {
  filters: [
    {
      fieldname: 'academic_year',
      label: 'Academic Year',
      fieldtype: 'Link',
      options: 'Academic Year',
      reqd: 1,
    },
    {
      fieldname: 'academic_term',
      label: 'Academic Term',
      fieldtype: 'Link',
      options: 'Academic Term',
      reqd: 0,
    },
    {
      fieldname: 'company',
      label: 'School',
      fieldtype: 'Link',
      options: 'Company',
      reqd: 0,
    },
  ],
}
