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
          console.log(response);

          const subtopics = response.message.map((item) => item.topic_name);
          console.log(subtopics);

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
