import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="recent-container">
    
      <ul>
        {recentSongs.map((song) => (
          <li key={song._id}>
            <p>{song.title}</p>
            <p>{song.artist}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSongs;
