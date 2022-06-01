import * as React from "react";
import RemoveMovieDetails from "../utils/RemoveMovieDetails";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function MyListDetails() {

  const [name, setName] = useState("");
  const [dataAvailable, setDataAvailable] = useState(false);
  const [href, setHref] = useState("");

  function callMultipleFunctions() {
    RemoveMovieDetails();
    setDataAvailable(false);
  }

  const movieID = localStorage.getItem("movieIDs");
  const movieName = localStorage.getItem("movieNames");

  function checkData() {
    if (typeof movieID == "string") {
    setDataAvailable(true);
    setName(movieName);
    setHref("/fullmovie?movieid=" + movieID);
    }
  }

  return (
    <>
    {dataAvailable && (
      <div className="MyListContent">
        <button
          id="myListButton2"
          onClick={() => callMultipleFunctions()}
          type="button"
          className="button button-list"
        >
          - Empty My List
        </button>
        <p>
          - Movie Name : {" "}
          <Link className="navbar-item" id="movieName" to={href}>
            {name}
          </Link>
        </p>
        <p>
          Press on the movie name to get redirected to its details page.
        </p>
      </div>
    )}
    {!dataAvailable && (
      <div className="MyListContent">
        <button className="button button-list" onClick={() => checkData()}>Refresh</button>
        <p>
          Add a movie to your list by pressing the '+ My List' button on the
          move details or home page to display it here.
        </p>
      </div>
    )}
  </>
    );
  }
