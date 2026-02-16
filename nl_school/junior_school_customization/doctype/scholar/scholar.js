// Copyright (c) 2026, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Scholar", {
  refresh: (frm) => {
    frm.trigger("set_sub_county_filters");
    frm.trigger("set_ward_filters");
  },

  county: (frm) => {
    frm.set_value("sub_county", "");
    frm.set_value("ward", "");
    frm.trigger("set_sub_county_filters");
  },

  sub_county: (frm) => {
    frm.trigger("set_ward_filters");
  },

  set_sub_county_filters(frm) {
    frm.set_query("sub_county", () => {
      return {
        filters: {
          county: frm.doc.county,
        },
      };
    });
  },
  set_ward_filters(frm) {
    frm.set_query("ward", () => {
      return {
        filters: {
          sub_county: frm.doc.sub_county,
        },
      };
    });
  },
});
