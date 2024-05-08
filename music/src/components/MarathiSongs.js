import React, { useState, useEffect } from "react";
import axios from "axios";
import "./topHindi.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
const MarathiSongs = () => {
  const [marathisongs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("/marathisongs");
        const fetchedSongs = response.data;
        setSongs(fetchedSongs);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <>
    <NavBar></NavBar>
    <div className="songs-container">
      {" "}
      {/* Wrap content in a container */}
      <h1>Marathi Songs</h1>
      <ol>
        {marathisongs.map((song) => (
          <li key={song.id}>
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
            <p>{song.album}</p>
          </li>
        ))}
      </ol>
    </div>
    <Footer></Footer>
    </>
  );
};

export default MarathiSongs;




