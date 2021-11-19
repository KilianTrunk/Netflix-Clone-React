export default async function SaveFullMovieID() {
    var currentPageUrl = new URL(window.location.href);
    let params = currentPageUrl.searchParams;
    var movieID = params.get('movieid');

    console.log(movieID);

    var data = {};
    var url =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2";
    if (movieID == null) {
        url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2';
        const response = await fetch(url);
        const json = await response.json();
        data = json.results[0];
        console.log(1);
    
      } else {
        url = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=b0d1306fad90411efb79cc7bced5c6f2';
        const response = await fetch(url);
        const json = await response.json();
        data = json;
        console.log(2);
      }

    var movieName = data.original_title;
    movieID = data.id

    localStorage.setItem('movieNames', movieName);
    localStorage.setItem('movieIDs', movieID);
    }