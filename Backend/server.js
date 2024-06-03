const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const Post = require('./models/post');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/audio", express.static(path.join(__dirname, "audio")));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// MongoDB setup (Mongoose)
mongoose.connect('mongodb://localhost:27017/db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// MongoDB setup (MongoClient)
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017/db");

const collectionNames = [
  "BollywoodParty",
  "GlobalParty",
  "HindiSongs",
  "MarathiSongs",
  "TopIndia",
  "TelguHits",
  "GlobalSongs",
];

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

client.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

connectToMongoDB();

process.on("SIGINT", () => {
  client.close();
  console.log("MongoDB connection closed");
  process.exit();
});

// User schema
const userSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  email: String,
  password: String,
  profilePicture: String,
  playlists: [{
    name: String,
    songs: [String]
  }]
});


//endpoint to add post
app.post('/posts', upload.single('media'), async (req, res) => {
  const { description } = req.body;
  const media = req.file ? req.file.filename : null;

  try {
    const newPost = new Post({
      description,
      media,
    });

    await newPost.save();
    res.status(201).json({ message: 'Post uploaded successfully', post: newPost });
  } catch (error) {
    console.error('Error uploading post', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Post endpoints
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error while fetching posts' });
  }
});

// Song endpoints
app.get("/song", async (req, res) => {
  try {
    const collection = client.db("db").collection("HindiSongs");
    const song = await collection.find({}).toArray();
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ error: "No song found" });
    }
  } catch (error) {
    console.error("Error fetching song:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/artists", async (req, res) => {
  try {
    let artists = [];
    for (const collectionName of collectionNames) {
      const collection = client.db("db").collection(collectionName);
      const distinctArtists = await collection.distinct("artist");
      artists = [...artists, ...distinctArtists];
    }
    const uniqueArtists = Array.from(new Set(artists));
    res.json(uniqueArtists);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/songs/title/:songTitle", async (req, res) => {
  const songTitle = req.params.songTitle;
  try {
    const collection = client.db("db").collection("HindiSongs");
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

// Additional endpoints for serving collections
const collectionEndpoints = {
  "telgu": "TelguHits",
  "marathisongs": "MarathiSongs",
  "bollywoodpartysongs": "BollywoodParty",
  "globalpartysongs": "GlobalParty",
  "indiatopsongs": "TopIndia",
  "globalsongs": "GlobalSongs"
};

Object.entries(collectionEndpoints).forEach(([endpoint, collectionName]) => {
  app.get(`/${endpoint}`, async (req, res) => {
    try {
      const collection = client.db("db").collection(collectionName);
      const songs = await collection.find({}).toArray();
      res.json(songs);
    } catch (error) {
      console.error(`Error fetching songs from ${collectionName}:`, error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

app.get("/songs/liked", async (req, res) => {
  try {
    const collection = client.db("db").collection("HindiSongs");
    const likedSongs = await collection.find({ liked: true }).toArray();
    res.json(likedSongs);
  } catch (error) {
    console.error("Error fetching liked songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/songs/recent", async (req, res) => {
  try {
    const collection = client.db("db").collection("HindiSongs");
    const recentSongs = await collection.find({ recent: true }).toArray();
    res.json(recentSongs);
  } catch (error) {
    console.error("Error fetching recent songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/songs/top", async (req, res) => {
  try {
    const collection = client.db("db").collection("HindiSongs");
    const topSongs = await collection.find({ top: true }).toArray();
    res.json(topSongs);
  } catch (error) {
    console.error("Error fetching top songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Search API
app.get("/api/search", async (req, res) => {
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const db = client.db("db");
    const searchResults = [];

    const searchPromises = collectionNames.map(async (collectionName) => {
      const collection = db.collection(collectionName);
      const tracksInCollection = await collection.find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { artist: { $regex: query, $options: "i" } },
        ],
      }).toArray();
      return tracksInCollection;
    });

    const results = await Promise.all(searchPromises);
    results.forEach(tracks => searchResults.push(...tracks));
    res.json({ tracks: searchResults });
  } catch (error) {
    console.error("Error searching tracks:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
