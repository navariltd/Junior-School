frappe.ui.form.on("Assessment Plan", {
  company: function (frm) {
    if (frm.doc.company) {
      frm.set_query("student_group", function () {
        return {
          filters: {
            company: frm.doc.company,
          },
        };
      });

      frm.set_query("room", function () {
        return {
          filters: {
            company: frm.doc.company,
          },
        };
      });

      frm.set_query("examiner", function () {
        return {
          filters: {
            company: frm.doc.company,
          },
        };
      });
    }
  },
});
