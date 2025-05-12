frappe.ui.form.on("Program Enrollment", {
  company: function (frm) {
    if (frm.doc.company) {
      frm.set_query("student", function () {
        return {
          filters: {
            company: frm.doc.company,
          },
        };
      });

      frm.set_query("custom_stream", function () {
        return {
          filters: {
            company: frm.doc.company,
          },
        };
      });
    }
  },
});
