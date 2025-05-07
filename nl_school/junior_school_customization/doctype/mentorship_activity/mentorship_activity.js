// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Mentorship Activity", {
  get_students: function (frm) {
    frappe.call({
      method:
        "nl_school.junior_school_customization.utils.get_students_education_level",
      args: {
        education_level: frm.doc.education_level,
      },
      callback: function (r) {
        if (r.message) {
          frm.clear_table("student_in_attendance");

          r.message.forEach((row) => {
            let child = frm.add_child("student_in_attendance");
            child.student = row.name;
            child.student_name = row.student_name;
          });

          frm.refresh_field("student_in_attendance");
          frappe.msgprint(__("Students added to Mentored Students table."));
        }
      },
    });
  },
  activity_template: function (frm) {
    if (!frm.doc.activity_template) return;

    frappe.call({
      method:
        "nl_school.junior_school_customization.utils.get_template_details",
      args: {
        template_name: frm.doc.activity_template,
      },
      callback: function (r) {
        if (!r.message) return;

        frm.set_value("mentor", r.message.mentor);

        frm.clear_table("student_in_attendance");

        (r.message.students || []).forEach((student) => {
          let row = frm.add_child("student_in_attendance", {
            student: student.student,
            student_name: student.student_name,
          });
        });

        frm.refresh_field("student_in_attendance");
      },
    });
  },
});

frappe.ui.form.on("Mentorship Activity", {});
