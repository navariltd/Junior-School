// // Copyright (c) 2026, Navari and contributors
// // For license information, please see license.txt

frappe.ui.form.on("Assessment Plan Tool", {
  refresh(frm) {
    if (frm.doc.company) {
      frm.trigger("set_common_filters");
    }

    frm.set_query("grading_scale", "assessment_plan_details", function () {
      return {
        filters: { docstatus: 1 },
      };
    });

    frm.set_query("assessment_group", "assessment_plan_details", function () {
      return {
        filters: { is_group: 0 },
      };
    });

    if (frm.doc.academic_year) {
      frm.set_query("academic_term", function () {
        return {
          filters: {
            academic_year: frm.doc.academic_year,
          },
        };
      });
    }

    frm.add_custom_button(__("Auto-populate from Student Groups"), function () {
      populate_from_student_groups(frm);
    });

    if (
      !frm.is_dirty() &&
      frm.doc.company &&
      frm.doc.academic_year &&
      frm.doc.academic_term &&
      frm.doc.schedule_date &&
      frm.doc.assessment_plan_details
    ) {
      frm
        .add_custom_button(__("Create Assessment Plans"), function () {
          frappe.confirm(
            __(
              "Are you sure you want to create assessment plans for all entries?",
            ),
            function () {
              frappe.call({
                method:
                  "nl_school.junior_school_customization.doctype.assessment_plan_tool.assessment_plan_tool.create_assessment_plans",
                args: {
                  doc_name: frm.doc.name,
                },
                callback: function (r) {
                  frm.reload_doc();
                },
                freeze: true,
                freeze_message: __("Creating assessment plans..."),
              });
            },
          );
        })
        .addClass("btn-primary");
    }
  },

  academic_year(frm) {
    frm.set_value("academic_term", null);

    if (frm.doc.academic_year) {
      frm.set_query("academic_term", function () {
        return {
          filters: {
            academic_year: frm.doc.academic_year,
          },
        };
      });
    }
  },

  company(frm) {
    if (frm.doc.company) {
      frm.trigger("set_common_filters");
    }
  },

  assessment_plan_details_add(frm, cdt, cdn) {
    if (frm.doc.schedule_date) {
      frappe.model.set_value(cdt, cdn, "schedule_date", frm.doc.schedule_date);
    }
  },

  set_common_filters(frm) {
    const fields = ["student_group", "room", "examiner", "supervisor"];

    fields.forEach((field) => {
      frm.set_query(field, "assessment_plan_details", function () {
        return {
          filters: {
            company: frm.doc.company,
          },
        };
      });
    });
  },
});

frappe.ui.form.on("Assessment Plan Detail", {
  course(frm, cdt, cdn) {
    const row = locals[cdt][cdn];

    if (!row.program) {
      frappe.throw(__("Please select Program before selecting Course"));
    }
  },

  program(frm, cdt, cdn) {
    frm.fields_dict.assessment_plan_details.grid.get_field(
      "student_group",
    ).get_query = function (doc, cdt, cdn) {
      const row = locals[cdt][cdn];
      if (!row.program) return;
      return {
        filters: {
          program: row.program,
        },
      };
    };

    frm.fields_dict.assessment_plan_details.grid.get_field("course").get_query =
      function (doc, cdt, cdn) {
        const row = locals[cdt][cdn];
        if (!row.program) return;
        return {
          filters: {
            custom_class: row.program,
          },
        };
      };
  },
});

function populate_from_student_groups(frm) {
  if (!frm.doc.academic_year || !frm.doc.academic_term || !frm.doc.company) {
    frappe.msgprint(
      __("Please select Academic Year, Academic Term and Company first"),
    );
    return;
  }

  frappe.call({
    method:
      "nl_school.junior_school_customization.doctype.assessment_plan_tool.assessment_plan_tool.get_student_groups_for_term",
    args: {
      academic_year: frm.doc.academic_year,
      academic_term: frm.doc.academic_term,
      company: frm.doc.company,
    },
    callback: function (r) {
      if (r.message && r.message.length > 0) {
        show_student_group_selection_dialog(frm, r.message);
      } else {
        frappe.msgprint(
          __("No active student groups found for the selected term"),
        );
      }
    },
  });
}

function show_student_group_selection_dialog(frm, student_groups) {
  let d = new frappe.ui.Dialog({
    title: __("Select Student Groups"),
    fields: [
      {
        fieldname: "student_groups",
        fieldtype: "MultiSelectList",
        label: __("Student Groups"),
        reqd: 1,
        get_data: function () {
          return student_groups.map((sg) => ({
            value: sg.name,
            description: sg.student_group_name,
          }));
        },
      },
    ],
    primary_action_label: __("Add Selected"),
    primary_action: function (values) {
      frappe.call({
        method:
          "nl_school.junior_school_customization.doctype.assessment_plan_tool.assessment_plan_tool.populate_from_student_groups",
        args: {
          student_groups: values.student_groups,
        },
        callback: function (r) {
          if (r.message) {
            frm.clear_table("assessment_plan_details");
            r.message.forEach((course_data) => {
              let row = frm.add_child("assessment_plan_details");
              row.program = course_data.program;
              row.student_group = course_data.student_group;
              row.course = course_data.course;
            });
            frm.refresh_field("assessment_plan_details");
          }
        },
      });

      d.hide();
    },
  });
  d.show();
}
