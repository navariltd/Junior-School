frappe.ui.form.on("Student Group", {
  refresh: function (frm) {
    frm.set_df_property("get_students", "hidden", 1);

    if (!frm.doc.__islocal) {
      frm.add_custom_button(__("Get Students"), function () {
        if (
          frm.doc.group_based_on == "Batch" ||
          frm.doc.group_based_on == "Course"
        ) {
          var student_list = [];
          var max_roll_no = 0;
          $.each(frm.doc.students, function (_i, d) {
            student_list.push(d.student);
            if (d.group_roll_number > max_roll_no) {
              max_roll_no = d.group_roll_number;
            }
          });

          if (frm.doc.academic_year) {
            frappe.call({
              method:
                "nl_school.junior_school_customization.utils.get_students",
              args: {
                academic_year: frm.doc.academic_year,
                academic_term: frm.doc.academic_term,
                group_based_on: frm.doc.group_based_on,
                student_group: frm.doc.name,
                company: frm.doc.company,
                program: frm.doc.program,
                batch: frm.doc.batch,
                student_category: frm.doc.student_category,
                course: frm.doc.course,
              },
              callback: function (r) {
                if (r.message) {
                  $.each(r.message, function (i, d) {
                    if (!in_list(student_list, d.student)) {
                      var s = frm.add_child("students");
                      s.student = d.student;
                      s.student_name = d.student_name;
                      if (d.active === 0) {
                        s.active = 0;
                      }
                      s.group_roll_number = ++max_roll_no;
                    }
                  });
                  refresh_field("students");
                  frm.save();
                } else {
                  frappe.msgprint(__("Student Group is already updated."));
                }
              },
            });
          }
        } else {
          frappe.msgprint(
            __("Select students manually for the Activity based Group"),
          );
        }
      });
    }
  },
});
