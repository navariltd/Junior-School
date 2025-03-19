
frappe.ui.form.on('Student Report Generation Tool', {
    onload: function (frm) {
      frm.set_query('academic_term', function () {
        return {
          filters: {
            academic_year: frm.doc.academic_year,
          },
        }
      })
      frm.set_query('assessment_group', function () {
        return {
          filters: {
            is_group: 1,
          },
        }
      })
    },
  
    refresh: function (frm) {
     
        frm.add_custom_button(__('View Report Card'), function() {
            
        });
    }
})