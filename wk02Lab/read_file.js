const fs = require('fs')

// console.log(`Trying to read file input_file.txt`)

let filename = "input_file.txt"

// fs.readFile(filename, (err, data) =>{
//     if (err){
//         console.log(`Error while reading ${filename} : ${JSON.stringify(err)}`)
//     }else{
//         if(data){
//             console.log(`Data from ${filename} : \n${data}`)
//         }else{
//             console.log(`No data received from ${filename}`)
//         }
//     }
// })

// console.log(`Complete reading file ${filename}`)

//synchronous read operation

console.log(`\nTrying to read ${filename} synchronously`)

let fileData = fs.readFileSync(filename)
console.log(`fileData: ${fileData}`)


console.log(`\nComplete read ${filename} synchronously`)

//Use readFile within async function

const readFileData = async() =>{
    try{
        const data = await fs.promises.readFile(filename)
        console.log(`${data}`)
    }catch(err){
        console.log(`Error while reading file: ${JSON.stringify(err)}`)
    }
}

readFileData()