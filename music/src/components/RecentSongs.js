import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecentSongs = () => {
  const [recentSongs, setRecentSongs] = useState([]);

  useEffect(() => {
    const fetchRecentSongs = async () => {
      try {
        const response = await axios.get("/songs/recent");
        const fetchedRecentSongs = response.data;
        setRecentSongs(fetchedRecentSongs);
      } catch (error) {
        console.error("Error fetching recent songs:", error);
      }
    };

    fetchRecentSongs();
  }, []);

  return (
    <div className="container">
      <h1>
        <Link to="/recent">Songs</Link>
      </h1>
      <ul>
        {recentSongs.map((song) => (
          <li key={song._id}>
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSongs;
