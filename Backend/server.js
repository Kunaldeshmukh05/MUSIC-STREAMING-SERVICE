const express = require("express");
const axios = require("axios");
const app = express();
const { MongoClient } = require("mongodb");
const PORT = 3000;
const client = new MongoClient("mongodb://127.0.0.1:27017/db");
const cors = require("cors");
app.use(cors());
app.use("/audio", express.static(__dirname + "/audio")); // Changed the path to serve audio files
const db = client.db("db");
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
connectToMongoDB();

// Endpoint to get a song by title
app.get("/songs/title/:songTitle", async (req, res) => {
  const songTitle = req.params.songTitle;
  try {
    const db = client.db("db");
    const collection = db.collection("HindiSongs");
    const song = await collection.findOne({ title: songTitle });
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ error: "Song not found" });
    }
  } catch (error) {
    console.error("Error fetching song by title:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/songs", async (req, res) => {
  try {
    const collection = db.collection("HindiSongs");
    const songs = await collection.findOne  ({}).toArray();
    res.json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Marathi songs
app.get("/marathisongs", async (req, res) => {
  try {
    const db = client.db("db");
    const collection = db.collection("MarathiSongs");
    const songs = await collection.find({}).toArray();
    res.json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Bollywood party songs

app.get("/bollywoodpartysongs", async (req, res) => {
  try {
    const db = client.db("db");
    const collection = db.collection("BollywoodParty");
    const songs = await collection.find({}).toArray();
    res.json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/signup", async (req, res) => {
  try {
    // Ensure req.body is defined and contains name and email properties
    const newUser = req.body;
    if (!newUser || !newUser.name || !newUser.email) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const existingUser = await db.collection("userprofiles").findOne({
      $or: [{ name: newUser.name }, { email: newUser.email }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    const result = await db.collection("userprofiles").insertOne(newUser);
    const insertedUser = result.ops[0];
    return res
      .status(201)
      .json({ message: "User signed up successfully", user: insertedUser });
  } catch (error) {
    console.error("Error signing up user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

//Global Party Songs

app.get("/globalpartysongs", async (req, res) => {
  try {
    const db = client.db("db");
    const collection = db.collection("GlobalParty");
    const songs = await collection.find({}).toArray();
    res.json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//yop 50 india songs
app.get("/indiatopsongs", async (req, res) => {
  try {
    const db = client.db("db");
    const collection = db.collection("TopIndia");
    const songs = await collection.find({}).toArray();
    res.json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/globalsongs", async (req, res) => {
  try {
    const db = client.db("db");
    const collection = db.collection("GlobalSongs");
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
    const
    
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/songsTitle", async (req, res) => {
  try {
    const db = client.db("db"); // Assuming "db" is your database name
    const collection = db.collection("HindiSongs");
    const documents = await collection.find({ Title: "Tum hi ho" }).toArray();
    res.send(documents);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/globalSongs", async (req, res) => {
  try {
    const db = client.db("db");
    const collection = db.collection("GlobalSongs");
    const documents = await collection.find({}).toArray();
    res.send(documents);
  } catch (error) {
    console.error("Error while fetching data", error);
    res.sendStatus(500).send("Internal Server Error");
  }
});


app.get("/api/search", async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${query}&type=track`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error searching tracks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
