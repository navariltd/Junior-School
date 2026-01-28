// Copyright (c) 2026, Navari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Beneficiary Transfer", {
  setup: function (frm) {
    frm.set_query("beneficiary", function () {
      return {
        filters: {
          is_scholar: "Yes",
          status: ["!=", "Alumni"],
        },
      };
    });
  },

  onload: function (frm) {
    if (frm.doc.__islocal && !frm.doc.amended_from) {
      frm.trigger("clear_property_table");
    }
  },

  beneficiary: function (frm) {
    frm.trigger("clear_property_table");
  },

  clear_property_table: function (frm) {
    frm.clear_table("transfer_details");
    frm.refresh_field("transfer_details");
    frm.fields_dict["transfer_details"].find(".grid-add-row").hide();
  },

  refresh: function (frm) {
    frm.fields_dict["transfer_details"].grid.wrapper
      .find(".grid-add-row")
      .hide();
    frm.events.setup_beneficiary_property_button(frm, "transfer_details");
  },

  setup_beneficiary_property_button: function (frm, table) {
    frm.fields_dict[table].grid.add_custom_button(
      "Add Beneficiary Property",
      () => {
        if (!frm.doc.beneficiary) {
          frappe.msgprint("Please select a Beneficiary first.");
          return;
        }

        const allowed_fields = [];

        const fields_to_consider = [
          "current_class",
          // "special_circumstance_of_residence",
          "promotion_rule",
          "official_school_name",
          "county_of_school",
          "day_or_boarding",
          "recommender",
          "reason_for_recommending",
          "guardian_name",
          "guardian_contact",
          "relationship_to_student",
          "status",
        ];

        const exclude_field_types = [
          "HTML",
          "Section Break",
          "Column Break",
          "Button",
          "Read Only",
          "Tab Break",
          "Table",
        ];

        frappe.model.with_doctype("Beneficiary", () => {
          const field_label_map = {};
          frappe.get_meta("Beneficiary").fields.forEach((d) => {
            field_label_map[d.fieldname] =
              __(d.label, null, d.parent) + ` (${d.fieldname})`;

            if (
              fields_to_consider.includes(d.fieldname) &&
              !exclude_field_types.includes(d.fieldtype) &&
              !d.hidden &&
              !d.read_only
            ) {
              allowed_fields.push({
                label: field_label_map[d.fieldname],
                value: d.fieldname,
              });
            }
          });

          show_dialog(frm, table, allowed_fields);
        });
      },
    );
  },
});

var show_dialog = function (frm, table, field_labels) {
  console.log(field_labels);
  var d = new frappe.ui.Dialog({
    title: "Update Property",
    fields: [
      {
        fieldname: "property",
        label: __("Select Property"),
        fieldtype: "Autocomplete",
        options: field_labels,
      },
      {
        fieldname: "current",
        fieldtype: "Data",
        label: __("Current"),
        read_only: true,
      },
      {
        fieldname: "new_value",
        fieldtype: "Data",
        label: __("New"),
      },
    ],
    primary_action_label: __("Add to Details"),
    primary_action: () => {
      d.get_primary_btn().attr("disabled", "true");
      if (d.data) {
        d.data.new = d.get_values().new_value;
        add_to_details(frm, d, table);
      }
    },
  });

  d.fields_dict["property"].df.onchange = () => {
    let property = d.get_values().property;
    d.data.fieldname = property;
    if (!property) return;

    frappe.call({
      method: "nl_school.utils.get_beneficiary_field_property",
      args: { beneficiary: frm.doc.beneficiary, fieldname: property },
      callback: function (r) {
        console.log("RESPONSE", r);
        if (r.message) {
          d.data.current = r.message.value;
          d.data.property = r.message.label;

          d.set_value("current", r.message.value);
          render_dynamic_field(
            d,
            r.message.datatype,
            r.message.options,
            property,
          );
          d.get_primary_btn().attr("disabled", false);
        }
      },
    });
  };

  d.get_primary_btn().attr("disabled", true);
  d.data = {};
  d.show();
};

var render_dynamic_field = function (d, fieldtype, options, fieldname) {
  d.data.new = null;
  var dynamic_field = frappe.ui.form.make_control({
    df: {
      fieldtype: fieldtype,
      fieldname: fieldname,
      options: options || "",
      label: __("New"),
    },
    parent: d.fields_dict.new_value.wrapper,
    only_input: false,
  });
  dynamic_field.make_input();
  d.replace_field("new_value", dynamic_field.df);
};

var add_to_details = function (frm, d, table) {
  let data = d.data;
  if (data.fieldname) {
    if (validate_duplicate(frm, table, data.fieldname)) {
      frappe.show_alert({
        message: __("Property already added"),
        indicator: "orange",
      });
      return false;
    }
    if (data.current == data.new) {
      frappe.show_alert({
        message: __("Nothing to change"),
        indicator: "orange",
      });
      d.get_primary_btn().attr("disabled", false);
      return false;
    }
    frm.add_child(table, {
      fieldname: data.fieldname,
      property: data.property,
      current: data.current,
      new: data.new,
    });
    frm.refresh_field(table);

    frm.fields_dict[table].grid.wrapper.find(".grid-add-row").hide();

    d.fields_dict.new_value.$wrapper.html("");
    d.set_value("property", "");
    d.set_value("current", "");
    frappe.show_alert({ message: __("Added to details"), indicator: "green" });
    d.data = {};
  } else {
    frappe.show_alert({ message: __("Value missing"), indicator: "red" });
  }
};

var validate_duplicate = function (frm, table, fieldname) {
  let duplicate = false;
  $.each(frm.doc[table], function (i, detail) {
    if (detail.fieldname === fieldname) {
      duplicate = true;
      return;
    }
  });
  return duplicate;
};
