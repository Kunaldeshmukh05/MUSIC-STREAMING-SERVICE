// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect("mongodb://localhost/db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User model
const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
});

// Middleware
app.use(bodyParser.json());

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Create a new user document
    const newUser = new User({ username, email, password });
    // Save user to database
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
