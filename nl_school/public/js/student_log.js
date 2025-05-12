frappe.ui.form.on("Student Log", {
  company: function (frm) {
    if (frm.doc.company) {
      frm.set_query("student", function () {
        return {
          filters: {
            company: frm.doc.company,
          },
        };
      });
    }
  },
});
