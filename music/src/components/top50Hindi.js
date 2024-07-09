import React, { useState, useEffect } from "react";
import axios from "axios";

const Top50 = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("/song");
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div>
      {songs.length > 0 ? (
        songs.map((song) => (
          <div key={song.id}>
            <h2>{song.title}</h2>
            <audio controls>
              <source src={`${song.audioPath}`} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Top50;
