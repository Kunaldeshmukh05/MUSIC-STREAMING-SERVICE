import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import "./SideBar.css";
import { VscLibrary } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { MdManageAccounts } from "react-icons/md";
import RecentSongs from "./RecentSongs"; // Import RecentSongs component

const Sidebar = () => {
  const [showRecentSongs, setShowRecentSongs] = useState(false);

  const toggleRecentSongs = () => {
    setShowRecentSongs(!showRecentSongs);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar" style={{ height: "70vh", width: "auto" }}>
        <div className="sidebar-buttons">
          <button className="sidebar-button">
            <Link to="/SideBar/RecentSongs">
              <VscLibrary />
              &nbsp;Your Library
            </Link>
          </button>
        </div>

        <div className="artist">
          <Link to="/Sidebar/artist">
            <MdManageAccounts />
            &nbsp;Artists
          </Link>
        </div>

        <button className="sbar-button1">
          <Link to="/SideBar/LikedSongs">
            <FaHeart /> Liked Songs
          </Link>
        </button>

<button className="sbar-button10">
  <Link to='/SideBar/createPlaylist'><IoIosAddCircleOutline />  Create Playlist</Link>
</button>

        <hr></hr>
      </div>

      {/* Render the RecentSongs component in the sidebar if showRecentSongs is true */}
      {showRecentSongs && <RecentSongs />}
      
      {/* Button to toggle the visibility of the RecentSongs component */}
      <div className="sidebar-button-group">
        <Button  variant="outline" className="sidebar-button2" onClick={ toggleRecentSongs }>
          Recent Songs
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
