import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    featuredMovieID: null
  };

  async componentDidMount() {
    const url = "https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2";
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ featuredMovieID: json.results[0].id});
  }

  render() {
    return (
      <div>
        <h1>{this.state.featuredMovieID}</h1>
      </div>
    );
  }
}