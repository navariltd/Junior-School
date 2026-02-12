frappe.ui.form.on("Beneficiary", {
  refresh: (frm) => {
    frm.trigger("set_sub_county_filters");
    frm.trigger("set_ward_filters");

    if (
      frm.doc.scholar_status === "On Scholarship" &&
      frm.doc.official_school_name
    ) {
      frm.set_df_property("official_school_name", "read_only", 1);
    }
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
