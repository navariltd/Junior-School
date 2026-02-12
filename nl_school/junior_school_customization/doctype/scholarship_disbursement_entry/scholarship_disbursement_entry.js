// Copyright (c) 2026, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Scholarship Disbursement Entry", {
  setup: function (frm) {
    frm.events.setup_beneficiary_filter_group(frm);
  },
  refresh(frm) {
    frm.trigger("set_filters");

    if (frm.doc.docstatus == 0 && !frm.is_new()) {
      frm.trigger("render_custom_buttons");
    }
    if (frm.is_dirty()) {
      frm.page.set_primary_action(__("Save"), () => frm.save());
    } else {
      if (frm.doc.docstatus === 0) {
        if (!(frm.doc.beneficiaries || []).length && !frm.is_new()) {
          frm.page.set_primary_action(__("Get Beneficiaries"), function () {
            frm.events.get_beneficiary_details(frm);
          });
        }
      } else if (frm.doc.docstatus === 1) {
        if (!frm.doc.entries_created) {
          let label =
            frm.doc.allocation_type === "Cash"
              ? __("Create Payment Entries")
              : __("Create Stock Entries");
          frm.page.set_primary_action(label, () => {
            frm.events.process_disbursement(frm);
          });
        } else {
          frappe.call({
            method: "frappe.client.get_list",
            args: {
              doctype: "Sales Invoice",
              fields: ["name"],
              filters: {
                donation_disbursement_entry: frm.doc.name,
              },
            },
            callback: function (r) {
              if (r.message && r.message.length > 0) {
              } else {
                frm
                  .add_custom_button(__("Create Sales Invoice"), function () {
                    frm.events.create_sales_invoice(frm);
                  })
                  .addClass("btn-primary");
              }
            },
          });
        }
      }
    }
  },

  allocation_type: function (frm) {
    frm.trigger("set_filters");
    frm.clear_table("allocation_items");
    frm.refresh_field("allocation_items");
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

    frm.set_query("source_warehouse", () => {
      return {
        filters: {
          company: frm.doc.company,
          is_group: 0,
        },
      };
    });

    frm.set_query("item_code", "items", () => {
      return {
        filters: {
          is_stock_item: frm.doc.allocation_type === "Items" ? 1 : 0,
          is_fixed_asset: 0,
        },
      };
    });

    // let eligible_items = [];

    // if (
    //   frm.doc.allocation_type === "Cash" &&
    //   settings.school_fees_items.length
    // ) {
    //   settings.school_fees_items.forEach((item) => {
    //     eligible_items.push(item.item_code);
    //   });
    // }

    // if (
    //   frm.doc.allocation_type === "Items" &&
    //   settings.distribution_items.length
    // ) {
    //   settings.distribution_items.forEach((item) => {
    //     eligible_items.push(item.item_code);
    //   });
    // }

    // frm.set_query("item_code", "allocation_items", () => {
    //   return {
    //     filters: {
    //       item_code: ["in", eligible_items],
    //     },
    //   };
    // });
  },

  setup_beneficiary_filter_group(frm) {
    const filter_wrapper = frm.fields_dict.filter_list.$wrapper;
    filter_wrapper.empty();

    frappe.model.with_doctype("Beneficiary", () => {
      frm.filter_list = new frappe.ui.FilterGroup({
        parent: filter_wrapper,
        doctype: "Beneficiary",
        on_change: () => {
          frm.advanced_filters = frm.filter_list
            .get_filters()
            .filter(
              (item) =>
                item &&
                item.length >= 4 &&
                item[3] !== undefined &&
                item[3] !== null,
            );

          frm.set_value("saved_filters", JSON.stringify(frm.advanced_filters));
        },
      });

      if (frm.doc.saved_filters) {
        try {
          const saved = JSON.parse(frm.doc.saved_filters);

          if (Array.isArray(saved)) {
            frm.advanced_filters = saved;

            saved.forEach((f) => {
              if (Array.isArray(f) && f[3] !== undefined && f[3] !== null) {
                frm.filter_list.add_filter(...f);
              }
            });
          }
        } catch (e) {
          console.error("Failed to load saved filters:", e);
        }
      }
    });
  },

  get_beneficiary_details: function (frm) {
    return frappe.call({
      doc: frm.doc,
      args: {
        advanced_filters: frm.advanced_filters,
      },
      method: "get_beneficiaries",
      freeze: true,
      freeze_message: __("Fetching beneficiaries..."),
      callback: function (r) {
        if (r.message) {
          frm.clear_table("beneficiaries");
          const beneficiaries = r.message;
          const items = frm.doc.items || [];

          beneficiaries.forEach((ben) => {
            items.forEach((item_row) => {
              let child = frm.add_child("beneficiaries");

              child.beneficiary = ben.name;
              child.cohort = ben.cohort;
              child.scholar_status = ben.scholar_status;
              child.student_name = ben.student_name;
              child.company = ben.company || frm.doc.company;
              child.special_circumstance_of_residence =
                ben.special_circumstance_of_residence;
              child.class_at_onboarding = ben.class_at_onboarding;
              child.current_class = ben.current_class;
              child.enrolled_at_onboarding = ben.enrolled_at_onboarding;
              child.promotion_rule = ben.promotion_rule;
              child.official_school_name = ben.official_school_name;
              child.county_of_school = ben.county_of_school;
              child.day_or_boarding = ben.day_or_boarding;
              child.public_or_private = ben.public_or_private;
              child.item_code = item_row.item_code;
              child.uom = item_row.uom;
              child.recommender_name = ben.recommender_name;
              child.recommender_department = ben.recommender_department;
              child.recommender_contact = ben.recommender_contact;
              child.reason_for_recommending = ben.reason_for_recommending;
              child.county = ben.county;
              child.county_abbreviation = ben.county_abbreviation;
              child.sub_county = ben.sub_county;
              child.ward = ben.ward;
              child.guardian_name = ben.guardian_name;
              child.guardian_contact = ben.guardian_contact;
              child.relationship_to_student = ben.relationship_to_student;
            });
          });

          frm.refresh_field("beneficiaries");
          frm.scroll_to_field("beneficiaries");
        }
      },
    });
  },

  render_custom_buttons: function (frm) {
    const grid_wrapper = frm.get_field("beneficiaries").$wrapper;

    grid_wrapper.find(".custom-table-actions").remove();

    const $btn_container = $(`
		<div class="custom-table-actions" style="margin-bottom:10px;display:flex;gap:10px;">
			<button type="button" class="btn btn-primary btn-sm btn-download-template">
				<i class="fa fa-download"></i> ${__("Download Template")}
			</button>
			<button type="button" class="btn btn-primary btn-sm btn-upload-list">
				<i class="fa fa-upload"></i> ${__("Upload List")}
			</button>
		</div>
	`).prependTo(grid_wrapper);

    $btn_container
      .find(".btn-download-template")
      .off("click")
      .on("click", () => frm.trigger("download_template_dialog"));

    $btn_container
      .find(".btn-upload-list")
      .off("click")
      .on("click", () => frm.trigger("upload_list"));
  },

  download_template_dialog: function (frm) {
    const d = new frappe.ui.Dialog({
      title: __("Select Template Format"),
      fields: [
        {
          label: __("Format"),
          fieldname: "format",
          fieldtype: "Select",
          options: ["CSV", "Excel"],
          default: "Excel",
        },
      ],
      primary_action_label: __("Download"),
      primary_action(values) {
        frm.events.download_beneficiary_template(
          frm,
          values.format.toLowerCase(),
        );
        d.hide();
      },
    });
    d.show();
  },

  download_beneficiary_template: function (frm, type) {
    frm.call({
      method: "download_beneficiary_template",
      doc: frm.doc,
      args: { file_type: type || "csv" },
      freeze: true,
      freeze_message: __("Generating Template..."),
      callback: function (r) {
        if (r.message) {
          const link = document.createElement("a");
          link.href = r.message;
          link.download = "";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          frappe.msgprint(__("Failed to generate template."));
        }
      },
      error: function (err) {
        frappe.msgprint(__("Failed to generate template."));
        console.error(err);
      },
    });
  },

  upload_list: function (frm) {
    new frappe.ui.FileUploader({
      allow_multiple: false,
      on_success: (file) => {
        frm.call({
          method: "upload_beneficiaries",
          doc: frm.doc,
          args: { file_url: file.file_url },
          freeze: true,
          freeze_message: __("Processing file..."),
          callback: function (r) {
            if (r.message.mapped_items.length) {
              frm.clear_table("beneficiaries");
              r.message.mapped_items.forEach((d) => {
                let row = frm.add_child("beneficiaries");
                Object.assign(row, d);
              });
              frm.refresh_field("beneficiaries");
            }
          },
        });
      },
      restrictions: { allowed_file_types: [".csv", ".xlsx", ".xls"] },
    });
  },
});

frappe.ui.form.on("Scholarship Disbursement Entry Item", {
  //   rate: function (frm, cdt, cdn) {
  //     let row = locals[cdt][cdn];
  //     const amount = row.rate * row.qty;
  //     frappe.model.set_value(cdt, cdn, "amount", amount);
  //   },

  //   qty: function (frm, cdt, cdn) {
  //     let row = locals[cdt][cdn];
  //     const amount = row.rate * row.qty;
  //     frappe.model.set_value(cdt, cdn, "amount", amount);
  //   },

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
          frappe.model.set_value(cdt, cdn, "uom", item.stock_uom);
        }
      },
    });
  },
});
