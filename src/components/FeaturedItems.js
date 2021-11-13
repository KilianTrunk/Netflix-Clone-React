import * as React from "react";
import SaveMovieID from "../datafun/SaveMovieID";
import RemoveMovieID from "../datafun/RemoveMovieID";

export default class FeaturedItems extends React.Component {
  constructor() {
    super();
    this.state = {
      styleSave: "inline-block",
      styleRemove: "none",
    };

    this.handleSave = this.handleSave.bind(this);
    this.callSaveFunctions = this.callSaveFunctions.bind(this);

    this.handleRemove = this.handleRemove.bind(this);
    this.callRemoveFunctions = this.callRemoveFunctions.bind(this);
  }

  handleSave(event) {
    this.setState({ styleSave: "none", styleRemove: "inline-block" });
  }

  callSaveFunctions(){
    this.handleSave();
    SaveMovieID();
  }

  handleRemove(event) {
    this.setState({ styleSave: "inline-block", styleRemove: "none" });
  }

  callRemoveFunctions(){
    this.handleRemove();
    RemoveMovieID();
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
            <p className="main-featured-movie-text" id="originalTitle"></p>
          </div>
          <div className="side-featured-movie-text-div">
            <p className="side-featured-movie-text" id="overviewText"></p>
          </div>
          <div className="buttons">
            <a href="/fullmovie" id="fullMovieButton">
              <button
                type="button"
                className="button button-play"
                id="fullMovieButton"
              >
                I> Play
              </button>
            </a>
            <button
              id="myListButton"
              onClick={this.callSaveFunctions}
              type="button"
              className="button button-list"
              style={{ display: this.state.styleSave }}
            >
              + My List
            </button>
            <button
              id="myListButton2"
              onClick={this.callRemoveFunctions}
              type="button"
              className="button button-list"
              style={{ display: this.state.styleRemove }}
            >
              - Remove from my list
            </button>
          </div>
        </div>
      </>
    );
  }
}
