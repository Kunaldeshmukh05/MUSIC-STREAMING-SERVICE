import React, { useState, useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/data"); // Example API endpoint
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
};

export default MyComponent;
