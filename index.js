#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var chalk_1 = require("chalk");
var inquirer_1 = require("inquirer");
var chalk_animation_1 = require("chalk-animation");
var student_js_1 = require("./student.js");
var course_js_1 = require("./course.js");
var batch_js_1 = require("./batch.js");
var registration_js_1 = require("./registration.js");
var fee_js_1 = require("./fee.js");
//variable
var mainContinue = false;
var mainMenueContinue = true;
var studentContinue = true;
var courseContinue = true;
var addNewCourseContinue = true;
var addNewStudentContinue = true;
var batchContinue = true;
var registrationContinue = true;
var addnewRegContinue = true;
var signCondition = true;
var user_signIn = false;
var signStudentFName = "";
var signStudentLName = "";
var studentFeeCondition = true;
var signStudentId = 0;
var studentFeeBal = 0;
var cid = 0;
//validate user input
function validateStudent(input) {
    var regexAlpha1 = /^[A-Za-z\s]*$/; // only Aplhabets  and space allowed
    if (!input.match(regexAlpha1)) {
        return "Please enter Alphabets";
    }
    else if (input === "") {
        return "Blank field now allowed,please fill the field";
    }
    else {
        return true;
    }
}
function validateEmail(input) {
    var regexAlpha1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email verified
    if (!input.match(regexAlpha1)) {
        return "Please enter Correct Email Address";
    }
    else if (input === "") {
        return "Blank field now allowed,please fill the field";
    }
    else {
        return true;
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function getStudentData() {
            var newStData = [];
            for (var i = 0; i < myStudent.studentId.length; i++) {
                newStData.push(myStudent.studentId[i]);
            }
            return newStData;
        }
        function getCourseData() {
            var newCourData = [];
            for (var i = 0; i < myCourse.courseID.length; i++) {
                newCourData.push(myCourse.cousreName[i]);
            }
            return newCourData;
        }
        function getBatchData() {
            var newBatchData = [];
            for (var i = 0; i < myBatch.batchId.length; i++) {
                newBatchData.push(myBatch.batchName[i]);
            }
            return newBatchData;
        }
        var myCourse, myBatch, myStudent, myRegistration, myFee, answers, answers1, student, checkConfirm, st_delete, i, s_fname, s_lname, answers_1, course, checkConfirm, answers_2, _loop_1, answers_3, course, i, fee, fee1, checkConfirm, stDetails, index, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    myCourse = new course_js_1.Course();
                    myBatch = new batch_js_1.Batch();
                    myStudent = new student_js_1.Student();
                    myRegistration = new registration_js_1.Registration();
                    myFee = new fee_js_1.Fee();
                    _a.label = 1;
                case 1: return [4 /*yield*/, inquirer_1["default"].prompt([
                        {
                            name: "createCourse",
                            type: "list",
                            choices: ["Student", "Course", "Batch", "Enroll", "Show Student Details", "Exit"]
                        }
                    ])];
                case 2:
                    answers = _a.sent();
                    if (!(answers.createCourse === "Student")) return [3 /*break*/, 16];
                    _a.label = 3;
                case 3: return [4 /*yield*/, inquirer_1["default"].prompt([
                        {
                            name: "addNewStudent",
                            type: "list",
                            choices: ["Add Student", "Delete Student", "Show Details", "Main Menue"]
                        }
                    ])];
                case 4:
                    answers1 = _a.sent();
                    if (!(answers1.addNewStudent === "Add Student")) return [3 /*break*/, 10];
                    _a.label = 5;
                case 5: return [4 /*yield*/, inquirer_1["default"].prompt([
                        {
                            name: "studentFirstName",
                            type: "input",
                            message: "First Name: ",
                            validate: validateStudent
                        },
                        {
                            name: "studentLastName",
                            type: "input",
                            message: "Last Name: ",
                            validate: validateStudent
                        },
                        {
                            name: "studentGender",
                            type: "list",
                            message: "Gender: ",
                            choices: ["Male", "Female"]
                        },
                        {
                            name: "studentLogin",
                            type: "input",
                            message: "Student login:(only charcter & number allowd) ",
                            validate: function validateStudentLogin(input) {
                                var regexAlpha1 = /^[0-9a-zA-Z]+$/; // only Aplhanumeric
                                if (!input.match(regexAlpha1)) {
                                    return "Please enter characters & numbers ";
                                }
                                else if (input === "") {
                                    return "Blank field now allowed,please fill the field";
                                }
                                else {
                                    return true;
                                }
                            }
                        },
                        {
                            name: "studentPwd",
                            type: "password",
                            message: "Password(Only Alphabet Numeric values Allow): ",
                            validate: function validateStudentPwd(input) {
                                var regexAlpha1 = /^[0-9a-zA-Z]+$/; // only Aplhanumeric
                                if (!input.match(regexAlpha1)) {
                                    return "Please enter characters & numbers ";
                                }
                                else if (input === "") {
                                    return "Blank field now allowed,please fill the field";
                                }
                                else {
                                    return true;
                                }
                            }
                        }
                    ])];
                case 6:
                    student = _a.sent();
                    myStudent.addNewStudent(student.studentFirstName, student.studentLastName, student.studentLogin, student.studentPwd, student.studentGender);
                    console.log(chalk_1["default"].yellow(" New Student has been Created...\n"));
                    return [4 /*yield*/, inquirer_1["default"].prompt([
                            {
                                name: "confirm",
                                type: "confirm",
                                message: "Do you want Add more Course(y/n) "
                            }
                        ])];
                case 7:
                    checkConfirm = _a.sent();
                    if (checkConfirm.confirm === true) {
                        addNewStudentContinue = true;
                    }
                    else {
                        addNewStudentContinue = false;
                    }
                    _a.label = 8;
                case 8:
                    if (addNewStudentContinue) return [3 /*break*/, 5];
                    _a.label = 9;
                case 9: return [3 /*break*/, 15];
                case 10:
                    if (!(answers1.addNewStudent === "Delete Student")) return [3 /*break*/, 14];
                    if (!(myStudent.studentId.length > 0)) return [3 /*break*/, 12];
                    return [4 /*yield*/, inquirer_1["default"].prompt([
                            {
                                name: "stid",
                                type: "list",
                                message: "Select Sudent ID to delete it:",
                                choices: getStudentData
                            }
                        ])];
                case 11:
                    st_delete = _a.sent();
                    for (i = 0; i < myStudent.studentId.length; i++) {
                        s_fname = myStudent.firstName[i];
                        s_lname = myStudent.lastName[i];
                        if (myStudent.studentId[i] === Number(st_delete.stid)) {
                            myStudent.studentId.splice(i, 1);
                            myStudent.firstName.splice(i, 1);
                            myStudent.lastName.splice(i, 1);
                            myStudent.password.splice(i, 1);
                            myStudent.gender.splice(i, 1);
                            ;
                            myStudent.student_fee_status.splice(i, 1);
                            myStudent.student_fee_balance.splice(i, 1);
                            myStudent.cnic.splice(i, 1);
                            myStudent.phoneNumber.splice(i, 1);
                            myStudent.emailId.splice(i, 1);
                            myStudent.city.splice(i, 1);
                            console.log(chalk_1["default"].yellow("Student ".concat(s_fname, " ").concat(s_lname, " record has been deleted")));
                            break;
                        }
                    }
                    return [3 /*break*/, 13];
                case 12:
                    console.log(chalk_1["default"].red("Student record not found"));
                    _a.label = 13;
                case 13: return [3 /*break*/, 15];
                case 14:
                    if (answers1.addNewStudent === "Show Details") {
                        myStudent.getStudentDetails();
                    }
                    else {
                        studentContinue = false;
                    }
                    _a.label = 15;
                case 15:
                    if (studentContinue) return [3 /*break*/, 3];
                    _a.label = 16;
                case 16:
                    if (!(answers.createCourse === "Course")) return [3 /*break*/, 26];
                    _a.label = 17;
                case 17: return [4 /*yield*/, inquirer_1["default"].prompt([
                        {
                            name: "addNewCourse",
                            type: "list",
                            choices: ["Add New Course", "Delete Course", "Show Course Details", "Main Menue"]
                        }
                    ])];
                case 18:
                    answers_1 = _a.sent();
                    if (!(answers_1.addNewCourse === "Add New Course")) return [3 /*break*/, 24];
                    _a.label = 19;
                case 19: return [4 /*yield*/, inquirer_1["default"].prompt([
                        {
                            name: "courseName",
                            type: "input",
                            message: "Course Name: ",
                            validate: validateStudent
                        },
                        {
                            name: "courseDuration",
                            type: "input",
                            message: "Duration: ",
                            validate: function validateCourseDuration(input) {
                                var regexAlpha1 = /^[0-9a-zA-Z\s]+$/; // only Aplhanumeric and space
                                if (!input.match(regexAlpha1)) {
                                    return "Please enter characters or numbers ";
                                }
                                else if (input === "") {
                                    return "Blank field now allowed,please fill the field";
                                }
                                else {
                                    return true;
                                }
                            }
                        },
                        {
                            name: "courseDescription",
                            type: "input",
                            message: "Description: ",
                            validate: function validateCourseDesc(input) {
                                //let  regexAlpha1 =  /^[0-9a-zA-Z\s]*$/; // only Aplhanumeric & space 
                                var regexAlpha1 = /^[0-9a-zA-Z\s-.&]*$/;
                                if (!input.match(regexAlpha1)) {
                                    return "Please enter characters/numbers/Space Alllowd ";
                                }
                                else if (input === "") {
                                    return "Blank field now allowed,please fill the field";
                                }
                                else {
                                    return true;
                                }
                            }
                        },
                        {
                            name: "courseFee",
                            type: "input",
                            message: "Fee: ",
                            validate: function validateCourseFee(input) {
                                if (isNaN(input)) {
                                    return "Please enter valid input";
                                }
                                else if (input <= 0) {
                                    return "Please enter valid input";
                                }
                                else {
                                    return true;
                                }
                            }
                        },
                        {
                            name: "courseCrditHour",
                            type: "input",
                            message: "Credit Hour: ",
                            validate: function validateCourseCreditHour(input) {
                                if (isNaN(input)) {
                                    return "Please enter valid input";
                                }
                                else if (input <= 0) {
                                    return "Please enter valid input";
                                }
                                else {
                                    return true;
                                }
                            }
                        }
                    ])];
                case 20:
                    course = _a.sent();
                    myCourse.addNewCourse(course.courseName, course.courseDuration, course.courseDescription, Number(course.courseFee), Number(course.courseCrditHour));
                    console.log(chalk_1["default"].yellow("New Course has been Created...\n"));
                    return [4 /*yield*/, inquirer_1["default"].prompt([
                            {
                                name: "confirm",
                                type: "confirm",
                                message: "Do you want Add more Course(y/n) "
                            }
                        ])];
                case 21:
                    checkConfirm = _a.sent();
                    if (checkConfirm.confirm === true) {
                        addNewCourseContinue = true;
                    }
                    else {
                        addNewCourseContinue = false;
                    }
                    _a.label = 22;
                case 22:
                    if (addNewCourseContinue) return [3 /*break*/, 19];
                    _a.label = 23;
                case 23: return [3 /*break*/, 25];
                case 24:
                    if (answers_1.addNewCourse === "Show Course Details") {
                        myCourse.getCourseDetails();
                    }
                    else {
                        courseContinue = false;
                    }
                    _a.label = 25;
                case 25:
                    if (courseContinue) return [3 /*break*/, 17];
                    _a.label = 26;
                case 26:
                    if (!(answers.createCourse === "Batch")) return [3 /*break*/, 30];
                    _a.label = 27;
                case 27:
                    batchContinue = true;
                    return [4 /*yield*/, inquirer_1["default"].prompt([
                            {
                                name: "addNewBatch",
                                type: "list",
                                choices: ["Add New Batch", "Show Batch Details", "Main Menue"]
                            }
                        ])];
                case 28:
                    answers_2 = _a.sent();
                    if (answers_2.addNewBatch === "Add New Batch") {
                        myBatch.addNewBatch();
                    }
                    else if (answers_2.addNewBatch === "Show Batch Details") {
                        myBatch.getBatchDetails();
                    }
                    else {
                        batchContinue = false;
                    }
                    _a.label = 29;
                case 29:
                    if (batchContinue) return [3 /*break*/, 27];
                    _a.label = 30;
                case 30:
                    if (!(answers.createCourse === "Enroll")) return [3 /*break*/, 55];
                    if (!(myStudent.count <= 0)) return [3 /*break*/, 31];
                    console.log(chalk_1["default"].red("\nStudent not exist, First Create New Student..."));
                    return [3 /*break*/, 55];
                case 31:
                    if (!(myCourse.count <= 0)) return [3 /*break*/, 32];
                    console.log(chalk_1["default"].red("\nStudent Course not exist, First Create courses..."));
                    return [3 /*break*/, 55];
                case 32:
                    if (!(myBatch.count <= 0)) return [3 /*break*/, 33];
                    console.log(chalk_1["default"].red("\nStudent Batch not exist, First Create batches..."));
                    return [3 /*break*/, 55];
                case 33:
                    _loop_1 = function () {
                        var userLogin, signOk, pwdOk;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, inquirer_1["default"].prompt([
                                        {
                                            name: "userid",
                                            type: "input",
                                            message: "User Name: "
                                        },
                                        {
                                            name: "userpwd",
                                            type: "input",
                                            message: "Password: "
                                        }
                                    ])];
                                case 1:
                                    userLogin = _b.sent();
                                    signOk = myStudent.studentLogin.find(function (value) { return value === userLogin.userid; });
                                    pwdOk = myStudent.password.find(function (value) { return value === userLogin.userpwd; });
                                    if (signOk !== undefined && pwdOk !== undefined) {
                                        user_signIn = true;
                                        signStudentId = myStudent.studentLogin.indexOf(signOk);
                                    }
                                    if (user_signIn) {
                                        console.log(chalk_1["default"].green("\nUser Login:Successfully..."));
                                        user_signIn = true;
                                        signCondition = false;
                                    }
                                    else {
                                        console.log(chalk_1["default"].red("\nInvalid username or password"));
                                        signCondition = true;
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 34;
                case 34: return [5 /*yield**/, _loop_1()];
                case 35:
                    _a.sent();
                    _a.label = 36;
                case 36:
                    if (signCondition) return [3 /*break*/, 34];
                    _a.label = 37;
                case 37: return [4 /*yield*/, inquirer_1["default"].prompt([
                        {
                            name: "addNewEnroll",
                            type: "list",
                            choices: ["New Enroll", "Pay Fee", "Main Menue"]
                        }
                    ])];
                case 38:
                    answers_3 = _a.sent();
                    if (!(answers_3.addNewEnroll === "New Enroll")) return [3 /*break*/, 44];
                    _a.label = 39;
                case 39:
                    if (!(myRegistration.registration_status[signStudentId] === undefined)) return [3 /*break*/, 41];
                    return [4 /*yield*/, inquirer_1["default"].prompt([
                            {
                                name: "cnic",
                                type: "input",
                                message: "Enter 13 Digit CNIC No:(only numbers allowed without any sign) ",
                                validate: function validateCnic(input) {
                                    if (isNaN(input)) {
                                        return "Please enter valid input";
                                    }
                                    else if (String(input).length < 13 || String(input).length > 13) {
                                        return "Please enter correct digit";
                                    }
                                    else {
                                        return true;
                                    }
                                }
                            },
                            {
                                name: "phoneNumber",
                                type: "input",
                                message: "Enter Phone No:(only numbers allowed without any sign) ",
                                validate: function validatephonenumber(input) {
                                    if (isNaN(input)) {
                                        return "Please enter valid input";
                                    }
                                    else if (String(input).length < 11 || String(input).length > 11) {
                                        return "Please enter correct digit";
                                    }
                                    else {
                                        return true;
                                    }
                                }
                            },
                            {
                                name: "email",
                                type: "input",
                                message: "Email ID: ",
                                validate: validateEmail
                            },
                            {
                                name: "city",
                                type: "input",
                                message: "City: ",
                                validate: validateStudent
                            },
                            {
                                name: "courseid",
                                type: "list",
                                message: "Select Course:",
                                choices: getCourseData
                            },
                            {
                                name: "batchid",
                                type: "list",
                                message: "Select Batch:",
                                choices: getBatchData
                            }
                        ])];
                case 40:
                    course = _a.sent();
                    //get student/course/batch details
                    for (i = 0; i < myCourse.courseID.length; i++) {
                        //if(myCourse.courseID[i]===Number(course.courseid)){
                        if (myCourse.cousreName[i] === course.courseid) {
                            cid = i;
                        }
                    }
                    myRegistration.addNewRegistration(myStudent.studentId[signStudentId], course.courseid, course.batchid);
                    myStudent.addNewStudentoptinal(Number(course.cnic), course.phoneNumber, course.email, course.city, "Balance Due", myCourse.course_fee[cid]);
                    console.log(chalk_1["default"].yellow("Student has been Enrolled in ".concat(course.courseid, " course ...\n")));
                    addnewRegContinue = false;
                    return [3 /*break*/, 42];
                case 41:
                    console.log(chalk_1["default"].red("Student can enrolled at a time only one course "));
                    _a.label = 42;
                case 42:
                    if (addnewRegContinue) return [3 /*break*/, 39];
                    _a.label = 43;
                case 43: return [3 /*break*/, 54];
                case 44:
                    if (!(answers_3.addNewEnroll === "Pay Fee")) return [3 /*break*/, 53];
                    if (!(myRegistration.registrationID.length > 0)) return [3 /*break*/, 51];
                    _a.label = 45;
                case 45:
                    console.log(chalk_1["default"].yellow("Course Name: " + myCourse.cousreName[cid] + "\n")); //issue
                    console.log(chalk_1["default"].yellow("Batch Name: " + myBatch.batchName[cid] + "\n")); //issue
                    return [4 /*yield*/, inquirer_1["default"].prompt([
                            {
                                name: "paymentMode",
                                type: "list",
                                message: "select your payment Mode: ",
                                choices: ["BY Bank", "By Cash"]
                            },
                            {
                                name: "inoiceNo",
                                type: "input",
                                message: "Enter Invoice No:",
                                validate: function validateInvoiceNo(input) {
                                    var regexAlpha1 = /^[0-9a-zA-Z]+$/; // only Aplhanumeric
                                    if (!input.match(regexAlpha1)) {
                                        return "Please correct invoice No ";
                                    }
                                    else if (input === "") {
                                        return "Blank field now allowed,please fill the field";
                                    }
                                    else {
                                        return true;
                                    }
                                }
                            },
                        ])];
                case 46:
                    fee = _a.sent();
                    console.log(chalk_1["default"].yellow("Course Fee: " + myCourse.course_fee[cid] + "\n")); //issue
                    console.log(chalk_1["default"].yellow("Balance Due: " + myStudent.student_fee_balance[signStudentId] + "\n"));
                    return [4 /*yield*/, inquirer_1["default"].prompt([
                            {
                                name: "feepaid",
                                type: "input",
                                message: "Enter Course Fee ",
                                validate: function validateInput(input) {
                                    if (isNaN(input)) {
                                        return "Please enter valid input";
                                    }
                                    else if (input > Number(myStudent.student_fee_balance[signStudentId]) || Number(input < myStudent.student_fee_balance[signStudentId])) {
                                        return "Please enter correct amount";
                                    }
                                    else if (input === Number(myStudent.student_fee_balance[signStudentId])) {
                                        return "please pay full fee, Partial payment not allowed";
                                    }
                                    else {
                                        return true;
                                    }
                                }
                            }
                        ])];
                case 47:
                    fee1 = _a.sent();
                    studentFeeBal = myStudent.student_fee_balance[signStudentId];
                    myStudent.student_fee_balance[signStudentId] = myStudent.student_fee_balance[signStudentId] - Number(fee1.feepaid);
                    myFee.addNewFee(myStudent.studentId[signStudentId], myCourse.cousreName[signStudentId], fee.studentBatch, fee.paymentMode, fee.inoiceNo, Number(fee1.feepaid));
                    console.log(chalk_1["default"].yellow("\nStudent ".concat(myStudent.firstName[signStudentId], " ").concat(myStudent.lastName[signStudentId], " has been paid their fee, course:{ ").concat(myCourse.cousreName[signStudentId], "}\n")));
                    return [4 /*yield*/, inquirer_1["default"].prompt([
                            {
                                name: "confirm",
                                type: "confirm",
                                message: "Do you want enroll more (y/n) "
                            }
                        ])];
                case 48:
                    checkConfirm = _a.sent();
                    if (checkConfirm.confirm === true) {
                        studentFeeCondition = true;
                    }
                    else {
                        studentFeeCondition = false;
                    }
                    _a.label = 49;
                case 49:
                    if (studentFeeCondition) return [3 /*break*/, 45];
                    _a.label = 50;
                case 50: return [3 /*break*/, 52];
                case 51:
                    console.log(chalk_1["default"].red("Please first Enroll yourself then pay fee..."));
                    _a.label = 52;
                case 52: return [3 /*break*/, 54];
                case 53:
                    console.log(chalk_1["default"].yellow("Student ".concat(signStudentFName, " ").concat(signStudentLName, " Signout...\n")));
                    myRegistration.showRegistrationDetails();
                    signStudentFName = "";
                    signStudentFName = "";
                    user_signIn = false;
                    registrationContinue = false;
                    _a.label = 54;
                case 54:
                    if (registrationContinue) return [3 /*break*/, 37];
                    _a.label = 55;
                case 55:
                    if (!(answers.createCourse === "Show Student Details")) return [3 /*break*/, 58];
                    if (!(myStudent.studentId.length > 0)) return [3 /*break*/, 57];
                    return [4 /*yield*/, inquirer_1["default"].prompt([
                            {
                                name: "id",
                                type: "list",
                                message: "Select Student to check their details: ",
                                choices: getStudentData
                            }
                        ])];
                case 56:
                    stDetails = _a.sent();
                    index = myStudent.studentId.indexOf(stDetails.id);
                    console.log(chalk_1["default"].blue.bold("\tStudent Complete Status...\n"));
                    //     //Display student & registration Data
                    console.log("_______________________________________________________________________");
                    console.log(chalk_1["default"].yellow("Student ID: ".concat(myStudent.studentId[index], " Name: ").concat(myStudent.firstName[index], " ").concat(myStudent.lastName[index], "\n")));
                    if (myRegistration.reg_studentID[index] === Number(stDetails.id)) {
                        console.log(chalk_1["default"].yellow("Login ID: ".concat(myStudent.studentLogin[index], " Gender ").concat(myStudent.gender[index], " CNINC: ").concat(myStudent.cnic[index], " Ph #: ").concat(myStudent.phoneNumber[index], " Email: ").concat(myStudent.emailId[index], " City: ").concat(myStudent.city[index])));
                        console.log(chalk_1["default"].green("Course Name: ".concat(myRegistration.reg_courseID[index], " Course Status ").concat(myRegistration.registration_status[index], " Batch Name: ").concat(myRegistration.reg_batchID[index], "\n")));
                    }
                    else {
                        console.log("Students not Enrolled \n");
                    }
                    if (myFee.fee_id.length > 0) {
                        for (i = 0; i < myFee.fee_id.length; i++) {
                            console.log(stDetails.id + " " + myFee.fee_student_id[i]);
                            if (Number(stDetails.id) === myFee.fee_student_id[i]) {
                                console.log("_______________________________________________________________________");
                                console.log(chalk_1["default"].blue("Student Id ".concat(myFee.fee_student_id[i], " Fee ID ").concat(myFee.fee_id[i], " Date ").concat(myFee.date[i], " \nInvoice No: ").concat(myFee.invoice_no[i], " Course Name: ").concat(myFee.fee_course_name[i], " \nCourse Fee: ").concat(myCourse.course_fee[i], "\nAmount Pay: ").concat(myFee.fee_paid[i], "\nBalance: ").concat(myStudent.student_fee_balance[i])));
                                console.log("_______________________________________________________________________");
                            }
                        }
                    }
                    else {
                        console.log("Fee not paid..");
                    }
                    return [3 /*break*/, 58];
                case 57:
                    console.log("Students not Exist, First Create it \n");
                    _a.label = 58;
                case 58:
                    if (answers.createCourse === "Exit") {
                        mainMenueContinue = false;
                        mainContinue = false;
                    }
                    _a.label = 59;
                case 59:
                    if (mainMenueContinue) return [3 /*break*/, 1];
                    _a.label = 60;
                case 60: return [2 /*return*/];
            }
        });
    });
}
var sleep = function () { return new Promise(function (res, rej) { return setTimeout(res, 500); }); };
function welcome() {
    return __awaiter(this, void 0, void 0, function () {
        var title;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    title = chalk_animation_1["default"].rainbow('\tWelcome to  Student Management System');
                    return [4 /*yield*/, sleep()];
                case 1:
                    _a.sent();
                    title.stop();
                    do {
                        main();
                    } while (mainContinue);
                    return [2 /*return*/];
            }
        });
    });
}
welcome();
