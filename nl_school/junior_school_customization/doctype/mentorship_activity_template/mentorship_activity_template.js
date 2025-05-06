// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Mentorship Activity Template", {
  get_students: function (frm) {
    frappe.call({
      method:
        "nl_school.junior_school_customization.utils.get_students_for_stream",
      args: {
        stream: frm.doc.stream,
      },
      callback: function (r) {
        if (r.message) {
          frm.clear_table("students");

          r.message.forEach((row) => {
            console.log(row);
            let child = frm.add_child("students");
            child.student = row.student;
            child.student_name = row.student_name;
            child.active = 1;
          });

          frm.refresh_field("students");
          frappe.msgprint(__("Students added to Mentored Students table."));
        }
      },
    });
  },
});
