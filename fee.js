#! /usr/bin/env node
"use strict";
exports.__esModule = true;
exports.Fee = void 0;
var Fee = /** @class */ (function () {
    function Fee() {
        this.count = 0;
        this.fee_id = [];
        this.date = [];
        this.fee_student_id = [];
        this.fee_course_name = [];
        this.fee_batch_name = [];
        this.payment_mode = [];
        this.invoice_no = [];
        this.fee_paid = [];
    }
    Fee.prototype.addNewFee = function (feeStudent, feeCourse, batchNo, paymentMode, invoiceNo, feepaid) {
        var fee_date = new Date();
        this.fee_id.push(++this.count);
        this.fee_student_id.push(feeStudent);
        this.date.push(fee_date);
        this.fee_course_name.push(feeCourse);
        this.fee_batch_name.push(batchNo);
        this.payment_mode.push(paymentMode);
        this.invoice_no.push(invoiceNo);
        this.fee_paid.push(feepaid);
    };
    return Fee;
}());
exports.Fee = Fee;
