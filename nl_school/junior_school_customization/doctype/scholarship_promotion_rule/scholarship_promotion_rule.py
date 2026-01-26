# Copyright (c) 2026, Navari Limited and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


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

        beneficiaries = frappe.get_all(
            "Beneficiary",
            filters={
                "promotion_rule": self.name,
                "status": ["in", eligible_statuses],
            },
            fields=["name", "student_name", "current_form", "status"],
        )
        for beneficiary in beneficiaries:
            try:
                # Check if beneficiary is in final class
                if beneficiary.current_form in final_classes:
                    # Convert to alumni
                    self.convert_to_alumni(beneficiary.name)

                # Check if promotion is defined
                elif beneficiary.current_form in progression_map:
                    next_class = progression_map[beneficiary.current_form]
                    self.promote_student(beneficiary.name, next_class)

                else:
                    pass
            except Exception as e:
                frappe.log_error(
                    f"Promotion Error for {beneficiary.name}: {e}",
                    "Scholarship Promotion Rule",
                )

    def promote_student(self, beneficiary_id, next_class):
        beneficiary = frappe.get_doc("Beneficiary", beneficiary_id)
        beneficiary.current_form = next_class
        beneficiary.save(ignore_permissions=True)

    def convert_to_alumni(self, beneficiary_id):
        beneficiary = frappe.get_doc("Beneficiary", beneficiary_id)
        beneficiary.current_form = self.final_status
        beneficiary.status = self.final_status
        beneficiary.save(ignore_permissions=True)

        # TODO: Optionally create Alumni record


def auto_promote_students_yearly():
    promotion_rules = frappe.get_all(
        "Scholarship Promotion Rule",
        fields=["name"],
    )

    for rule in promotion_rules:
        rule_doc = frappe.get_doc("Scholarship Promotion Rule", rule.name)
        rule_doc.promote_students()
