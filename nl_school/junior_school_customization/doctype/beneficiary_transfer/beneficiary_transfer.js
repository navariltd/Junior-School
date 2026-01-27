// Copyright (c) 2026, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Beneficiary Transfer", {
  refresh(frm) {
    frm.set_query("beneficiary", function () {
      return {
        filters: {
          is_scholar: "Yes",
          status: ["!=", "Alumni"],
        },
      };
    });
  },
});
