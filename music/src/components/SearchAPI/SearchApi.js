import React, { useState } from 'react';
import axios from 'axios';
import './SearchAPi.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/search?query=${query}`);
      setResults(response.data.tracks);
    } catch (error) {
      console.error("Error searching songs:", error);
    
    
    }
  };

  return (
    <div >
<span className='Sapi'>
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
</span>      
      <button className="Sbut" onClick={handleSearch}>🔍
</button>

      <ul>
        {results.map((track, index) => (
          <li key={index}>{track.title}</li>
        ))}
      </ul>
    </div>

  );
};

export default Search;



