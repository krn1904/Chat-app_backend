const express = require('express');
const db = require('./db'); // Adjust the path to your db.js file
const { createServer } = require("http");
const mongoose = require('mongoose');
const { Server } = require("socket.io"); 
const cors = require('cors') // Import the cors middleware
const { CreateUser } = require('./UserController/Users');
// const { connect } = require('./db')
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer)
const port = 3002;
const uri = 'mongodb+srv://karanssoni2002:KaranMongo2002@karanscluster.j4ai1as.mongodb.net/';


app.use(cors()); // Use the cors middleware
app.use(express.json());


// //handle conncection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle custom events and messages here

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

//connect to the database
async function startServer() {
  await connect();
  
  httpServer.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}
app.post('/createUser',CreateUser)

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}
startServer();
