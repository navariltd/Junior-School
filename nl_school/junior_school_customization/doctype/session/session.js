// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Session", {
  topic: function (frm) {
    frappe.call({
      method: "nl_school.junior_school_customization.utils.get_subtopics",
      args: {
        topic: frm.doc.topic,
      },
      callback: function (response) {
        if (response && response.message) {
          const subtopics = response.message.map((item) => item.topic_name);

          frm.set_df_property("sub_topic", "options", subtopics.join("\n"));

          if (subtopics.length > 0) {
            frm.set_value("sub_topic", "");
          } else {
            frm.set_value("sub_topic", "");
          }
        }
      },
    });
  },
});
