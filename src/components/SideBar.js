// Sidebar.js
import React from "react";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-buttons">
        <button className="sidebar-button">Your Library</button>
        <button className="sidebar-button">Prev</button>
        <button className="sidebar-button">Next</button>
      </div>
    </div>
  );
};

export default Sidebar;
