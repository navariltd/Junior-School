frappe.ui.form.on("Assessment Result", {
  company: function (frm) {
    if (frm.doc.company) {
      frm.set_query("student_group", function () {
        return {
          filters: {
            company: frm.doc.company,
          },
        };
      });

      frm.set_query("student", function () {
        return {
          filters: {
            company: frm.doc.company,
          },
        };
      });

      frm.set_query("assessment_plan", function () {
        return {
          filters: {
            company: frm.doc.company,
          },
        };
      });
    }
  },
});
