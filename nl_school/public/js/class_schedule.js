frappe.ui.form.on("Course Schedule", {
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
    } else {
      frm.set_query("student_group", function () {
        return {
          filters: {},
        };
      });

      frm.set_query("room", function () {
        return {
          filters: {},
        };
      });
    }
  },
});
