// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Teacher Transfer", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on("Teacher Transfer", {
  new_company: function (frm) {
    frm.set_query("department", function () {
      return {
        filters: {
          company: frm.doc.new_company,
        },
      };
    });
  },
});
