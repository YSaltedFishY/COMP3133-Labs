const fs = require('fs')

let fileName = "data.txt"

//open the file
/*
file modes
r - read only
w - write only
a - append
r+ - read and write
w+ - write and read
*/

fs.open(fileName, 'r+', (err, fd) => {
    if (err) {
        console.log(`Unable to open file ${fileName}:
            ${JSON.stringify(err)}`)
    } else {
        console.log(`File ${fileName} opened successfully`)

        let fileData = fs.readFileSync(fd)
        console.log(`${fileData}`)

        let dataToWrite = "Hey Thursday! Happy Friday"
        fs.write(fd, dataToWrite, (err) => {
            if (err) {
                console.log(`Unable to open file ${fileName}:
                    ${JSON.stringify(err)}`)
            }else{
                console.log(`Data written successfully!`)
                //Always remember to close the file
                fs.close(fd)
            }
        })


    }
})