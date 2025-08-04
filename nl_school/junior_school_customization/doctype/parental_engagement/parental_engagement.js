// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Parental Engagement", {
  student: (frm) => {
    frappe.call({
      method:
        "nl_school.junior_school_customization.utils.get_student_guardian",
      args: { student: frm.doc.student },
      callback: (r) => {
        frm.doc.parent1 = r.message;
        refresh_field("parent1");
      },
    });
  },
});
