import * as React from "react";
import netflixLogo from "../images/netflix-logo.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => (
  <div className="navigation-bar">
    <div className="flex-container centerclass navbar-logo">
      <Link to="/">
        <img src={netflixLogo} alt="netflix-logo" className="navbar-logo" />
      </Link>
    </div>
    <div className="menus">
      <div className="flex-container centerclass">
        <Link to="/">
          TV Shows
        </Link>
      </div>
      <div className="flex-container centerclass">
        <Link to="/">
          Movies
        </Link>
      </div>
      <div className="flex-container centerclass">
       <Link to="/">
          Recently Added
       </Link>
      </div>
      <div className="flex-container centerclass">
        <Link to="/mylist">
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

export default Navbar;
