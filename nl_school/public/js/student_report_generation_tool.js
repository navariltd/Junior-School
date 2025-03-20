frappe.ui.form.on('Student Report Generation Tool', {
  onload: function (frm) {
    frm.set_query('academic_term', function () {
      return {
        filters: {
          academic_year: frm.doc.academic_year,
        },
      };
    });

    frm.set_query('assessment_group', function () {
      return {
        filters: {
          is_group: 1,
        },
      };
    });
  },

  refresh: function (frm) {
    // Disable Save to mimic standard print behavior
    // frm.disable_save();
    // frm.page.clear_indicator();

    // Add a new custom button without replacing existing ones
    frm.add_custom_button(__('Print Report Card'), () => {
      let doc = frm.doc;

      // Validation - Ensure all mandatory fields are filled
      if (
        !doc.student ||
        !doc.assessment_group ||
        !doc.program ||
        !doc.academic_year
      ) {
        frappe.throw(__('Please fill in all the mandatory fields.'));
      }

      // Open Report Card in a new tab
      let url =
        '/api/method/nl_school.junior_school_customization.controllers.student_report_generation_tool.preview_report_card';
      open_url_post(url, { doc: frm.doc }, true);
    });
  },
});
