import * as React from "react";
import netflixLogo from '../images/netflix-logo.png';

const Navbar = () => (
  <div className="navigation-bar">
    <div className="flex-container centerclass navbar-logo">
      <a href="/netflix-clone-react/">
        <img
          src={netflixLogo}
          alt="netflix-logo"
          className="navbar-logo"
        />
      </a>
    </div>
    <div className="menus">
      <div className="flex-container centerclass">
        <a href="/netflix-clone-react/" className="navbar-item">
          TV Shows
        </a>
      </div>
      <div className="flex-container centerclass">
        <a href="/netflix-clone-react/" className="navbar-item">
          Movies
        </a>
      </div>
      <div className="flex-container centerclass">
        <a href="/netflix-clone-react/" className="navbar-item">
          Recently Added
        </a>
      </div>
      <div className="flex-container centerclass">
        <a href="/netflix-clone-react/mylist" className="navbar-item">
          My List
        </a>
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
