import React from "react";
import { Link } from "react-router-dom";
import "./MainBar.css";
import FooterPanel from "./footerPanel";

const MainBar = () => {
  return (
    <>
      <div>
        <div className="shop-section">
          <div className="box box1">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/IndiaTopSongs">
                <p>TOP SONGS</p>
              </Link>
            </div>
          </div>

          <div className="box box2">
            <div className="box-img"></div>
            <div className="box-content">
              <p>
                <Link to="/MainBar/globalSongs">
                  <p>GLOBAL TOP 100</p>
                </Link>
              </p>
            </div>
          </div>

          <div className="box box3">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/top50Hindi">
                <p>TOP HINDI SONGS</p>
              </Link>
            </div>
          </div>

          <div className="box box4">
            <div className="box-img"></div>
            <div className="box-content">
              <p> TRENDING SONGS</p>
            </div>
          </div>
<div className="box box5">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/MarathiSongs">
                <p>TOP 50 MARATHI</p>
              </Link>
            </div>
          </div>
          <div className="box box5">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/MarathiSongs">
                <p>TOP 50 MARATHI</p>
              </Link>
            </div>
          </div>

          <div className="box box6">
            <div className="box-img bollywood"></div>
            <div className="box-content">
              <Link to="/MainBar/BollywoodPartySongs">
                <p>BOLLYWOOD PARTY</p>
              </Link>
            </div>
          </div>

          <div className="box box7">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/top50Hindi">
                <p>Hot Hits Hindi</p>
              </Link>
            </div>
          </div>

          <div className="box box8">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/GlobalPartySongs">
                <p>Global PARTY SONGS</p>
              </Link>
            </div>
          </div>

          <div className="box box9">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/telgu">
                <p>Telgu Top Hits</p>
              </Link>
            </div>
          </div>


          <div className="box box1">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/IndiaTopSongs">
                <p>TOP SONGS</p>
              </Link>
            </div>
          </div>

          <div className="box box5">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/MarathiSongs">
                <p>TOP 50 MARATHI</p>
              </Link>
            </div>
          </div>



          <div className="box box6">
            <div className="box-img bollywood"></div>
            <div className="box-content">
              <Link to="/MainBar/BollywoodPartySongs">
                <p>BOLLYWOOD PARTY</p>
              </Link>
            </div>
          </div>



          <div className="box box7">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/top50Hindi">
                <p>Hot Hits Hindi</p>
              </Link>
            </div>
          </div>



          <div className="box box8">
            <div className="box-img"></div>
            <div className="box-content">
              <Link to="/MainBar/GlobalPartySongs">
                <p>Global PARTY SONGS</p>
              </Link>
            </div>
          </div>
          <FooterPanel></FooterPanel>
        </div>
      </div>
    
    </>
  );
};

export default MainBar;
