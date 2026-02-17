// Copyright (c) 2026, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Fee Request", {
  refresh(frm) {
    frm.trigger("set_filters");
  },
  fee_structure_template: function (frm) {
    if (frm.doc.fee_structure_template) {
      frm.clear_table("fee_request_items");
      frm.refresh_field("fee_request_items");

      frappe.call({
        method:
          "nl_school.junior_school_customization.doctype.fee_request.fee_request.get_fee_structure_template",
        args: {
          fee_structure_template: frm.doc.fee_structure_template,
        },
        callback: function (r) {
          const fee_components = r.message;
          if (fee_components) {
            for (const component of fee_components) {
              const fee_request_item = frm.add_child("fee_components");
              fee_request_item.fees_category = component.fees_category;
            }
            frm.refresh_field("fee_components");
          }
        },
      });
    }
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

frappe.ui.form.on("Fee Request Item", {
  amount: function (frm, cdt, cdn) {
    const total_amount = frm.doc.fee_components.reduce((total, item) => {
      return total + (item.amount || 0);
    }, 0);
    frm.set_value("total_amount", total_amount);
    frm.refresh_field("total_amount");
  },
});
