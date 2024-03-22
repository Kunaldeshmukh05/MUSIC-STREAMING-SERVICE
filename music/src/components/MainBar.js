import React from "react";
import { Link } from "react-router-dom";
import "./MainBar.css";

const MainBar = () => {
  return (
    <div>
      <div>
        <div className="shop-section">
          <div className="box box1">
            <div className="box-img"></div>
            <div className="box-content">
              <p>
                <Link to="/MainBar/top50Hindi">TOP SONGS</Link>
              </p>
            </div>
          </div>

          <div className="box box2">
            <div className="box-img"></div>
            <div className="box-content">
              <p>GLOBAL TOP 1O0</p>
            </div>
          </div>

          <div className="box box3">
            <div className="box-img"></div>
            <div className="box-content">
              <p>TOP HINDI SONGS</p>
            </div>
          </div>

          <div className="box box4">
            <div className="box-img"></div>
            <div className="box-content">
              <p>TOP TRENDING SONGS</p>
            </div>
          </div>

          <div className="box box5">
            <div className="box-img"></div>
            <div className="box-content">
              <p>TOP 50 MARATHI</p>
            </div>
          </div>

          <div className="box box6">
            <div className="box-img bollywood"></div>
            <div className="box-content">
              <p>BOLLYWOOD PARTY</p>
            </div>
          </div>

          <div className="box box7">
            <div className="box-img"></div>
            <div className="box-content">
              <p>HOT HITS HINDI</p>
            </div>
          </div>

          <div className="box box8">
            <div className="box-img"></div>
            <div className="box-content">
              <p>PARTY SONGS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBar;
