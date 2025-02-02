# MongoDB + NodeJS + ExpressJs

## Task: View this topic
### Description
- Download and extract this file
- Open the project in VS Code
- Open Terminal. Make sure you are within the project directory.
- Execute npm install to download necessary dependencies
- Execute npx nodemon index.js to run the project

## Signup here for free

- <https://www.mongodb.com/pricing/>

## Setup

- <https://docs.atlas.mongodb.com/getting-started/>
- <https://docs.mongodb.com/manual/installation/>

## Tutorials

- <https://www.digitalocean.com/community/tutorials/how-to-create-retrieve-update-and-delete-records-in-mongodb/>
- <https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/>
- https://masteringjs.io/mongoose
- http://tutorialtous.com/mongoose/mongooseapi.php
-https://masteringjs.io/tutorials/mongoose/find


## Sample Code to connect mongoDB using MongoClient

```const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://sa:<password>@cluster0.qa3t4.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});```


