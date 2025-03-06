//definition of the student class
export default class Student{
    studentID : number 
    firstName : string
    lastName : string = "NA"
    percentage : number = 0.0

    //class attributes must be initialized
    //either with default values or in the constructor

    //constructor
    constructor(studentID : number, firstName : string, lastName: string, percentage : number){
        this.studentID = studentID
        this.firstName = firstName
        this.lastName = lastName
        this.percentage = percentage
    }

    showDetails(){
        console.log(`\n student ID: ${this.studentID}`)
        console.log(`Student Name : ${this.firstName} ${this.lastName}`)
        console.log(`Percentage : ${this.percentage}`)
    }
}

//another export example
// export default Student
