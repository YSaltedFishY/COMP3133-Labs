"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(empID, firstName, lastName, department) {
        this.salary = 0.0;
        this.empID = empID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }
    showDetails() {
        console.log(`\nEmployee ID: ${this.empID}`);
        console.log(`Employee Name : ${this.firstName} ${this.lastName}`);
        console.log(`Department : ${this.department}`);
        // console.log(`salary : ${this.salary}`)
    }
    getSalary() {
        return this.salary;
    }
    calculateTax() {
        return this.salary * 0.10;
    }
}
exports.default = Employee;
