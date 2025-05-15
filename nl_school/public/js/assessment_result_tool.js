frappe.ui.form.on("Assessment Result Tool", {
  onload: function (frm) {
    frm.set_query("assessment_plan", function () {
      return {
        filters: {
          status: "Open",
        },
      };
    });
  },
});
