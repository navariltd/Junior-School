// Copyright (c) 2026, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Student Beneficiary Scholarship Allocation", {
  refresh(frm) {
    frm.trigger("set_filters");
  },

  company: function (frm) {
    frm.set_value("beneficiary", "");
    frm.refresh_field("beneficiary");
    frm.trigger("set_filters");
  },

  async set_filters(frm) {
    let settings = await frappe.db.get_doc(
      "Junior School Settings",
      "Junior School Settings",
    );

    const eligible_statuses =
      settings.eligible_statuses.map((status) => status.status) || [];

    frm.set_query("beneficiary", function () {
      return {
        filters: {
          company: frm.doc.company,
          status: ["in", eligible_statuses],
        },
      };
    });
  },
});
