// Copyright (c) 2026, Navari and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Junior School Settings", {
//   refresh(frm) {
//     frm.set_query("item_code", "school_fees_items", () => {
//       return {
//         filters: {
//           is_stock_item: 0,
//           is_fixed_asset: 0,
//         },
//       };
//     });

//     frm.set_query("item_code", "distribution_items", () => {
//       return {
//         filters: {
//           is_stock_item: 1,
//           is_fixed_asset: 0,
//         },
//       };
//     });

//     frm.set_query("default_expense_account", () => {
//       return {
//         filters: {
//           root_type: "Expense",
//           company: frm.doc.company,
//           is_group: 0,
//         },
//       };
//     });
//   },

//   company(frm) {
//     frm.set_value("default_expense_account", "");
//     frm.refresh_field("default_expense_account");
//   },
// });
