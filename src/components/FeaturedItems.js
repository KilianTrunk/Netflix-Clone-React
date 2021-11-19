import * as React from "react";
import SaveMovieDetails from "../utils/SaveMovieDetails";
import RemoveMovieDetails from "../utils/RemoveMovieDetails";

export default class FeaturedItems extends React.Component {
  constructor() {
    super();
    this.state = {
      showSaveButton: true,
      showRemoveButton: false,
      overview: null,
      title: null,
      href: null
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
    const url =
      "https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2";
    const response = await fetch(url);
    const json = await response.json();

    document.getElementById("root").style.backgroundImage =
      "url('https://image.tmdb.org/t/p/original/" +
      json.results[0].backdrop_path +
      "')";

    this.setState({
      overview: json.results[0].overview,
      title: json.results[0].title,
      href: "/fullmovie?movieid=" + json.results[0].id
    });
  }

  render() {
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
              {this.state.title}
            </p>
          </div>
          <div className="side-featured-movie-text-div">
            <p className="side-featured-movie-text" id="overviewText">
              {this.state.overview}
            </p>
          </div>
          <div className="buttons">
            <a href={this.state.href} id="fullMovieButton">
              <button
                type="button"
                className="button button-play"
                id="fullMovieButton"
              >
                I> Play
              </button>
            </a>
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
          </div>
        </div>
      </>
    );
  }
}
