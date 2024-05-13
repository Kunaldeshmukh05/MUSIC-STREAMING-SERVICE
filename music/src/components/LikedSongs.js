import React, { useState, useEffect } from "react";
import axios from "axios";
import "./topHindi.css";
import { Link } from "react-router-dom";
import FooterPanel from "./footerPanel";
const LikedSongs = () => {
  const [likedSongs, setLikedSongs] = useState([]);

  useEffect(() => {
    const fetchLikedSongs = async () => {
      try {
        const response = await axios.get("/songs/liked");
        const fetchedLikedSongs = response.data;
        setLikedSongs(fetchedLikedSongs);
      } catch (error) {
        console.error("Error fetching liked songs:", error);
      }
    };

    fetchLikedSongs();
  }, []);

  return (
    <div className="container">
      {" "}
      <FooterPanel></FooterPanel>
      <h1>
        <Link to="/LikedSongs">Liked Songs</Link>
      </h1>
      <ul>
        {likedSongs.map((song) => (
          <li key={song._id}>
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedSongs;
