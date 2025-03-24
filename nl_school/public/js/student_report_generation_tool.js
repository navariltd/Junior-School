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
              is_group: ['in', [0, 1]]
          }
      };
  });
  
  },

  refresh: function (frm) {
 

    frm.add_custom_button(__('Print Report Card'), () => {
      let doc = frm.doc;

      if (
        !doc.student ||
        !doc.assessment_group ||
        !doc.program ||
        !doc.academic_year
      ) {
        frappe.throw(__('Please fill in all the mandatory fields.'));
      }

      let url =
        '/api/method/nl_school.junior_school_customization.controllers.student_report_generation_tool.preview_report_card';
      open_url_post(url, { doc: frm.doc }, true);
    });
  },
});
