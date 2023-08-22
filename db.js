// const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://karanssoni2002:KaranMongo2002@karanscluster.j4ai1as.mongodb.net/';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// let database;

// async function connect() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');

//     database = client.db('ChatDB'); // Replace with your database name
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// function getDatabase() {
//   return database;
// }

// module.exports = { connect, getDatabase };

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
