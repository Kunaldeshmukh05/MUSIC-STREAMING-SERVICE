import React, { useState, useEffect } from "react";
import axios from "axios";

const Top50 = () => {
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get("/song");
        setSong(response.data);
      } catch (error) {
        console.error("Error fetching song:", error);
      }
    };

    fetchSong();
  }, []);

  return (
    <div>
      {song ? (
        <div>
          <h2>{song.title}</h2>
          <audio controls>
            <source src={song.audioPath} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Top50;
