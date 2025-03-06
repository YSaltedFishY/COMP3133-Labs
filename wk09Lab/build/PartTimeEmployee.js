"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//PartTime Employee.ts
//Inherit from Employee class
const Employee_1 = __importDefault(require("./Employee"));
class PartTimeEmployee extends Employee_1.default {
    constructor(empID, firstName, lastName, department, hoursWorked, hourlyRate) {
        super(empID, firstName, lastName, department);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
        this.salary = this.getSalary();
    }
    getSalary() {
        this.salary = this.hoursWorked * this.hourlyRate;
        return this.salary;
    }
    calculateTax() {
        return this.salary * 0.15;
    }
    showDetails() {
        super.showDetails();
        console.log(`Hours worked : ${this.hoursWorked}`);
        console.log(`Hourly rate : ${this.hourlyRate}`);
        console.log(this.getSalary());
        console.log(this.calculateTax());
    }
}
exports.default = PartTimeEmployee;
