const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const PORT = 3000;
const client = new MongoClient("mongodb://127.0.0.1:27017/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); // Require path module for resolving paths
app.use(cors());
app.use(bodyParser.json());

// Serve static audio files from the /audio endpoint
app.use("/audio", express.static(path.join(__dirname, "audio"))); // Use path.join to ensure platform-independent path joining

const db = client.db("db");

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
}

// Error handling for MongoDB connection
client.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1); // Exit the process if there is a MongoDB connection error
});

connectToMongoDB();

// Close MongoDB client when the server shuts down
process.on("SIGINT", () => {
  client.close();
  console.log("MongoDB connection closed");
  process.exit();
});

const collectionNames = [
  "BollywoodParty",
  "GlobalParty",
  "HindiSongs",
  "MarathiSongs",
  "TopIndia",
  "TelguHits",
  "GlobalSongs",
];
app.get("/song", async (req, res) => {
  try {
    const collection = db.collection("HindiSongs");
    const song = await collection.findOne({}); // Retrieve the first document

    // Check if a song is found
    if (song) {
      res.json(song);
    } else {
      // If no song is found, return an appropriate error message
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

//Telgu songs

app.get("/telgu", async (req, res) => {
  try {
    const collection = db.collection("TelguHits");
    const songs = await collection.find({}).toArray();
    res.json(songs);
  } catch (error) {
    console.error("Error fetching Telgu hits:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

/*trying to get the songpath with url
const path = require("path");

app.get("/songs", async (req, res) => {
  try {
    const collection = db.collection("HindiSongs");
    const songs = await collection.findOne({});

    // Construct the file paths dynamically using Express's static middleware
    const songsWithPath = songs.map((song) => {
      return {
        ...song,
        filePath: `/audio/${song.audioPath}`, // Constructing the relative file path
      };
    });
    res.json(songsWithPath);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
*/
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
