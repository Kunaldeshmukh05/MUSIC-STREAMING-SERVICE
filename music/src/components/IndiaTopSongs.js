import React, { useState, useEffect } from "react";
import axios from "axios";
import "./topHindi.css";

const IndiaTopSongs = () => {
  const [indiatopsongs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("/indiatopsongs");
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
      <h1>Top 50 India</h1>
      <ol>
        {indiatopsongs.map((song) => (
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

export default IndiaTopSongs;
