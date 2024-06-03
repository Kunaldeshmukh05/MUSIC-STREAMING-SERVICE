import React from "react";
import "./IndiaTopSongs.css";

const IndiaTopSongs = ({ songs }) => {
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
