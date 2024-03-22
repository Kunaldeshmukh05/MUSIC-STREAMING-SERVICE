import React, { useState, useEffect } from "react";
import axios from "axios";
import "./topHindi.css"; // Import your CSS file

const Top50 = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("/songs");
        const fetchedSongs = response.data;
        setSongs(fetchedSongs);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="songs-container">
      {" "}
      {/* Wrap content in a container */}
      <h1>Top Songs</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
            <audio controls>
              <source src={song.audioPath} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Top50;
