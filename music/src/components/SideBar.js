import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar" style={{ height: "auto", width: "auto" }}>
        <div className="sidebar-buttons">
          <button className="sidebar-button">
            <Link to="/SideBar/Lib">Your Library</Link>
          </button>
        </div>

        <div className="sidebar-button-group">
          <button className="sidebar-button1">
            <Link to="/SideBar/LikedSongs"> Liked Songs</Link>
          </button>
          <button className="sidebar-button2">
            <Link to="/SideBar/RecentSongs">Recent Songs</Link>
          </button>
        </div>
        <br></br>

        <div className="song-info-box">
          <h4>Your Song</h4>
          <div className="song-image"></div>
          <div className="song-details">
            <p> Khabon Ke Parinde </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
