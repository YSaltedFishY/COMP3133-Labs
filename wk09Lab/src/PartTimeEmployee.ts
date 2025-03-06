//PartTime Employee.ts
//Inherit from Employee class
import Employee from "./Employee";

export default class PartTimeEmployee extends Employee{
    hoursWorked : number
    hourlyRate : number

    constructor(empID: number, firstName: string,lastName:string, department: string, hoursWorked: number, hourlyRate: number){
        super(empID,firstName,lastName,department)
        this.hoursWorked = hoursWorked
        this.hourlyRate = hourlyRate

        this.salary = this.getSalary();
    }

    getSalary(): number{
        this.salary = this.hoursWorked * this.hourlyRate
        return this.salary
    }

    calculateTax(): number {
        return this.salary * 0.15
    }
    
    showDetails(): void {
        super.showDetails()
        console.log(`Hours worked : ${this.hoursWorked}`)
        console.log(`Hourly rate : ${this.hourlyRate}`)
        console.log(this.getSalary())
        console.log(this.calculateTax())
    }
}