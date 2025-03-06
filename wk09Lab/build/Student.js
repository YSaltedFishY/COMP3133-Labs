"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//definition of the student class
class Student {
    //class attributes must be initialized
    //either with default values or in the constructor
    //constructor
    constructor(studentID, firstName, lastName, percentage) {
        this.lastName = "NA";
        this.percentage = 0.0;
        this.studentID = studentID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.percentage = percentage;
    }
    showDetails() {
        console.log(`\n student ID: ${this.studentID}`);
        console.log(`Student Name : ${this.firstName} ${this.lastName}`);
        console.log(`Percentage : ${this.percentage}`);
    }
}
exports.default = Student;
//another export example
// export default Student
