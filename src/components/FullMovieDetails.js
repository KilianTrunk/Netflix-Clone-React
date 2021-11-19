import React from "react";
import SaveMovieDetails from "../utils/SaveMovieDetails";
import RemoveMovieDetails from "../utils/RemoveMovieDetails";

export default class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      movieTitle: null,
      movieOverview: null,
      movieReleaseDate: null,
      movieLanguage: null,
      showSaveButton: true,
      showRemoveButton: false
    };

    this.handleSave = this.handleSave.bind(this);
    this.callSaveFunctions = this.callSaveFunctions.bind(this);

    this.handleRemove = this.handleRemove.bind(this);
    this.callRemoveFunctions = this.callRemoveFunctions.bind(this);
  }

  handleSave(event) {
    this.setState({ showSaveButton: false, showRemoveButton: true });
  }

  callSaveFunctions() {
    this.handleSave();
    SaveMovieDetails();
  }

  handleRemove(event) {
    this.setState({ showSaveButton: true, showRemoveButton: false });
  }

  callRemoveFunctions() {
    this.handleRemove();
    RemoveMovieDetails();
  }

  async componentDidMount() {
    var currentPageUrl = new URL(window.location.href);
    let params = currentPageUrl.searchParams;
    var movieID = params.get("movieid");

    var data = {};
    var url;

    if (typeof movieID == "undefined") {
      url =
        "https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2";
      const response = await fetch(url);
      const json = await response.json();
      data = json.results[0];
    } else {
      url =
        "https://api.themoviedb.org/3/movie/" +
        movieID +
        "?api_key=b0d1306fad90411efb79cc7bced5c6f2";
      const response = await fetch(url);
      const json = await response.json();
      data = json;
    }

    document.body.style.backgroundImage =
      "url('https://image.tmdb.org/t/p/original/" + data.backdrop_path + "')";

    var movieTitle = data.original_title;
    var movieOverview = data.overview;
    var movieReleaseDate = data.release_date;
    var movieLanguage = data.original_language;

    this.setState({
      movieTitle: movieTitle,
      movieReleaseDate: movieReleaseDate,
      movieLanguage: movieLanguage,
      movieOverview: movieOverview
    });
  }

  render() {
    return (
      <>
        <div className="movieDetailsTextStyle">
          <p>
            Movie Title: <br /> {this.state.movieTitle}
          </p>
          <p>
            Movie Overview: <br /> {this.state.movieOverview}
          </p>
          <p>
            Movie Release Date: <br /> {this.state.movieReleaseDate}
          </p>
          <p>
            Movie Language: <br /> {this.state.movieLanguage}
          </p>
        </div>
        {this.state.showSaveButton && (
          <button
            onClick={this.callSaveFunctions}
            type="button"
            className="button button-list"
          >
            + My List
          </button>
        )}
        {this.state.showRemoveButton && (
          <button
            onClick={this.callRemoveFunctions}
            type="button"
            className="button button-list"
          >
            - Remove from my list
          </button>
        )}
      </>
    );
  }
}
