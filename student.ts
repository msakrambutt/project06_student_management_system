#! /usr/bin/env node
import chalk from "chalk";
export class Student{
    count:number=0;
    studentId:number[]=[];// Auto generated 5 digit student ID
    firstName:string[]=[];
    lastName:string[]=[];
    studentLogin:string[]=[];
    password:string[]=[];
    gender:string[]=[];
    student_fee_status:string[]=[];
    student_fee_balance:number[]=[];
    cnic:number[]=[];
    phoneNumber:number[]=[];
    emailId:string[]=[];
    city:string[]=[];

    addNewStudent(firstName:string,lastName:string,studentLogin:string,password:string,stgender:string){
        this.studentId.push(Math.pow(10, 4)+(++this.count));//genearte five digit St ID
        this.firstName.push(firstName);
        this.lastName.push(lastName);
        this.studentLogin.push(studentLogin);
        this.password.push(password);
        this.gender.push(stgender);

    }
    addNewStudentoptinal(cnic:number,phone:number,email:string,city:string,feeStatus:string,feeBalance:number){
      this.cnic.push(cnic);
      this.phoneNumber.push(phone);
      this.emailId.push(email);
      this.city.push(city);
      this.student_fee_status.push(feeStatus);
      this.student_fee_balance.push(feeBalance);
    }
    getStudentDetails(){
        if(this.studentId.length){
            this.studentId.forEach((stid, index) => {
                const fnum = this.firstName[index];
                const lnum=this.lastName[index];
                const stlogin=this.studentLogin[index];
                const stpwd=this.password[index];
                const stgen=this.gender[index];
                //const stfeebal=this.student_fee_balance[index];
                console.log(chalk.green(`Student ID: ${stid} First Name: ${fnum} Last Name: ${lnum} Student Login: ${stlogin} Password: ${stpwd} Gender: ${stgen}`));
              });
        } else {
          console.log(chalk.red("Student not available"));
        }
      }
      
      
    }
 
    