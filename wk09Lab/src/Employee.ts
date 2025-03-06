import { IPerson } from "./IPerson";

export default class Employee implements IPerson {
    //if is not declared then a property is public
    firstName: String; 
    lastName: String;
    department: string
    private empID: number //can only be access to the class only
    salary: number = 0.0

    constructor(empID: number,firstName: String, lastName: String, department: string) {
        this.empID = empID
        this.firstName = firstName
        this.lastName = lastName
        this.department = department
    }

    showDetails(): void {
        console.log(`\nEmployee ID: ${this.empID}`)
        console.log(`Employee Name : ${this.firstName} ${this.lastName}`)
        console.log(`Department : ${this.department}`)
        // console.log(`salary : ${this.salary}`)
    }

    getSalary(): number{
        return this.salary
    }

    calculateTax(): number{
        return this.salary*0.10
    }
}