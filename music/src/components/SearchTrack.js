import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const Main = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/search?query=${query}`);
      setSearchResults(response.data.tracks); // Adjust based on your API response structure
    } catch (error) {
      console.error("Error searching tracks:", error);
    }
  };

  return (
    <div>
      <NavBar handleSearch={handleSearch} /> {/* Passing handleSearch function */}
      
      <ul>
        {searchResults.map((track) => (
          <li key={track._id}>{track.title} by {track.artist}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Main;
