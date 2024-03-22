const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const PORT = 3000;
const client = new MongoClient("mongodb://127.0.0.1:27017");
const cors = require("cors");
app.use(cors());
app.use("./audio", express.static(__dirname + "./audio")); // Changed the path to serve audio files

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
connectToMongoDB();

app.get("/songs", async (req, res) => {
  try {
    const db = client.db("db");
    const collection = db.collection("HindiSongs");
    const songs = await collection.find({}).toArray();
    res.json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/songs/liked", async (req, res) => {
  try {
    const db = client.db("db");
    const collection = db.collection("HindiSongs");
    const likedSongs = await collection.find({ liked: true }).toArray();
    res.json(likedSongs);
  } catch (error) {
    console.error("Error fetching liked songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to get recent songs
app.get("/songs/recent", async (req, res) => {
  try {
    const db = client.db("db");
    const collection = db.collection("HindiSongs");
    const recentSongs = await collection.find({ recent: true }).toArray();
    res.json(recentSongs);
  } catch (error) {
    console.error("Error fetching recent songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to get top songs
app.get("/songs/top", async (req, res) => {
  try {
    const db = client.db("db");
    const collection = db.collection("HindiSongs");
    const topSongs = await collection.find({ top: true }).toArray();
    res.json(topSongs);
  } catch (error) {
    console.error("Error fetching top songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to get songs by artist
app.get("/songs/artist/:artistName", async (req, res) => {
  const artistName = req.params.artistName;
  try {
    const db = client.db("db");
    const collection = db.collection("HindiSongs");
    const songsByArtist = await collection
      .find({ artist: artistName })
      .toArray();
    res.json(songsByArtist);
  } catch (error) {
    console.error("Error fetching songs by artist:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/users", async (req, res) => {
  try {
    res.json(userprofiles);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//login and signup endpoints started from here contains find users get users
// get user by id , create new user

app.get("/users/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = userprofiles.find((user) => user.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to create a new user
app.post("/users", async (req, res) => {
  try {
    const newUser = req.body;
    userprofiles.push(newUser);
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to update an existing user
app.put("/users/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const updateUser = req.body;
    const index = userprofiles.findIndex((user) => user.id === userId);

    if (index !== -1) {
      userprofiles[index] = { ...userprofiles[index], ...updateUser };
      res.json({
        message: "User updated successfully",
        user: userprofiles[index],
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to delete a user by ID
app.delete("/users/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const index = userprofiles.findIndex((user) => user.id === userId);

    if (index !== -1) {
      userprofiles.splice(index, 1);
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to sign up a new user
app.post("/signup", async (req, res) => {
  try {
    const newUser = req.body;
    // Check if the username or email already exists
    const existingUser = userprofiles.find(
      (user) =>
        user.username === newUser.username || user.email === newUser.email
    );
    if (existingUser) {
      res.status(400).json({ error: "Username or email already exists" });
    } else {
      // Generate a unique ID for the new user
      const newUserId = userprofiles.length + 1;
      newUser.id = newUserId;
      userprofiles.push(newUser);
      res
        .status(201)
        .json({ message: "User signed up successfully", user: newUser });
    }
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
