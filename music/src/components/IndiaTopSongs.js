import React, { useEffect, useState } from "react";
import "./topHindi.css";

const IndiaTopSongs = ({ songs }) => {
  const [indiaTopSongs, setIndiaTopSongs] = useState([]);

  useEffect(() => {
    if (songs) {
      setIndiaTopSongs(songs); // Set the fetched top Indian songs to state
    }
  }, [songs]);

  // Handle case when songs is undefined
  if (!songs) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  return (
    <div>
      <br />
      <br />
      <div className="songs-container">
        <h1>Top 50 India</h1>
        <ol>
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
