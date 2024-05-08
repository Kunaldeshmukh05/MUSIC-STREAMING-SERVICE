import React, { useState, useEffect } from "react";
import axios from "axios";
import "./artist.css";

const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch artist names from backend API
    axios
      .get("http://localhost:3000/api/artists")
      .then((response) => {
        setArtists(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="artist-list-container">
      <h2 className="art">Your Favourite Artists</h2>
      {error && <p>Error: {error}</p>}
      <ol>
        {artists.map((artist) => (
          <li key={artist}>{artist}</li>
        ))}
      </ol>
    </div>
  );
};

export default ArtistList;
