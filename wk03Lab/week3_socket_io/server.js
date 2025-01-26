// npm install express socket.io nodemon
// to run the app npx nodemon server.js

const express = require('express')
const app = express()
const path = require('path');
const PORT = process.env.PORT || 3000

//Import socket server object from socket.io module
const { Server } = require('socket.io')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client.html'))
})

//start listening to server on PORT
const appServer = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`)
})

//Associate app server with socket server
const io = new Server(appServer)

//on() function listens to connection event
//When the event occurs, callback is executed
io.on("connection", (socket)=>{
    console.log(`Client connected. Client ID : ${socket.id}`)

    socket.on('ping', (data)=>{
        console.log(`ping event received from client. data : ${data}`)

        //trigger hello event from server to client
        socket.emit('hello','hello from server')
    })

    //listen for 'chat-message' event
    socket.on('chat-message', (data)=>{
        console.log(`Chat message received from client : ${data}`)

        //acknowledge message receipt
        socket.emit('chat-acknowledgement')
    })

    socket.on('send-feedback', (data)=>{
        console.log(`Feed back received from client: ${JSON.stringify(data)}`)

        //Group all the feedback based on category
        // socket.join(data.category)

        //trigger event for all members
        // io.to(data.category).emit('new-policy', 'policy updates.')

        socket.emit('feedback-acknowledgement', {message: `Thanks for your feedback. we appreciate it.`})
    })

    socket.on("disconnect",()=>{
        console.log(`Client ${socket.id} has been disconnected `)
    })
})