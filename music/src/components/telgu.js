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
    <>
      <h2>Telgu Hits</h2>
      <div>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              {song.title} - {song.artist}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Telgu;
