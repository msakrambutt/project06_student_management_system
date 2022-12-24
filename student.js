#! /usr/bin/env node
"use strict";
exports.__esModule = true;
exports.Student = void 0;
var chalk_1 = require("chalk");
var Student = /** @class */ (function () {
    function Student() {
        this.count = 0;
        this.studentId = []; // Auto generated 5 digit student ID
        this.firstName = [];
        this.lastName = [];
        this.studentLogin = [];
        this.password = [];
        this.gender = [];
        this.student_fee_status = [];
        this.student_fee_balance = [];
        this.cnic = [];
        this.phoneNumber = [];
        this.emailId = [];
        this.city = [];
    }
    Student.prototype.addNewStudent = function (firstName, lastName, studentLogin, password, stgender) {
        this.studentId.push(Math.pow(10, 4) + (++this.count)); //genearte five digit St ID
        this.firstName.push(firstName);
        this.lastName.push(lastName);
        this.studentLogin.push(studentLogin);
        this.password.push(password);
        this.gender.push(stgender);
    };
    Student.prototype.addNewStudentoptinal = function (cnic, phone, email, city, feeStatus, feeBalance) {
        this.cnic.push(cnic);
        this.phoneNumber.push(phone);
        this.emailId.push(email);
        this.city.push(city);
        this.student_fee_status.push(feeStatus);
        this.student_fee_balance.push(feeBalance);
    };
    Student.prototype.getStudentDetails = function () {
        var _this = this;
        if (this.studentId.length) {
            this.studentId.forEach(function (stid, index) {
                var fnum = _this.firstName[index];
                var lnum = _this.lastName[index];
                var stlogin = _this.studentLogin[index];
                var stpwd = _this.password[index];
                var stgen = _this.gender[index];
                //const stfeebal=this.student_fee_balance[index];
                console.log(chalk_1["default"].green("Student ID: ".concat(stid, " First Name: ").concat(fnum, " Last Name: ").concat(lnum, " Student Login: ").concat(stlogin, " Password: ").concat(stpwd, " Gender: ").concat(stgen)));
            });
        }
        else {
            console.log(chalk_1["default"].red("Student not available"));
        }
    };
    return Student;
}());
exports.Student = Student;
