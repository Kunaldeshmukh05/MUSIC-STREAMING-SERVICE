// HomePage.js

import React from "react";
import NavBar from "./NavBar";
import "./HomePage.css";
import MainBar from "./MainBar";
import Sidebar from "./SideBar";

const HomePage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Sidebar></Sidebar>
      <MainBar></MainBar>
    </>
  );
};

export default HomePage;
