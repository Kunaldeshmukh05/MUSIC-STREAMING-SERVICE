import React, { useState } from "react";
import axios from "axios";
import "./SearchSongs.css";
import {Button} from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";
const SearchSongs = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please Enter a Song");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`/api/search?query=${encodeURIComponent(query)}`);
      setResults(response.data.tracks);
    } catch (error) {
      setError("Error fetching songs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <span className="search-container">
      <div className="d-fl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search "
      />
      <Button variant="outline-light" className="outline-light" onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : <FaSearch />}
      </Button>

</div>

      {error && <p className="error">{error}</p>}
      {results.length > 0 && (
        <div className="results-container">
          <h4>Result {results.length} songs:</h4>
          <ol>
            {results.map((song, index) => (
              <li key={index}>
                <p><strong></strong> {song.title}</p>
                <p><strong>By</strong> {song.artist}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
      {results.length === 0 && !loading &&<p></p>}
    </span>
  );
};

export default SearchSongs;
