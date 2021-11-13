import React from "react";

export default class RandomDOM extends React.Component {
  state = {
    featuredMovieID: null
  };

  async componentDidMount() {
    const url = "https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2";
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ featuredMovieID: json.results[0].id});
    document.getElementById("root").style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + json.results[0].backdrop_path + "')";
    const title = document.querySelector('#originalTitle');
    title.innerHTML = json.results[0].original_title;
  
    const overview = document.querySelector('#overviewText');
    overview.innerHTML = json.results[0].overview;

    var movieID = json.results[0].id;
    document.getElementById("fullMovieButton").href = "/fullmovie?movieid=" + movieID + "";;
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}