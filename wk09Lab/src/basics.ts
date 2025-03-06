//static typing
let message : string = "Hey there !"

let number : number = 40
let check : boolean = true

console.log(`message: ${message}, type : ${typeof message}`)
console.log(`number: ${number}, type : ${typeof number}`)
console.log(`check: ${check}, type : ${typeof check}`)

let x : any
console.log(`x: ${x}, type : ${typeof x}`);

x = 20
console.log(`x: ${x}, type : ${typeof x}`);

x = "Hello"
console.log(`x: ${x}, type : ${typeof x}`);

x = true
console.log(`x: ${x}, type : ${typeof x}`);

x = null
console.log(`x: ${x}, type : ${typeof x}`);

//Union type - allows a variable to have multiple types
let y : number | string

y = 20
console.log(`y: ${y}, type : ${typeof y}`);

y = "hello"
console.log(`y: ${y}, type : ${typeof y}`);

// //Error - y is union type of number and string 
// // can not be assigned to other type of values
// y = false
// console.log(`y: ${y}, type : ${typeof y}`);

function addNumber(a : number, b : number) : number{
    return a + b
}

console.log(`addNumber(10,20) : ${addNumber(10,20)}`)

let result = addNumber(40,20)
console.log(`result: ${result}`)