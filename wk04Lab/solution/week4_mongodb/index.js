const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('WRITE_YOUR_MONGODB_CONNECTION_STRING_HERE', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log(`Error Mongodb connection: ${JSON.stringify(err)}`)
});

app.use(employeeRouter);

app.listen(8081, () => { console.log('Server is running...') });
