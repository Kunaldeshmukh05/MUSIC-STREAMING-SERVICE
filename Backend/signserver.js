const express = require("express");
const { MongoClient } = require("mongodb");

const app = express(); // Initialize Express app
const PORT = process.env.PORT || 8000;
const MONGODB_URI = "mongodb://localhost:27017";
const DB_NAME = "db";
const COLLECTION_NAME = "userprofiles";

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
let db;

async function connectToMongoDB() {
  try {
    const client = new MongoClient(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db(DB_NAME); // Specify the database name
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

// Call the function to connect to MongoDB
connectToMongoDB();

// Endpoint for user signup
app.post("/users", async (req, res) => {
  try {
    const newUser = req.body;

    // Check if the username or email already exists
    const existingUser = await db.collection(COLLECTION_NAME).findOne({
      $or: [{ username: newUser.username }, { email: newUser.email }],
    });

    if (existingUser) {
      res.status(400).json({ error: "Username or email already exists" });
    } else {
      // Insert the new user into the collection
      const result = await db.collection(COLLECTION_NAME).insertOne(newUser);
      const insertedUser = result.ops[0];

      res
        .status(201)
        .json({ message: "User signed up successfully", user: insertedUser });
    }
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
