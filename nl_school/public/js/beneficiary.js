frappe.ui.form.on("Beneficiary", {
  refresh: (frm) => {
    frm.trigger("set_sub_county_filters");
    frm.trigger("set_ward_filters");

    if (frm.doc.is_scholar === "Yes" && frm.doc.official_school_name) {
      frm.set_df_property("official_school_name", "read_only", 1);
    }

    if (frm.doc.is_scholar === "Yes") {
      if (!frm.is_new()) {
        frm.add_custom_button(
          __("Transfer Student"),
          function () {
            create_transfer_dialog(frm);
          },
          __("Actions"),
        );
      }
    }
  },
  is_scholar: (frm) => {
    if (frm.doc.is_scholar === "No") {
      frm.remove_custom_button(__("Transfer Student"), __("Actions"));
    } else {
      frm.add_custom_button(
        __("Transfer Student"),
        function () {
          create_transfer_dialog(frm);
        },
        __("Actions"),
      );
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

function create_transfer_dialog(frm) {
  let d = new frappe.ui.Dialog({
    title: __("Transfer Student"),
    fields: [
      {
        fieldname: "to_school",
        fieldtype: "Link",
        label: __("To School"),
        options: "Supplier",
        filters: {
          name: ["!=", frm.doc.official_school_name],
        },
        reqd: 1,
      },
      {
        fieldname: "transfer_date",
        fieldtype: "Date",
        label: __("Transfer Date"),
        default: frappe.datetime.get_today(),
        reqd: 1,
      },

      {
        fieldname: "to_class",
        fieldtype: "Data",
        label: __("To Class"),
        default: frm.doc.current_class,
        reqd: 1,
      },
      {
        fieldname: "transfer_reason",
        fieldtype: "Small Text",
        label: __("Transfer Reason (Optional)"),
      },
    ],
    primary_action_label: __("Create Transfer"),
    primary_action: function (values) {
      frappe.call({
        method: "frappe.client.insert",
        args: {
          doc: {
            doctype: "Beneficiary Transfer",
            beneficiary: frm.doc.name,
            student_name: frm.doc.student_name,
            from_school: frm.doc.official_school_name,
            from_class: frm.doc.current_class,
            to_school: values.to_school,
            to_class: values.to_class,
            transfer_date: values.transfer_date,
            transfer_reason: values.transfer_reason,
          },
        },
        callback: function (r) {
          if (r.message) {
            frappe.msgprint(
              __(
                "Transfer created. Please submit it to complete the transfer.",
              ),
            );
            frappe.set_route("Form", "Beneficiary Transfer", r.message.name);
            d.hide();
          }
        },
      });
    },
  });

  d.show();
}
