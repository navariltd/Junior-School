import frappe


def get_overlap_for_(doc, doctype, fieldname, value=None):
    """Returns overlapping document for specified field, within the same company."""

    existing = frappe.db.sql(
        """select name, from_time, to_time from `tab{0}`
		where `{1}`=%(val)s
		and schedule_date = %(schedule_date)s
		and company = %(company)s  -- 🟢 Only check within same school/company
		and (
			(from_time > %(from_time)s and from_time < %(to_time)s) or
			(to_time > %(from_time)s and to_time < %(to_time)s) or
			(%(from_time)s > from_time and %(from_time)s < to_time) or
			(%(from_time)s = from_time and %(to_time)s = to_time)
		)
		and name != %(name)s
		and docstatus != 2""".format(doctype, fieldname),
        {
            "schedule_date": doc.schedule_date,
            "company": doc.company,
            "val": value or doc.get(fieldname),
            "from_time": doc.from_time,
            "to_time": doc.to_time,
            "name": doc.name or "No Name",
        },
        as_dict=True,
    )

    return existing[0] if existing else None
