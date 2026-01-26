// Copyright (c) 2026, Navari Limited and contributors
// For license information, please see license.txt

frappe.ui.form.on("Scholarship Promotion Rule", {
  refresh(frm) {},
});

frappe.ui.form.on("Class Progression", {
  is_final: function (frm, cdt, cdn) {
    let row = frappe.get_doc(cdt, cdn);
    if (row.is_final) {
      frappe.model.set_value(cdt, cdn, "next_class", "");
    }
  },
});
