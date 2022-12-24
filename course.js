#! /usr/bin/env node
"use strict";
exports.__esModule = true;
exports.Course = void 0;
var chalk_1 = require("chalk");
var Course = /** @class */ (function () {
    function Course() {
        this.count = 0;
        this.courseID = [];
        this.cousreName = [];
        this.duration = [];
        this.course_description = [];
        this.course_fee = [];
        this.credit_hour = [];
    }
    Course.prototype.addNewCourse = function (courseName, duration, description, courseFee, course_hour) {
        this.courseID.push(++this.count);
        this.cousreName.push(courseName);
        this.duration.push(duration);
        this.course_description.push(description);
        this.course_fee.push(courseFee);
        this.credit_hour.push(course_hour);
    };
    Course.prototype.getCourseDetails = function () {
        var _this = this;
        if (this.courseID.length) {
            this.courseID.forEach(function (cId, index) {
                var cName = _this.cousreName[index];
                var cDuration = _this.duration[index];
                var cDiscription = _this.course_description[index];
                var cFee = _this.course_fee[index];
                console.log(chalk_1["default"].green("Course ID: ".concat(cId, " Course Name: ").concat(cName, " Duration: ").concat(cDuration, " Course Description ").concat(cDiscription, " Course Fee ").concat(cFee)));
            });
        }
        else {
            console.log(chalk_1["default"].red("Course not available"));
        }
    };
    return Course;
}());
exports.Course = Course;
