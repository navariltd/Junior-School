// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Timetable Generator", {
  refresh: function (frm) {
    frm
      .add_custom_button(__("Generate Timetable"), function () {
        frappe.call({
          method:
            "nl_school.junior_school_customization.doctype.timetable_generator.timetable_generator.generate_timetable", // Server script to call
          args: {},
          freeze: true,
          freeze_message: __("Shuffling and Creating Timetable..."),
          callback: function (response) {
            if (response.message) {
              frappe.msgprint(__("Timetable Generated Successfully!"));
              frm.reload_doc();
            }
          },
        });
      })
      .addClass("btn-primary");
  },
});
