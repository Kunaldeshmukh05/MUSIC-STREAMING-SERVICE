// HomePage.js
import { Link } from "react-router-dom";
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
        <br></br>
        <br></br>
        <NavBar></NavBar>
        <Sidebar></Sidebar>
        <MainBar></MainBar>
        <Footer></Footer>
      </div>
    </>
  );
};

export default HomePage;
