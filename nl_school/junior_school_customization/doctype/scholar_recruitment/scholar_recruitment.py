# Copyright (c) 2026, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

from frappe.utils import nowdate


class ScholarRecruitment(Document):
    def on_submit(self):
        if self.docstatus == 1:
            scholar = frappe.get_doc(
                {
                    "doctype": "Scholar",
                    "student_name": self.student_name,
                    "company": self.company,
                    "circumstance_of_residence": self.circumstance_of_residence,
                    "donor": self.donor,
                    "status": self.status,
                    "date_of_onboarding": nowdate(),
                    "county": self.county,
                    "county_abbreviation": self.county_abbreviation,
                    "sub_county": self.sub_county,
                    "ward": self.ward,
                    "class_at_onboarding": self.current_class,
                    "current_class": self.current_class,
                    "currently_enrolled": self.currently_enrolled,
                    "promotion_rule": self.promotion_rule,
                    "official_school_name": self.official_school_name,
                    "county_of_school": self.county_of_school,
                    "cohort": self.cohort,
                    "public_or_private": self.public_or_private,
                    "day_or_boarding": self.day_or_boarding,
                    "recommender_name": self.recommender_name,
                    "recommender_department": self.recommender_department,
                    "recommender_contact": self.recommender_contact,
                    "reason_for_recommending": self.reason_for_recommending,
                    "guardian_name": self.guardian_name,
                    "guardian_contact": self.guardian_contact,
                    "relationship_to_student": self.relationship_to_student,
                    "scholar_recruitment": self.name,
                }
            )
            scholar.insert(ignore_permissions=True)
