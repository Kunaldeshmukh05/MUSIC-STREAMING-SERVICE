
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import SearchSongs from "./SearchAPI/searchSongs";
const NavBar = () => {
  
  return (
    <div className="main">
      <nav className="navbar navbar-fixed-top">
        <div className="navbar-container">
          <div className="nav-home">
            <FontAwesomeIcon icon={faHome} className="icon" />
          </div>
          <div className="Log-img"></div>
          <div className="Log-im"></div>
          <div className="nav-item search-container">
          <SearchSongs/>
          </div>
          <div className="nav-item">
            <button className="login-btn">
              <nav className="Login">
                <Link to="/LoginPage">SignIn</Link>
              </nav>
            </button>
          </div>

          <div className="nav-item">
            <button className="signup-btn">
              <nav className="Sign">
                <Link to="/SignUpPage">SignUp</Link>
              </nav>
            </button>
          </div>
          <div className="nav-profile">
            <button className="profile-btn">
              <nav className="Profile">
                <Link to="/profile">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </nav>
            </button>
          </div>
        </div>
      </nav>
      <br />
      <br />
    </div>
  );
};
export default NavBar;  