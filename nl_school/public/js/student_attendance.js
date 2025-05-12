frappe.ui.form.on("Student Attendance", {
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
    }
  },
});
