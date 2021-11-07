import React from "react";
import SaveFullMovieID from "../datafun/SaveFullMovieID";
import RemoveMovieID from "../datafun/RemoveMovieID";

export default class Slider extends React.Component {
  state = {
    movieTitle: null,
    movieOverview: null,
    movieReleaseDate: null,
    movieLanguage: null,
  }; 

  async componentDidMount() {
    var currentPageUrl = new URL(window.location.href);
    let params = currentPageUrl.searchParams;
    var movieID = params.get('movieid');

    var data = {};
    var url =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2";
    if (typeof movieID == 'undefined') {
        url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2';
        const response = await fetch(url);
        const json = await response.json();
        data = json.results[0];
        console.log(data);
    
      } else {
        url = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=b0d1306fad90411efb79cc7bced5c6f2';
        const response = await fetch(url);
        const json = await response.json();
        data = json;
        console.log(json);
      }

      document.body.style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + data.backdrop_path + "')";

      var movieTitle = data.original_title;
      var movieOverview = data.overview;
      var movieReleaseDate = data.release_date;
      var movieLanguage = data.original_language;

    this.setState({ movieTitle: movieTitle, movieReleaseDate: movieReleaseDate, movieLanguage: movieLanguage, movieOverview: movieOverview});

    document.getElementById("myListButton2").style.display = "none";
    
  }

  render() {
    return (
      <>
      <div className="movieDetailsTextStyle" >
          <p>Movie Title: <br /> {this.state.movieTitle}</p>
          <p>Movie Overview:  <br /> {this.state.movieOverview}</p>
          <p>Movie Release Date: <br /> {this.state.movieReleaseDate}</p>
          <p>Movie Language: <br /> {this.state.movieLanguage}</p>
      </div>
      <button
      id="myListButton"
      onClick={SaveFullMovieID}
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
    </>
    );
  }
}