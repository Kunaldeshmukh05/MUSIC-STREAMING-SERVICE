// Sidebar.js
import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-buttons">
        <button className="sidebar-button">
          <nav>
            <Link to="/SideBar/Lib">Your Library</Link>
          </nav>
        </button>
        <button className="sidebar-button">
          <Link></Link>Prev
        </button>
        <button className="sidebar-button">Next</button>
      </div>
    </div>
  );
};

export default Sidebar;
