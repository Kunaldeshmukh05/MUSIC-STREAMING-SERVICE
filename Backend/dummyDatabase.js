const { MongoClient } = require("mongodb");

// MongoDB connection string
const mongoURI = "mongodb://127.0.0.1:27017";
const dbName = "db";

let db;

// Connect to MongoDB
async function connectDB() {
  try {
    const client = new MongoClient("mongodb://127.0.0.1.27017", {
      useUnifiedTopology: true,
    });
    await client.connect();
    console.log("MongoDB connected");
    db = client.db(db);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
}

function getDB() {
  return db;
}

module.exports = { connectDB, getDB };
