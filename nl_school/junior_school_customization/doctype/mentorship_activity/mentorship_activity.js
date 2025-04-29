// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Mentorship Activity", {
  get_students: function (frm) {
    frappe.call({
      method:
        "nl_school.junior_school_customization.utils.get_students_for_stream",
      args: {
        stream: frm.doc.stream,
      },
      callback: function (r) {
        if (r.message) {
          frm.clear_table("student_in_attendance");

          r.message.forEach((row) => {
            let child = frm.add_child("student_in_attendance");
            child.student = row.student;
            child.student_name = row.student_name;
          });

          frm.refresh_field("student_in_attendance");
          frappe.msgprint(__("Students added to Mentored Students table."));
        }
      },
    });
  },
});
