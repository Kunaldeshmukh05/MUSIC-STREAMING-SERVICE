const express = require("express"); // Move this line up
const { MongoClient } = require("mongodb");

const app = express();

app.use(express.json());

const songsRouter = require("./server"); // Corrected require path

app.use("/", songsRouter); // Corrected path

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const router = express.Router();

const hindiSongs = require("./db");

router.get("/", (req, res) => {
  res.json(hindiSongs);
});

router.get("/liked", (req, res) => {
  const likedSongs = hindiSongs.filter((song) => song.liked);
  res.json(likedSongs);
});

router.get("/recent", (req, res) => {
  const recentSongs = hindiSongs.filter((song) => song.recent);
  res.json(recentSongs);
});

router.get("/artist/:artistName", (req, res) => {
  const artistName = req.params.artistName;
  const songsByArtist = hindiSongs.filter((song) => song.artist === artistName);
  res.json(songsByArtist);
});

module.exports = router;
