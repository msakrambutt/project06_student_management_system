#! /usr/bin/env node
export class Fee {
    count = 0;
    fee_id = [];
    date = [];
    fee_student_id = [];
    fee_course_name = [];
    fee_batch_name = [];
    payment_mode = [];
    invoice_no = [];
    fee_paid = [];
    addNewFee(feeStudent, feeCourse, batchNo, paymentMode, invoiceNo, feepaid) {
        let fee_date = new Date();
        this.fee_id.push(++this.count);
        this.fee_student_id.push(feeStudent);
        this.date.push(fee_date);
        this.fee_course_name.push(feeCourse);
        this.fee_batch_name.push(batchNo);
        this.payment_mode.push(paymentMode);
        this.invoice_no.push(invoiceNo);
        this.fee_paid.push(feepaid);
    }
}
