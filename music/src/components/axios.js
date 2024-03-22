import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Kunal.css";

const Kunal = () => {
  const [hindiSongs, setHindiSongs] = useState([]);

  useEffect(() => {
    const fetchHindiSongs = async () => {
      try {
        const response = await axios.get("/api/hindi-songs");
        setHindiSongs(response.data);
      } catch (error) {
        console.error("Error fetching Hindi songs:", error);
      }
    };

    fetchHindiSongs();
  }, []);

  return (
    <div>
      <h1>Hindi Songs</h1>
      <ul>
        {hindiSongs.map((song, index) => (
          <li key={index}>
            {song.song} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kunal;
