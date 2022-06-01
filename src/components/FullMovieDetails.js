import * as React from "react";
import SaveMovieDetails from "../utils/SaveMovieDetails";
import RemoveMovieDetails from "../utils/RemoveMovieDetails";
import { useState, useEffect } from "react";


export default function Slider() {

  const [saveButton, setSaveButton] = useState(true);
  const [removeButton, setRemoveButton] = useState(false); 
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [language, setLanguage] = useState("");

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

  const currentPageUrl = new URL(window.location.href);
  const params = currentPageUrl.searchParams;
  const movieID = params.get("movieid");

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/" + movieID + "?api_key=b0d1306fad90411efb79cc7bced5c6f2")
      .then(results => results.json())
      .then(data => {
        const movie = data;
        setOverview(movie.overview);
        setTitle(movie.title);
        setReleaseDate(movie.release_date);
        setLanguage(movie.language);
        document.getElementById("root").style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + movie.backdrop_path + "')";
      });
  }, []);

    return (
      <>
        <div className="movieDetailsTextStyle">
          <p>
            Movie Title: <br /> {title}
          </p>
          <p>
            Movie Overview: <br /> {overview}
          </p>
          <p>
            Movie Release Date: <br /> {releaseDate}
          </p>
          <p>
            Movie Language: <br /> {language}
          </p>
        </div>
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
      </>
    );
}
