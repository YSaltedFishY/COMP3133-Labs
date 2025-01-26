console.log(`Week 1 - Buffer Examples`)

//create a buffer from String data
let buf1 = Buffer.from('Hello')

//template literals
console.log(buf1)
//Shows the String
console.log(`buf1 : ${buf1}`)
//console.log(`5 plus 6 is ${5 + 6}`)
console.log(buf1.toString())

console.log(`Buffer in JSON format : ${buf1.toJSON()}`)

console.log(buf1.toJSON())

//Task write a loop to iterate over the buffer
//show the value of element
console.log(`buf1[0] : ${buf1[0]}`)
console.log(`buf1[3] : ${buf1[3]}`)
for (let i = 0; i < buf1.length; i++){
    console.log(`buf1[${i}]: ${buf1[i]} => ${String.fromCharCode(buf1[i])}`) //ToString doesn't work here
}


console.log(`Buffer in String format : ${buf1.toString()}`)
console.log(`Buffer in JSON format : ${buf1.toJSON()}`)
console.log(`Buffer in HEX format : ${buf1.toString('hex')}`)
console.log(`Buffer in UTF-8 format : ${buf1.toString('utf-8')}`)
console.log(`Buffer in UTF-16 format : ${buf1.toString('utf-16le')}`)

//Windows + . is selecting emoji
buf1 = Buffer.from('🚚☎️📫')

console.log(`Buffer in String format : ${buf1.toString()}`)
console.log(`Buffer in JSON format : ${buf1.toJSON()}`)
console.log(`Buffer in HEX format : ${buf1.toString('hex')}`)
console.log(`Buffer in UTF-8 format : ${buf1.toString('utf-8')}`)
console.log(`Buffer in UTF-16 format : ${buf1.toString('utf-16le')}`)

console.log(`--------------------Buffer 2---------------------`)
//Allocate the size of the buffer when creating it
let buf2 = Buffer.alloc(10)
console.log(buf2)
console.log(`buf2: ${buf2.toString()}`)

buf2[3] = 'J'
buf2[6] = '🪭'
buf2[8] = 'K'
console.log(buf2)
console.log(`buf2: ${buf2.toString()}`)

buf2.write('J',3)
buf2.write('K',8)
buf2.write('P',4)
console.log(buf2)
console.log(`buf2: ${buf2.toString()}`)

buf2.write('COMP',5)
console.log(buf2)
console.log(`buf2: ${buf2.toString()}`)

// // // ERR_OUT_OF_RANGE
// buf2.write('Winter', 15)
// console.log(buf2)

//Buffer.concat()

console.log(`------concat---------`)
let buf3 = Buffer.concat([buf1, buf2])
console.log(`buf1 : ${buf1}`)
console.log(`buf2 : ${buf2}`)
console.log(`buf3 : ${buf3}`)

//Buffer.copy()
//buf2 copy into buf3
buf2.copy(buf3)
console.log(`buf2 : ${buf2}`)
console.log(`buf3 : ${buf3}`)

// Buffer.compare()
//Will return 0 if same
//non-zero value otherwise
let output = Buffer.compare(buf2, buf3)
console.log(`buf2 ${buf2} and buf3 ${buf3} are same ? : ${output}`)

buf2 = Buffer.from('ABC')
buf3 = Buffer.from('ABC')
output = Buffer.compare(buf2, buf3)
console.log(`buf2 ${buf2} and buf3 ${buf3} are same ? : ${output}`)