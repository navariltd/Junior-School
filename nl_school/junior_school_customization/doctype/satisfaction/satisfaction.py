# Copyright (c) 2025, Navari and contributors
# For license information, please see license.txt

from frappe.model.document import Document


class Satisfaction(Document):
    def before_save(self):
        self.get_average()

    def get_average(self):
        scores = []

        for row in self.satisfaction_scores:
            if row.score is not None:
                scores.append(row.score)

        if scores:
            average = sum(scores) / len(scores)
            self.avg_score = average
        else:
            self.avg_score = 0
