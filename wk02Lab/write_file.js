const fs = require('fs')
let fileName = "output_file.txt"

console.log(`Trying to write to ${fileName}`)

let dataBuffer = Buffer.from("Good weather")

//Asynchronously writes data to a file
//if the file exists, writeFile() overwrites the existing data
//if file doesn't exist it will create the file
fs.writeFile(fileName, dataBuffer, (err)=>{
    if (err){
        console.log(`Unable to write to ${fileName}:
            ${JSON.stringify(err)}`)
    }else{
        console.log(`Data written successfully to ${fileName}`)
    }
})


dataBuffer = Buffer.from("Append data")


fs.writeFile(fileName, dataBuffer, { flag: 'a'},(err)=>{
    if (err){
        console.log(`Unable to write to ${fileName}:
            ${JSON.stringify(err)}`)
    }else{
        console.log(`Data written successfully to ${fileName}: \n${dataBuffer}`)
    }
})

dataBuffer = Buffer.from([1,2,3,4,5])

//writing synchronously to file
let err = fs.writeFileSync(fileName, dataBuffer)
if(err){
    console.log(`\nUnable to write to ${fileName}:
        ${JSON.stringify(err)}`)
}else{
    console.log(`\nSync writing completes successfully`)
}