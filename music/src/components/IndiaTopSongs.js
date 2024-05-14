import React, { useState, useEffect } from "react";
import "./topHindi.css";


const IndiaTopSongs = ({ songs }) => {
  // State to store top Indian songs
  const [indiaTopSongs, setIndiaTopSongs] = useState([]);

  useEffect(() => {
    // Set the fetched top Indian songs to state
    setIndiaTopSongs(songs);
  }, [songs]);

  return (
    <div>
      
      <br />
      <br />
      <div className="songs-container">
        {/* Wrap content in a container */}
        <h1>Top 50 India</h1>
        <ol>
          {/* Map through the top Indian songs and render them */}
          {indiaTopSongs.map((song) => (
            <li key={song.id}>
              <h2>{song.title}</h2>
              <p>{song.artist}</p>
              <p>{song.album}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default IndiaTopSongs;
