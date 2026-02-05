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

    try:
        scholarship_allocation = frappe.get_doc(
            "Student Beneficiary Scholarship Allocation",
            {"purchase_invoice": pi_dict.name},
        )

        if scholarship_allocation:
            scholarship_allocation.flags.ignore_validate_update_after_submit = True

            if any(
                record.payment_entry == payment_entry.name
                for record in scholarship_allocation.get("payment_records", [])
            ):
                return

            scholarship_allocation.append(
                "payment_records",
                {
                    "payment_entry": payment_entry.name,
                    "amount_paid": allocated_amount,
                    "payment_date": payment_entry.posting_date,
                },
            )

            total_paid = sum(
                [
                    record.amount_paid
                    for record in scholarship_allocation.get("payment_records")
                ]
            )
            outstanding_amount = scholarship_allocation.allocated_amount - total_paid

            if outstanding_amount <= 0:
                scholarship_allocation.payment_status = "Paid"
            else:
                scholarship_allocation.payment_status = "Partially Paid"

            scholarship_allocation.total_amount_paid = total_paid
            scholarship_allocation.outstanding_amount = outstanding_amount
            scholarship_allocation.save(ignore_permissions=True)

    except Exception as e:
        frappe.log_error(
            f"Error updating scholarship allocation for Payment Entry {payment_entry.name}: {str(e)}",
            "Scholarship Allocation Update Error",
        )
