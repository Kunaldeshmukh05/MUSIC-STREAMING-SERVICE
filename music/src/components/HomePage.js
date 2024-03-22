// HomePage.js
import React from "react";
import NavBar from "./NavBar";
import "./HomePage.css";
import Footer from "./Footer";
import MainBar from "./MainBar";
import Sidebar from "./SideBar";

const HomePage = () => {
  return (
    <>
      <div className="Home">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <NavBar></NavBar>
        <div className="homepage-container">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="main-bar-wrapper"></div>
          <MainBar></MainBar>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default HomePage;
