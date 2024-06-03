import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainBar.css";
import FooterPanel from "./footerPanel";
import axios from "axios";
import IndiaTopSongs from "./IndiaTopSongs"; // Import the IndiaTopSongs component

const MainBar = () => {
  const [indiaTopSongs, setIndiaTopSongs] = useState([]); // State to store top Indian songs
  const [showIndiaTopSongs, setShowIndiaTopSongs] = useState(false); // State to track if IndiaTopSongs should be shown

  useEffect(() => {
    if (showIndiaTopSongs && indiaTopSongs.length === 0) { // Fetch songs only when the link is clicked and if songs are not already fetched
      const fetchIndiaTopSongs = async () => {
        try {
          const response = await axios.get("/indiatopsongs");
          setIndiaTopSongs(response.data);
        } catch (error) {
          console.error("Error fetching top Indian songs:", error);
        }
      };
      fetchIndiaTopSongs();
    }
  }, [showIndiaTopSongs, indiaTopSongs.length]);

  return (
    <>
      <div>
        <div className="shop-section">
          <div className="box box1">
            <div className="box-img"></div>
            <div className="box-content">
              <p onClick={() => setShowIndiaTopSongs(true)}>
                TOP 50 INDIA
              </p>
            </div>
          </div>

          <div className="box box2">
            <div className="box-img"></div>
            <div className="box-content">
              <p>
                <Link to="/MainBar/globalSongs">
                  <p>GLOBAL TOP 100</p>
                </Link>
              </p>
            </div>
          </div>

          <div className="box box3">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/top50Hindi">
                <p>TOP HINDI SONGS</p>
              </Link>
            </div>
          </div>

          <div className="box box4">
            <div className="box-img"></div>
            <div className="box-content">
              <p> TRENDING SONGS</p>
            </div>
          </div>

          <div className="box box5">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/MarathiSongs">
                <p>TOP 50 MARATHI</p>
              </Link>
            </div>
          </div>

          <div className="box box6">
            <div className="box-img bollywood"></div>
            <div className="box-content">
              <Link to="/MainBar/BollywoodPartySongs">
                <p>BOLLYWOOD PARTY</p>
              </Link>
            </div>
          </div>

          <div className="box box7">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/top50Hindi">
                <p>Hot Hits Hindi</p>
              </Link>
            </div>
          </div>

          <div className="box box8">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/GlobalPartySongs">
                <p>Global PARTY SONGS</p>
              </Link>
            </div>
          </div>

          <div className="box box9">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/telgu">
                <p>Telgu Top Hits</p>
              </Link>
            </div>
          </div>

          <div className="box box8">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/GlobalPartySongs">
                <p>Global PARTY SONGS</p>
              </Link>
            </div>
          </div>
          <FooterPanel />
        </div>
        {showIndiaTopSongs && <IndiaTopSongs songs={indiaTopSongs} />} {/* Conditionally render IndiaTopSongs */}
       
        
      </div>
    </>
  );
};

export default MainBar;
