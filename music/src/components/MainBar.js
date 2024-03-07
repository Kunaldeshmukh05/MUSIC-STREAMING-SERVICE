import React from "react";
import "./assets/top50.jpg";
import "./MainBar.css";
const MainBar = () => {
  return (
    <div>
      <div className="shop-section">
        <div className="main-panel"></div>
        <div className="box1 box" id="box1">
          <div className="box-content">
            <p>INDIA TOP 100</p>
            <div className="new">
              <img
                className="Main-img"
                src="./assets/top50.jpg"
                alt="Best songs loading..."
              ></img>
            </div>
          </div>
        </div>
        <div className="box2 box">
          <div className="box-content">
            <p>GLOBAL TOP 1O0</p>
            <div className="box-img"></div>
          </div>
        </div>
        <div className="box3 box">
          <div className="box-content">
            <p>TOP HINDI SONGS</p>
            <div className="box-img"></div>
          </div>
        </div>
        <div className="box4 box">
          <div className="box-content">
            <p>TOP TRENDING SONGS</p>
            <div className="box-img"></div>
          </div>
        </div>

        <div className="box1 box">
          <div className="box-content">
            <p>TOP 50 MARATHI</p>
            <div className="box-img">
              <img src="./assets/"></img>
            </div>
          </div>
        </div>
        <div className="box2 box">
          <div className="box-content">
            <p>BOLLYWOOD PARTY </p>
            <div className="box-img">
              <img
                className="bollywood"
                src="./assets/ab67616d00001e020acb5a72549287bf33b51b71ab67616d00001e0249079e6945b600abe668cae4ab67616d00001e02707ea5b8023ac77d31756ed4ab67616d00001e02d567bc615d8d891d112c8a35.jpg"
              ></img>
            </div>
          </div>
        </div>
        <div className="box3 box">
          <div className="box-content">
            <p>HOT HITS HINDI</p>
            <div className="box-img"></div>
          </div>
        </div>
        <div className="box4 box">
          <div className="box-content">
            <p>PARTY SONGS</p>
            <div className="box-img"></div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default MainBar;
