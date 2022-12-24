#! /usr/bin/env node
export class Fee{
    count:number=0;
    fee_id:number[]=[];
    date:Date[]=[];
    fee_student_id:number[]=[];
    fee_course_name:string[]=[];
    fee_batch_name:string[]=[];
    payment_mode:string[]=[];
    invoice_no:string[]=[];
    fee_paid:number[]=[];
    addNewFee(feeStudent:number,feeCourse:string,batchNo:string,paymentMode:string,invoiceNo:string,feepaid:number){
    let fee_date=new Date();
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
