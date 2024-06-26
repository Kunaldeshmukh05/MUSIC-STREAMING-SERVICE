import React, { useState, useEffect } from "react";
import axios from "axios";
import "./topHindi.css";

const GlobalSongs = () => {
  const [globalSongs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("/globalSongs");
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
      <h1>Global Songs</h1>
      <ol>
        {globalSongs.map((song) => (
          <li key={song.id}>
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
            <p>{song.album}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GlobalSongs;
