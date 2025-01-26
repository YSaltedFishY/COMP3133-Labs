//initialize the socket.io for client access using io() function
const clientIO = io()

const logsDiv = document.getElementById('event-log');

const logEvent = (message) => {
    const logEntry = document.createElement('p');
    logEntry.classList.add('log-entry');
    logEntry.textContent = message;
    logsDiv.appendChild(logEntry);
    logsDiv.scrollTop = logsDiv.scrollHeight; 
};

const sendPing = () => {
    logEvent(`Ping button clicked`);

    //trigger 'ping' event from client to server
    //emit() function sends event
    //emit(event_name, (optional) additional_data)
    const message = "Hello from client"
    clientIO.emit('ping', message)
    logEvent(`Sent: ping event emitted with message : ${message}`)
};

const sendChatMessage = () => {
    logEvent('Chat button clicked');

    const message = document.getElementById('message-input').value
    if(message.trim()){
        clientIO.emit('chat-message', message)
        logEvent(`Sent : ${message}`)
    }else{
        logEvent(`Message is empty. Can't send.`)
    }
};

const sendFeedback = () =>{
    const category = document.getElementById('feedback-category').value;
    const userInput = document.getElementById('feedback-message').value;

    const feedback = {
        date : new Date(),
        user: clientIO.id,
        category: category,
        message: userInput
    }

    clientIO.emit('send-feedback', feedback)

    logEvent(`Feedback sent : ${JSON.stringify(feedback)}`)
    logEvent('Feedback button clicked');
};

clientIO.on('hello', (response)=>{
    logEvent(`ping was successful. Server responded with : ${response}`)
})

clientIO.on('chat-acknowledgement', ()=>{
    alert("Message delivered")
})

clientIO.on('feedback-acknowledgement', (data)=>{
    alert(data.message)
})
