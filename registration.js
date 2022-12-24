#! /usr/bin/env node
"use strict";
exports.__esModule = true;
exports.Registration = void 0;
var chalk_1 = require("chalk");
var Registration = /** @class */ (function () {
    function Registration() {
        this.count = 0;
        this.registrationID = [];
        this.reg_studentID = [];
        this.reg_courseID = [];
        this.reg_batchID = [];
        this.registration_status = [];
    }
    Registration.prototype.addNewRegistration = function (studentId, courseId, batchId) {
        this.count++;
        this.registrationID.push("Reg#" + this.count);
        this.reg_studentID.push(studentId);
        this.reg_courseID.push(courseId);
        this.reg_batchID.push(batchId);
        this.registration_status.push("Enrolled");
    };
    Registration.prototype.showRegistrationDetails = function () {
        var _this = this;
        if (this.registrationID.length) {
            this.registrationID.forEach(function (regid, index) {
                var regStId = _this.reg_studentID[index];
                var regCourId = _this.reg_courseID[index];
                var regBatId = _this.reg_batchID[index];
                var regStatus = _this.registration_status[index];
                console.log(chalk_1["default"].green("Reg ID: ".concat(regid, " Course: ").concat(regCourId, " Batch# ").concat(regBatId, " Status: ").concat(regStatus, " ")));
            });
        }
        else {
            console.log(chalk_1["default"].red("No student register"));
        }
    };
    return Registration;
}());
exports.Registration = Registration;
