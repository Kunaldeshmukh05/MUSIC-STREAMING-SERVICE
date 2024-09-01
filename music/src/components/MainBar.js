import React from "react";
import { Link } from "react-router-dom";
import "./MainBar.css";
import FooterPanel from "./footerPanel";
import Pop from './pop.js';
import SearchSongs from "./SearchAPI/searchSongs.js";
const MainBar = () => {

  return (
    <div>
      <div className="shop-section">
        <div className="box box1">
          <div className="box-img"></div>
          <div className="box-content">
            <Link to="/MainBar/IndiaTopSongs">
              TOP 50 INDIA
            </Link>
          </div>
        </div>

        <div className="box box2">
          <div className="box-img"></div>
          <div className="box-content">
            <Link to="/MainBar/globalSongs">
              GLOBAL TOP 100
            </Link>
          </div>
        </div>

        <div className="box box3">
          <div className="box-img"></div>
          <div className="box-content">
            <Link to="/MainBar/top50Hindi">
              TOP HINDI SONGS
            </Link>
          </div>
        </div>

        <div className="box box4">
          <div className="box-img"></div>
          <div className="box-content">
            TRENDING SONGS
          </div>
        </div>

        <div className="box box5">
          <div className="box-img"></div>
          <div className="box-content">
            <Link to="/MainBar/MarathiSongs">
              TOP 50 MARATHI
            </Link>
          </div>
        </div>

        <div className="box box6">
          <div className="box-img bollywood"></div>
          <div className="box-content">
            <Link to="/MainBar/BollywoodPartySongs">
              BOLLYWOOD PARTY
            </Link>
          </div>
        </div>

        <div className="box box7">
          <div className="box-img"></div>
          <div className="box-content">
            <Link to="/MainBar/top50Hindi">
              Hot Hits Hindi
            </Link>
          </div>
        </div>

        <div className="box box8">
          <div className="box-img"></div>
          <div className="box-content">
            <Link to="/MainBar/GlobalPartySongs">
              Global PARTY SONGS
            </Link>
          </div>
        </div>

        <div className="box box9">
          <div className="box-img"></div>
          <div className="box-content">
            <Link to="/MainBar/telgu">
              Telgu Top Hits
            </Link>
          </div>
        </div>

        <div className="box box8">
          <div className="box-img"></div>
          <div className="box-content">
            <Link to="/MainBar/GlobalPartySongs">
              Global PARTY SONGS
            </Link>
          </div>
        </div>
        
        <Pop />
        <SearchSongs></SearchSongs> 
        <FooterPanel />
      </div>
    </div>
  );
};

export default MainBar;
