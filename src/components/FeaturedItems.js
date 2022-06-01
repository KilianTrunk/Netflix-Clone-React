import * as React from "react";
import SaveMovieDetails from "../utils/SaveMovieDetails";
import RemoveMovieDetails from "../utils/RemoveMovieDetails";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function FeaturedItems() {
  
  const [saveButton, setSaveButton] = useState(true);
  const [removeButton, setRemoveButton] = useState(false); 
  const [overview, setOverview] = useState("");
  const [title, setTitle] = useState("");
  const [href, setHref] = useState("");


  function handleSave() {
    setSaveButton(false);
    setRemoveButton(true);
    SaveMovieDetails();
  }
  
  function handleRemove() {
    setSaveButton(true);
    setRemoveButton(false);
    RemoveMovieDetails();
  }


  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2')
      .then(results => results.json())
      .then(data => {
        const movie = data.results[0];
        setOverview(movie.overview);
        setTitle(movie.title);
        setHref("/fullmovie?movieid=" + movie.id);
        document.getElementById("root").style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + movie.backdrop_path + "')";
      });
  }, []);

  return (
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
            {title}
          </p>
        </div>
        <div className="side-featured-movie-text-div">
          <p className="side-featured-movie-text" id="overviewText">
            {overview}
          </p>
        </div>
        <div className="buttons">
          <Link to={href} id="fullMovieButton">
            <button
              type="button"
              className="button button-play"
              id="fullMovieButton"
            >
              Play
            </button>
          </Link>
          {saveButton && (
            <button
              onClick={() => handleSave()}
              type="button"
              className="button button-list"
            >
              + My List
            </button>
          )}
          {removeButton && (
            <button
              onClick={() => handleRemove()}
              type="button"
              className="button button-list"
            >
              - Remove from my list
            </button>
          )}
        </div>
      </div>
    </>
  );
}