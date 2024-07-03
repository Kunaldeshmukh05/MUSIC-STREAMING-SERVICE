import React from "react";
import NavBar from "./NavBar";
import "./HomePage.css";
import Footer from "./Footer";
import MainBar from "./MainBar";
import Sidebar from "./SideBar";

const HomePage = () => {
  return (
    <div className="Home">
      <NavBar></NavBar>
    
      <div className="homepage-container">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="main-bar-wrapper"></div>
        <MainBar></MainBar>
      </div>
      
      <div className="Footer-wrapper">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomePage;
