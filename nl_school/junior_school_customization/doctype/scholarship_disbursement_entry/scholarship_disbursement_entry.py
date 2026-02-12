# Copyright (c) 2026, Navari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils.xlsxutils import make_xlsx
from frappe import _
from frappe.utils import flt
from ....utils import extract_data_from_file, get_doctype_headers

import csv
from io import StringIO


class ScholarshipDisbursementEntry(Document):
    @frappe.whitelist()
    def get_beneficiaries(self, advanced_filters=None):
        beneficiaries = frappe.get_list(
            "Beneficiary",
            filters=self.get_filters() + (advanced_filters or []),
            fields=[
                "*",
            ],
        )

        return beneficiaries

    def before_submit(self):
        for idx, row in enumerate(self.beneficiaries):
            if row.rate < 1:
                frappe.throw(
                    _("Please set rate for beneficiary {0} in row {1}").format(
                        row.beneficiary, idx + 1
                    )
                )

            if not row.item_code:
                frappe.throw("Please set Item for beneficiary {0} in row {1}").format(
                    row.beneficiary, idx + 1
                )

            if not row.official_school_name:
                frappe.throw(
                    "Please set Official School Name for beneficiary {0} in row {1}"
                ).format(row.beneficiary, idx + 1)

    def on_submit(self):
        if self.allocation_type == "Cash":
            self.create_purchase_invoice()
        else:
            self.create_stock_entry()

    def create_purchase_invoice(self):
        expense_account = frappe.db.get_value(
            "Company", self.company, "default_expense_account"
        )

        if not expense_account:
            frappe.throw(
                _(
                    "Please set the Default Expense Account in Company {0} to create Purchase Invoice"
                ).format(self.company)
            )

        for beneficiary in self.beneficiaries:
            items = [
                {
                    "item_name": beneficiary.item_code,
                    "qty": beneficiary.qty,
                    "rate": beneficiary.rate,
                    "amount": flt(beneficiary.qty) * flt(beneficiary.rate),
                    "beneficiary": beneficiary.beneficiary,
                    "academic_year": self.academic_year,
                    "academic_term": self.academic_term,
                    "expense_account": expense_account,
                }
            ]
            pi = frappe.get_doc(
                {
                    "doctype": "Purchase Invoice",
                    "supplier": beneficiary.official_school_name,
                    "company": self.company,
                    "posting_date": frappe.utils.nowdate(),
                    "due_date": frappe.utils.nowdate(),
                    "beneficiary": beneficiary.beneficiary,
                    "academic_year": self.academic_year,
                    "academic_term": self.academic_term,
                    "items": items,
                }
            )
            pi.insert(ignore_permissions=True)
            # pi.submit()
            # pi.db_set("student_beneficiary_scholarship_allocation", self.name)

    def get_filters(self):
        filter_fields = ["county", "official_school_name", "company", "cohort"]

        eligible_statuses = frappe.get_doc(
            "Junior School Settings", "Junior School Settings"
        ).eligible_statuses

        filters = [["status", "in", [x.status for x in eligible_statuses]]]

        for field in filter_fields:
            if self.get(field):
                filters.append([field, "=", self.get(field)])

        return filters

    @frappe.whitelist()
    def download_beneficiary_template(self, file_type="csv"):
        headers = get_doctype_headers("Scholarship Disbursement Entry Party")

        sample_rows = []
        for row in (self.beneficiaries or [])[:5]:
            sample_rows.append([getattr(row, h, "") or "" for h in headers])

        if not sample_rows:
            sample_rows = [["" for _ in headers] for _ in range(5)]

        if file_type.lower() == "csv":
            output = StringIO()
            writer = csv.writer(output)
            writer.writerow(headers)
            writer.writerows(sample_rows)
            filedata = output.getvalue().encode("utf-8")
            filename = "scholarship_disbursement_template.csv"

        elif file_type.lower() in ["xlsx", "excel"]:
            data = [headers] + sample_rows
            xlsx_file = make_xlsx(data, sheet_name="Beneficiaries")
            filedata = xlsx_file.getvalue()
            filename = "scholarship_disbursement_template.xlsx"

        else:
            frappe.throw(_("Invalid file type. Only CSV or Excel supported"))

        file_doc = frappe.get_doc(
            {
                "doctype": "File",
                "file_name": filename,
                "content": filedata,
                "is_private": 0,
            }
        )
        file_doc.insert(ignore_permissions=True)
        return file_doc.file_url

    @frappe.whitelist()
    def upload_beneficiaries(self, file_url):
        headers = get_doctype_headers("Scholarship Disbursement Entry Party")
        rows = extract_data_from_file(file_url)

        rows_to_upload = [r for r in rows if not r.get("beneficiary")]

        upload_results = {"beneficiaries": [], "errors": []}
        if rows_to_upload:
            upload_results = upload_beneficiary_list(file_url)

        mapped_rows = []

        for idx, row in enumerate(rows):
            beneficiary_id = row.get("beneficiary")

            if not beneficiary_id and idx < len(
                upload_results.get("beneficiaries", [])
            ):
                beneficiary_id = upload_results["beneficiaries"][idx]

            mapped_row = {}
            for header in headers:
                mapped_row[header] = row.get(header, "")

            mapped_row["beneficiary"] = beneficiary_id
            mapped_rows.append(mapped_row)

        return {"mapped_items": mapped_rows, "errors": upload_results.get("errors", [])}


def upload_beneficiary_list(file_url):
    """Upload and process beneficiary list from file"""

    doctype = "Beneficiary"
    rows = extract_data_from_file(file_url)

    errors = []
    processed = []

    meta = frappe.get_meta(doctype)
    valid_fields = {df.fieldname for df in meta.fields}
    bank_fields = {"bank_name", "bank_account_number"}
    supplier_fields = {"official_school_name", "public_or_private"}
    donor_field = "donor"

    for idx, row in enumerate(rows, start=2):
        row = {k: v for k, v in row.items() if v is not None and str(v).strip() != ""}
        if not row:
            continue

        beneficiary = None

        try:
            if all(
                row.get(f)
                for f in ["county", "official_school_name", "student_name", "cohort"]
            ):
                existing = frappe.db.exists(
                    doctype,
                    {
                        "county": row.get("county"),
                        "official_school_name": row.get("official_school_name"),
                        "student_name": row.get("student_name"),
                        "cohort": row.get("cohort"),
                    },
                )

                if existing:
                    beneficiary = frappe.get_doc(doctype, existing)

                else:
                    beneficiary = frappe.new_doc(doctype)
            else:
                beneficiary = frappe.new_doc(doctype)

        except Exception as e:
            errors.append({"row": idx, "error": f"Failed to initialize: {str(e)}"})
            continue

        supplier_name = None
        supplier_data = {f: row.get(f) for f in supplier_fields if row.get(f)}
        if supplier_data and supplier_data.get("official_school_name"):
            try:
                supplier_name = get_or_create_supplier(supplier_data)
            except Exception as e:
                errors.append({"row": idx, "field": "supplier", "error": str(e)})

        for field, value in row.items():
            if field in bank_fields or field in supplier_fields or field == donor_field:
                continue

            if field in valid_fields:
                try:
                    beneficiary.set(field, value)
                except Exception as e:
                    errors.append({"row": idx, "field": field, "error": str(e)})
            else:
                errors.append(
                    {"row": idx, "field": field, "error": f"Invalid field '{field}'"}
                )

        if supplier_name:
            beneficiary.official_school_name = supplier_name

        try:
            beneficiary.save(ignore_permissions=True)
            frappe.log_error("BERN", beneficiary.name)
            processed.append(beneficiary.name)
        except Exception as e:
            errors.append({"row": idx, "error": f"Failed to save: {str(e)}"})
            frappe.log_error(
                frappe.get_traceback(), f"Beneficiary Save Error - Row {idx}"
            )
            continue
        # Process Donor (optional)
        row_donor = row.get(donor_field)
        if row_donor:
            try:
                get_or_create_donor(row_donor)  # F841
                # TODO: Link donor to beneficiary when I create a child table

            except Exception as e:
                errors.append({"row": idx, "field": "donor", "error": str(e)})

        bank_data = {f: row.get(f) for f in bank_fields if row.get(f)}
        if bank_data:
            try:
                # Validate all bank fields present
                if len(bank_data) < len(bank_fields):
                    missing = bank_fields - bank_data.keys()
                    errors.append(
                        {
                            "row": idx,
                            "error": f"Missing bank fields: {', '.join(missing)}",
                        }
                    )
                else:
                    create_bank_account(bank_data, supplier_name)
            except Exception as e:
                errors.append({"row": idx, "field": "bank", "error": str(e)})
                frappe.log_error(
                    frappe.get_traceback(), f"Bank Account Error - Row {idx}"
                )

    frappe.db.commit()

    return {
        "success": True,
        "total_rows": len(rows),
        "processed": len(processed),
        "beneficiaries": processed,
        "errors": errors,
        "error_count": len(errors),
    }


def get_or_create_supplier(supplier_data):
    """Get existing supplier or create new one"""

    supplier_name = supplier_data.get("official_school_name")

    if not supplier_name:
        frappe.throw("Supplier name is required")

    if frappe.db.exists("Supplier", supplier_name):
        return supplier_name

    # Create new supplier
    supplier_doc = frappe.new_doc("Supplier")
    supplier_doc.supplier_name = supplier_name

    if supplier_data.get("public_or_private"):
        supplier_doc.public_or_private = supplier_data["public_or_private"]

    supplier_doc.insert(ignore_permissions=True)

    return supplier_doc.name


def get_or_create_donor(donor_name):
    """Get existing donor or create new one"""

    if not donor_name:
        frappe.throw("Donor name is required")

    if frappe.db.exists("Donor", donor_name):
        return donor_name

    # Ensure Donor Type exists
    if not frappe.db.exists("Donor Type", "General"):
        donor_type = frappe.new_doc("Donor Type")
        donor_type.donor_type = "General"
        donor_type.insert(ignore_permissions=True)

    # Create new donor
    if not frappe.db.exists(
        "Donor", donor_name.lower().replace(" ", "") + "@gmail.com"
    ):
        donor_doc = frappe.new_doc("Donor")
        donor_doc.donor_name = donor_name
        donor_doc.donor_type = "General"
        donor_doc.email = donor_name.lower().replace(" ", "") + "@gmail.com"
        donor_doc.insert(ignore_permissions=True)

        return donor_doc.name
    return donor_name.lower().replace(" ", "") + "@gmail.com"


def create_bank_account(bank_data, supplier_name):
    """Create bank and bank account if they don't exist"""

    bank_name = bank_data.get("bank_name")
    account_number = bank_data.get("bank_account_number")

    if not supplier_name:
        frappe.throw("Supplier is required to create bank account")

    # Create Bank if doesn't exist
    if not frappe.db.exists("Bank", bank_name):
        bank_doc = frappe.new_doc("Bank")
        bank_doc.bank_name = bank_name
        bank_doc.insert(ignore_permissions=True)

    if frappe.db.exists("Bank Account", {"bank_account_no": account_number}):
        return

    # Create Bank Account
    bank_account = frappe.new_doc("Bank Account")
    bank_account.bank = bank_name
    bank_account.bank_account_no = account_number
    bank_account.account_name = f"{supplier_name} - {bank_name}"
    bank_account.party_type = "Supplier"
    bank_account.party = supplier_name
    bank_account.insert(ignore_permissions=True)

    return bank_account.name
