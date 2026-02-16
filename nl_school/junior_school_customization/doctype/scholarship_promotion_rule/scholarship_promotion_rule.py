# Copyright (c) 2026, Navari Limited and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

from frappe.utils import today


class ScholarshipPromotionRule(Document):
    def before_save(self):
        if any(d.status == self.final_status for d in self.eligible_statuses):
            frappe.throw(
                f"Final Status '{self.final_status}' cannot be in Eligible Statuses."
            )

        if len([d.is_final for d in self.class_progression if d.is_final]) > 1:
            frappe.throw("Only one Class Progression can be marked as Final.")

        if not any(d.is_final for d in self.class_progression):
            frappe.throw("At least one Class Progression must be marked as Final.")

    def promote_students(self):
        """Promote all eligible students based on the promotion rule"""

        eligible_statuses = [row.status for row in self.eligible_statuses]

        # Build progression map
        progression_map = {}
        final_classes = []
        for progression in self.class_progression:
            if progression.is_final:
                final_classes.append(progression.current_class)
            else:
                progression_map[progression.current_class] = progression.next_class

        scholars = frappe.get_all(
            "Scholar",
            filters={
                "promotion_rule": self.name,
                "status": ["in", eligible_statuses],
            },
            fields=["name", "student_name", "current_form", "status"],
        )
        for scholar in scholars:
            try:
                # Check if scholar is in final class
                if scholar.current_form in final_classes:
                    # Convert to alumni
                    self.convert_to_alumni(
                        scholar.name, scholar.current_form, scholar.status
                    )

                # Check if promotion is defined
                elif scholar.current_form in progression_map:
                    next_class = progression_map[scholar.current_form]
                    self.promote_student(
                        scholar.name,
                        scholar.current_form,
                        next_class,
                        scholar.status,
                    )

            except Exception as e:
                frappe.log_error(
                    f"Promotion Error for {scholar.name}: {e}",
                    "Scholarship Promotion Rule",
                )

    def promote_student(self, scholar_id, from_class, next_class, current_status):
        scholar = frappe.get_doc("Scholar", scholar_id)

        # Create progression log
        self.create_progression_log(
            scholar_id,
            scholar.student_name,
            from_class,
            next_class,
            "Automatic",
            current_status,
        )

        scholar.current_form = next_class
        scholar.save(ignore_permissions=True)

    def convert_to_alumni(self, scholar_id, from_class, current_status):
        scholar = frappe.get_doc("Scholar", scholar_id)

        # Create progression log
        self.create_progression_log(
            scholar_id,
            scholar.student_name,
            from_class,
            self.final_status,
            "Converted to Alumni",
            current_status,
        )
        scholar.current_form = self.final_status
        scholar.status = self.final_status
        scholar.save(ignore_permissions=True)

        # TODO: Optionally create Alumni record

    def create_progression_log(
        self, scholar_id, student_name, from_class, to_class, promotion_type, status
    ):
        log = frappe.get_doc(
            {
                "doctype": "Scholar Progression Log",
                "scholar": scholar_id,
                "student_name": student_name,
                "promotion_rule": self.name,
                "from_class": from_class,
                "to_class": to_class,
                "promotion_type": promotion_type,
                "promotion_date": today(),
                "status": status,
            }
        )

        log.save(ignore_permissions=True)
        log.submit()
        frappe.db.commit()

        return log.name


def auto_promote_students_yearly():
    promotion_rules = frappe.get_all(
        "Scholarship Promotion Rule",
        fields=["name"],
    )

    for rule in promotion_rules:
        rule_doc = frappe.get_doc("Scholarship Promotion Rule", rule.name)
        rule_doc.promote_students()
