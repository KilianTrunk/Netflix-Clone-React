import * as React from "react";
import SaveMovieID from "../datafun/SaveMovieID";
import RemoveMovieID from "../datafun/RemoveMovieID";

const FeaturedItems = () => (
  <>
  <div className="featured-movie-items">
    <div className="n-logo-div">
      <img
        className="n-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/185px-Netflix_2015_N_logo.svg.png"
        alt="n-logo"
      />
    </div>
    <div className="main-featured-movie-text-div">
      <p className="main-featured-movie-text" id="originalTitle">
        STRANGER THINGS
      </p>
    </div>
    <div className="side-featured-movie-text-div">
      <p className="side-featured-movie-text" id="overviewText">
        When a young boy vanishes, a small town uncovers a mystery involving
        secret experiments, terrifying supernatural forces and a strange little
        girl.
      </p>
    </div>
    <div className="buttons">
      <a href="/fullmovie" id="fullMovieButton">
        <button type="button" className="button button-play" id="fullMovieButton" >
          I> Play
        </button>
      </a>
      <button
        id="myListButton"
        onClick={SaveMovieID}
        type="button"
        className="button button-list"
      >
        + My List
      </button>
      <button
        id="myListButton2"
        onClick={RemoveMovieID}
        type="button"
        className="button button-list"
      > 
      - Remove from my list
      </button>
    </div>
  </div>
  </>
  
);

export default FeaturedItems;
