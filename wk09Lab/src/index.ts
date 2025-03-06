import Employee from "./Employee";
import PartTimeEmployee from "./PartTimeEmployee";
import Student from "./Student"
console.log(`Week 9 - Intro to TypeScript`)

console.log(`Working with Student class\n`)

let stud1 = new Student(1, "John", "Doe", 80.0)
stud1.showDetails();

let stud2 = new Student(2, "Janen", "Doe", 80.0)
stud2.showDetails();

console.log(`Working with Employee class\n`)
let emp1 = new Employee(1, "John", "Doe", "IT")
emp1.showDetails()

emp1.salary = 50000
console.log(`Salary : ${emp1.getSalary()}`)
console.log(`Tax : ${emp1.calculateTax()}`)

let emp2 = new Employee(2, "Jane", "Doe", "HR")
emp2.showDetails()

emp2.firstName= "Jill"
emp2.department= "Finance"
emp2.salary = 60000
emp2.showDetails()

console.log(`Working with Part time employee`)
let emp3 = new PartTimeEmployee(3, "John", "Doe", "HR", 180, 30)
emp3.showDetails()

/*
zip whole project
word doc on 
a. output of index.js
b. output of basics.js
*/ 