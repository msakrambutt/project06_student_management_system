#! /usr/bin/env node
import chalk from "chalk";
export class Course {
    count = 0;
    courseID = [];
    cousreName = [];
    duration = [];
    course_description = [];
    course_fee = [];
    credit_hour = [];
    addNewCourse(courseName, duration, description, courseFee, course_hour) {
        this.courseID.push(++this.count);
        this.cousreName.push(courseName);
        this.duration.push(duration);
        this.course_description.push(description);
        this.course_fee.push(courseFee);
        this.credit_hour.push(course_hour);
    }
    getCourseDetails() {
        if (this.courseID.length) {
            this.courseID.forEach((cId, index) => {
                const cName = this.cousreName[index];
                const cDuration = this.duration[index];
                const cDiscription = this.course_description[index];
                const cFee = this.course_fee[index];
                console.log(chalk.green(`Course ID: ${cId} Course Name: ${cName} Duration: ${cDuration} Course Description ${cDiscription} Course Fee ${cFee}`));
            });
        }
        else {
            console.log(chalk.red("Course not available"));
        }
    }
}
