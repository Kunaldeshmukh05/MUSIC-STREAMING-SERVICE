import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

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
          <ReactPlayer url={song.audioPath} controls={true} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Top50;

/*import React, { useState, useEffect } from "react";
import axios from "axios";
import "./topHindi.css";

const Top50 = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("/songs");
        const fetchedSongs = response.data;
        setSongs(fetchedSongs);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="songs-container">
      <h1>Hindi Era</h1>
      <ol>
        {songs.map((song) => (
          <li key={song._id}>
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
            <audio controls>
              <source src={song.filePath} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Top50;
*/
