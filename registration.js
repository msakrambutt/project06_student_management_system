#! /usr/bin/env node
import chalk from "chalk";
export class Registration {
    count = 0;
    registrationID = [];
    reg_studentID = [];
    reg_courseID = [];
    reg_batchID = [];
    registration_status = [];
    addNewRegistration(studentId, courseId, batchId) {
        this.count++;
        this.registrationID.push("Reg#" + this.count);
        this.reg_studentID.push(studentId);
        this.reg_courseID.push(courseId);
        this.reg_batchID.push(batchId);
        this.registration_status.push("Enrolled");
    }
    showRegistrationDetails() {
        if (this.registrationID.length) {
            this.registrationID.forEach((regid, index) => {
                const regStId = this.reg_studentID[index];
                const regCourId = this.reg_courseID[index];
                const regBatId = this.reg_batchID[index];
                const regStatus = this.registration_status[index];
                console.log(chalk.green(`Reg ID: ${regid} Course: ${regCourId} Batch# ${regBatId} Status: ${regStatus} `));
            });
        }
        else {
            console.log(chalk.red("No student register"));
        }
    }
}
