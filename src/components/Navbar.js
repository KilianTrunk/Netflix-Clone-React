import * as React from "react";
import netflixLogo from "../images/netflix-logo.png";

import { Link } from "react-router-dom";

export default function Navbar() {
  return(
  <div className="navigation-bar">
    <div className="flex-container centerclass navbar-logo">
      <Link to="/">
        <img src={netflixLogo} alt="netflix-logo" className="navbar-logo" />
      </Link>
    </div>
    <div className="menus">
      <div className="flex-container centerclass">
        <Link to="/" className="navbar-item">
          TV Shows
        </Link>
      </div>
      <div className="flex-container centerclass">
        <Link to="/" className="navbar-item">
          Movies
        </Link>
      </div>
      <div className="flex-container centerclass">
       <Link to="/" className="navbar-item">
          Recently Added
       </Link>
      </div>
      <div className="flex-container centerclass">
        <Link to="/mylist" className="navbar-item">
          My List
        </Link>
      </div>
    </div>
    <div className="flex-container centerclass">
      <a href className="navbar-lupa">
        <i className="fas fa-search fa-2x" />
      </a>
    </div>
  </div>
);
}