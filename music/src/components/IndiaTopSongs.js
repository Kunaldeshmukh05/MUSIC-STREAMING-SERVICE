import React, { useState, useEffect } from "react";
import axios from "axios";
import "./IndiaTopSongs.css";

const IndiaTopSongs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIndiaTopSongs = async () => {
      try {
        const response = await axios.get("/indiatopsongs");
        setSongs(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching top Indian songs");
        setLoading(false);
      }
    };

    fetchIndiaTopSongs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="songs-container1">
      <h2>Top 50 Songs in India</h2>
      <ol>
        {songs.map((song, index) => (
          <li key={index}>
            <p>{song.name}</p>
            <p>{song.artist}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default IndiaTopSongs;
