// Copyright (c) 2025, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Satisfaction", {
  party: function (frm) {
    const doctype = frm.doc.party_type;

    frappe.db
      .get_value(doctype, frm.doc.party, `${doctype.toLowerCase()}_name`)
      .then((response) => {
        frm.doc.party_name = `${Object.values(response.message)}`;
      });
  },
});
