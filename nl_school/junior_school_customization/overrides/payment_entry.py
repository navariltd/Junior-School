import frappe
from frappe.utils import flt


def before_submit(payment_entry, method=None):
    if not payment_entry.payment_type == "Pay" or not payment_entry.scholarship_payment:
        return

    if not payment_entry.beneficiary:
        return

    if len(payment_entry.references) > 0:
        return

    purchase_invoice = get_purchase_invoice(payment_entry)
    frappe.log_error("Purchase invoice fetched for payment entry", purchase_invoice)

    if purchase_invoice:
        add_purchase_invoice_reference_before_submit(payment_entry, purchase_invoice)
    else:
        return


def get_purchase_invoice(payment_entry):
    PI = frappe.qb.DocType("Purchase Invoice")

    query = (
        frappe.qb.from_(PI)
        .select(PI.name, PI.outstanding_amount, PI.grand_total, PI.credit_to)
        .where(
            (PI.beneficiary == payment_entry.beneficiary)
            & (PI.academic_year == payment_entry.academic_year)
            & (PI.academic_term == payment_entry.academic_term)
            & (PI.company == payment_entry.company)
            & (PI.outstanding_amount > 0)
            & (PI.docstatus == 1)
        )
    )
    pi = query.run(as_dict=True)

    return pi[0] if pi else None


def add_purchase_invoice_reference_before_submit(payment_entry, pi_dict):
    allocated_amount = min(
        flt(payment_entry.paid_amount), flt(pi_dict.outstanding_amount)
    )

    payment_entry.set("references", [])

    payment_entry.append(
        "references",
        {
            "reference_doctype": "Purchase Invoice",
            "reference_name": pi_dict.name,
            "total_amount": pi_dict.grand_total,
            "outstanding_amount": pi_dict.outstanding_amount,
            "allocated_amount": allocated_amount,
        },
    )

    if not payment_entry.paid_to:
        payment_entry.paid_to = pi_dict.credit_to


def on_payment_submit(doc, method=None):
    update_allocation_from_payment_entry(doc, is_cancel=False)


def on_payment_cancel(doc, method=None):
    update_allocation_from_payment_entry(doc, is_cancel=True)


def update_allocation_from_payment_entry(payment_entry, is_cancel=False):
    for ref in payment_entry.references:
        if ref.reference_doctype != "Purchase Invoice":
            continue

        pi = frappe.get_doc("Purchase Invoice", ref.reference_name)

        allocation_name = pi.get("student_beneficiary_scholarship_allocation")
        if not allocation_name:
            continue

        allocation = frappe.get_doc(
            "Student Beneficiary Scholarship Allocation", allocation_name
        )

        allocation.flags.ignore_validate_update_after_submit = True

        if is_cancel:
            allocation.set(
                "payment_records",
                [
                    row
                    for row in allocation.payment_records
                    if row.payment_entry != payment_entry.name
                ],
            )
        else:
            exists = any(
                row.payment_entry == payment_entry.name
                for row in allocation.payment_records
            )

            if not exists:
                allocation.append(
                    "payment_records",
                    {
                        "payment_entry": payment_entry.name,
                        "amount_paid": ref.allocated_amount,
                        "payment_date": payment_entry.posting_date,
                    },
                )

        # recalculate totals
        total_paid = sum(flt(r.amount_paid) for r in allocation.payment_records)
        allocation.amount_paid = total_paid
        allocation.outstanding_amount = flt(allocation.grand_total) - total_paid
        if allocation.outstanding_amount <= 0:
            allocation.payment_status = "Paid"
        elif total_paid > 0:
            allocation.payment_status = "Partially Paid"
        else:
            allocation.payment_status = "Unpaid"

        allocation.save(ignore_permissions=True)
