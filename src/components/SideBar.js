import React from "react";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        {/* Profile */}
        <button className="sidebar-button">Profile</button>
        {/* Your Library */}
        <button className="sidebar-button">Your Library</button>
        {/* Prev Toggle */}
        <button className="sidebar-button">Prev</button>
        {/* Next Toggle */}
        <button className="sidebar-button">Next</button>
      </div>
      {/* Box */}
      <div className="sidebar-box">
        <h2>Box Title</h2>
        <p>Box content goes here...</p>
      </div>
    </div>
  );
};

export default Sidebar;
