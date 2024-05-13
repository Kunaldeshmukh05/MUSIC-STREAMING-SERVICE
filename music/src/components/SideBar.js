import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { VscLibrary } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar" style={{ height: "auto", width: "auto" }}>
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
            <Link to="/SideBar/LikedSongs" >
              <FaHeart /> Liked Songs
            </Link>
          </button>
        
        <hr></hr>
      </div>
      <div className="recent-render">
      <div className="sidebar-button-group">
          <button className="sidebar-button2">
            <Link to="/SideBar/RecentSongs">Recent Songs</Link>
          </button>
        </div>
      </div>



        


    </div>
  );
};

export default Sidebar;
