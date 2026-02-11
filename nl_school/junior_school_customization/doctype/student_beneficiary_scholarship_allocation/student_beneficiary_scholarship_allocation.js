// Copyright (c) 2026, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Student Beneficiary Scholarship Allocation", {
  refresh(frm) {
    frm.trigger("set_filters");
  },

  academic_year: function (frm) {
    frm.set_value("academic_term", "");
    frm.refresh_field("academic_term");
    frm.set_query("academic_term", function () {
      return {
        filters: {
          academic_year: frm.doc.academic_year,
        },
      };
    });
  },

  company: function (frm) {
    frm.set_value("beneficiary", "");
    frm.refresh_field("beneficiary");
    frm.trigger("set_filters");
  },

  allocation_type: function (frm) {
    frm.trigger("set_filters");
    frm.clear_table("allocation_items");
    frm.refresh_field("allocation_items");
  },

  item_code(frm) {
    if (frm.fields_dict["allocation_items"].grid.get_field("uom")) {
      frm.set_query("uom", "allocation_items", function (frm, cdt, cdn) {
        let row = locals[cdt][cdn];

        return {
          query: "erpnext.controllers.queries.get_item_uom_query",
          filters: {
            item_code: row.item_code,
          },
        };
      });
    }
  },

  async set_filters(frm) {
    let settings = await frappe.db.get_doc(
      "Junior School Settings",
      frm.doc.company,
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

    frm.set_query("source_warehouse", () => {
      return {
        filters: {
          company: frm.doc.company,
          is_group: 0,
        },
      };
    });

    let eligible_items = [];

    if (
      frm.doc.allocation_type === "Cash" &&
      settings.school_fees_items.length
    ) {
      settings.school_fees_items.forEach((item) => {
        eligible_items.push(item.item_code);
      });
    }

    if (
      frm.doc.allocation_type === "Items" &&
      settings.distribution_items.length
    ) {
      settings.distribution_items.forEach((item) => {
        eligible_items.push(item.item_code);
      });
    }

    frm.set_query("item_code", "allocation_items", () => {
      return {
        filters: {
          item_code: ["in", eligible_items],
        },
      };
    });
  },
});

frappe.ui.form.on("Student Beneficiary Scholarship Allocation Item", {
  rate: function (frm, cdt, cdn) {
    let row = locals[cdt][cdn];
    const amount = row.rate * row.qty;
    frappe.model.set_value(cdt, cdn, "amount", amount);
  },

  qty: function (frm, cdt, cdn) {
    let row = locals[cdt][cdn];
    const amount = row.rate * row.qty;
    frappe.model.set_value(cdt, cdn, "amount", amount);
  },

  item_code: function (frm, cdt, cdn) {
    let row = locals[cdt][cdn];
    frm.call({
      method: "frappe.client.get_list",
      args: {
        doctype: "Item",
        filters: {
          item_code: row.item_code,
        },
        fields: ["stock_uom"],
      },
      callback: function (r) {
        if (r.message && r.message.length > 0) {
          const item = r.message[0];
          // frappe.model.set_value(cdt, cdn, "item_name", item.item_name);
          frappe.model.set_value(cdt, cdn, "uom", item.stock_uom);
        }
      },
    });
  },
});
