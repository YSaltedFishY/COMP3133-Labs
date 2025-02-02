const express = require('express');
const mongoose = require('mongoose');

const SERVER_PORT = process.env.PORT || 3000
const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://Admin:pDiGDgich3CcFvBw@cluster0.2tyy8.mongodb.net/ALabEx3?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

// app.use(employeeRouter);

app.listen(SERVER_PORT, () => { console.log(`Server is running... at ${SERVER_PORT}`) });
