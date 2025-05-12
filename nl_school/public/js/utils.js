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
    } else {
      frm.set_query("student_group", function () {
        return {
          filters: {},
        };
      });
    }
  },
});

frappe.ui.form.on("Room", {
  company: function (frm) {
    if (frm.doc.company) {
      frm.set_query("student_group", function () {
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
    }
  },
});
