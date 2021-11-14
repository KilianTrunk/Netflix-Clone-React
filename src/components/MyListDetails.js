import React from "react";
import RemoveMovieDetails from "../datafun/RemoveMovieDetails";

export default class MyListDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      movieID: null, 
      movieName: null,
      movieDataAvailable: false,
      href: null
    };

    this.movieDataFalseStateSetter = this.movieDataFalseStateSetter.bind(this);
    this.callMultipleFunctions = this.callMultipleFunctions.bind(this);
  }

  movieDataFalseStateSetter() {
    this.setState({ movieDataAvailable: false});
  }

  callMultipleFunctions(){
    RemoveMovieDetails();
    this.movieDataFalseStateSetter();
  }
  
  componentDidMount() {
    var movieID = localStorage.getItem("movieIDs");
    var movieName = localStorage.getItem("movieNames");

    if(localStorage.getItem("movieIDs") != null)
    {
      this.setState({ movieDataAvailable: true, movieID: movieID, movieName: movieName, href: "/fullmovie?movieid=" + movieID});
    }
  }

  render() {
    return (
      <>
      {this.state.movieDataAvailable && (
      <div className="MyListContent"  >
          <button
        id="myListButton2"
        onClick={this.callMultipleFunctions}
        type="button"
        className="button button-list"
      > 
      - Empty My List
      </button>
      <p>- Movie Name : <a className="navbar-item" id="movieName" href={this.state.href} >{this.state.movieName}</a> </p>
      <p>Press on the movie name to get redirected to its details page.</p>
      </div>
      )}
      {!this.state.movieDataAvailable && (
      <div className="MyListContent">
        <p>Add a movie to your list by pressing the '+ My List' button on the move details or home page to display it here.</p>
      </div>
      )}
      </>
    );
  }
}