import React, { useState, useEffect } from "react";
import axios from "axios";
import "./telgu.css";
const Telgu = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/telgu");
        setSongs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Telgu hits:", error);
        setError("An error occurred while fetching Telgu hits.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <><div className="Telgu-container">
      <h2>Telgu Hits</h2>
      <div>
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              <h2>{song.title}</h2>
              <span>{song.artist}</span>
              <span>{song.album}</span>
              <span>{song.duration}</span>
              <span>{song.genre}</span>
              <span>{song.category}</span>

            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
};

export default Telgu;
