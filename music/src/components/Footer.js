import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div>
          <FontAwesomeIcon icon="fa-solid fa-backward-step" />
        </div>
      </div>
    </>
  );
};

export default Footer;
