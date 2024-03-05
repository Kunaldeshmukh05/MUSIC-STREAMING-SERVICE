// HomePage.js

import React from "react";
import NavBar from "./NavBar";
import "./HomePage.css";
import MainBar from "./MainBar";
import Sidebar from "./SideBar";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <br></br>
      <br></br>
      <NavBar></NavBar>
      <Sidebar></Sidebar>
      <MainBar></MainBar>
    </>
  );
};

export default HomePage;
