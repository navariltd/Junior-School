// Copyright (c) 2026, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Student Beneficiary Scholarship Allocation", {
  refresh(frm) {
    frm.trigger("set_filters");
  },

  company: function (frm) {
    frm.set_value("beneficiary", "");
    frm.refresh_field("beneficiary");
    frm.trigger("set_filters");
  },

  set_filters(frm) {
    frm.set_query("beneficiary", function () {
      return {
        filters: {
          company: frm.doc.company,
        },
      };
    });
  },
});
