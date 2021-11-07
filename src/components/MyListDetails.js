import React from "react";
import ListRemoveMovieID from "../datafun/ListRemoveMovieID";

export default class MyListDetails extends React.Component {
  state = {
      movieID: null, 
      movieName: null,
      errorHandlerNull: null,
      userHandler: null,
      UX: null
  };

  async componentDidMount() {

    var dataChecker = localStorage.getItem("movieIDs");
    var movieID = localStorage.getItem("movieIDs");
    var movieName = localStorage.getItem("movieNames");
    var UX = "- Movie Name : ";

    let userTextHandler = document.getElementById("userHandling");
    let button =  document.getElementById("myListButton2");
    let userInstructions = document.getElementById("userInstructions");

    this.setState({ movieID: movieID, movieName: movieName });

    let userHandler = "Press on the movie name to get redirected to its details page..";
    let errorHandlerNull = "Add a movie to your list by pressing the '+ My List' button on the move details or home page to display it here."
    userInstructions.innerHTML = "Press on the movie name to get redirected to its details page."

    if(dataChecker == null)
    {
        this.setState({ movieID: errorHandlerNull });
        button.style.display = "none";
        userTextHandler.innerHTML = "Add a movie to your list by pressing the '+ My List' button to display it here.";
        userInstructions.style.display = "none";
    }

    document.getElementById("movieName").href = "/fullmovie?movieid=" + movieID + " ";

    if(dataChecker != null)
    {
        this.setState({ movieID: userHandler, UX: UX });
    }

  }

  render() {
    return (
      <div className="MyListContent"  >
          <button
        id="myListButton2"
        onClick={ListRemoveMovieID}
        type="button"
        className="button button-list"
      > 
      - Empty My List
      </button>
      <p  id="userHandling" ></p>
      <p id="movieDetailsText" >{this.state.UX}<a className="navbar-item" id="movieName" >{this.state.movieName}</a> </p>
      <p id="userInstructions" ></p>
      </div>
    );
  }
}