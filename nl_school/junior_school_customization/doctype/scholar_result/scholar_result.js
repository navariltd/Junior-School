// Copyright (c) 2026, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Scholar Result", {
  refresh: function (frm) {
    frm.trigger("set_filters");
  },
  academic_year: function (frm) {
    if (frm.doc.academic_year) {
      frm.set_value("academic_term", null);
      frm.set_query("academic_term", function () {
        return {
          filters: {
            academic_year: frm.doc.academic_year,
          },
        };
      });
    }
  },

  company: function (frm) {
    frm.trigger("set_filters");
  },

  async set_filters(frm) {
    let settings = await frappe.db.get_doc(
      "Junior School Settings",
      "Junior School Settings",
    );

    const eligible_statuses =
      settings.eligible_statuses.map((status) => status.status) || [];

    frm.set_query("scholar", function () {
      return {
        filters: {
          company: frm.doc.company,
          status: ["in", eligible_statuses],
        },
      };
    });
  },
});
