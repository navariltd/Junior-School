frappe.ui.form.on("Item", {
  refresh(frm) {
    if (frm.doc.school_fees_item) {
      frm.set_df_property("is_stock_item", "read_only", 1);
      frm.set_df_property("is_fixed_asset", "read_only", 1);
    } else {
      frm.set_df_property("is_stock_item", "read_only", 0);
      frm.set_df_property("is_fixed_asset", "read_only", 0);
    }
  },

  school_fees_item(frm) {
    if (frm.doc.school_fees_item) {
      frm.set_value("is_stock_item", 0);
      frm.set_value("is_fixed_asset", 0);
      frm.set_df_property("is_stock_item", "read_only", 1);
      frm.set_df_property("is_fixed_asset", "read_only", 1);
    } else {
      frm.set_df_property("is_stock_item", "read_only", 0);
      frm.set_df_property("is_fixed_asset", "read_only", 0);
    }
  },

  is_stock_item(frm) {
    if (frm.doc.is_stock_item) {
      frm.set_value("school_fees_item", 0);
      frm.set_df_property("school_fees_item", "read_only", 1);
    } else {
      frm.set_df_property("school_fees_item", "read_only", 0);
    }
  },
});
