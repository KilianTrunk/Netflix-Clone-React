export default async function SaveFullMovieID() {
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

  
    // ********************************************* KODA ZA SHRANJEVANJE - START *********************************************

    var movieName = data.original_title;
  
  
    // ***** ----- MOVIE Names ----- *****
  
    // shramba podatkov
    var movieNAMEs = movieName;
  
    // če ni nič shranjeno, shrani prazen array
    if (localStorage.getItem('movieNames') == null)
    {
      localStorage.setItem('movieNames', '')
    }
  
  
  
    // shrani podatke v localstorage
    localStorage.setItem('movieNames', movieName);
  
  
    // ***** ----- MOVIE IDs ----- *****
  
    // shramba podatkov
    var movieIDs = movieID;
  
    // če ni nič shranjeno, shrani prazen array
    if (localStorage.getItem('movieIDs') == null)
    {
      localStorage.setItem('movieIDs', '')
    }
  
    // shrani podatke v localstorage
    localStorage.setItem('movieIDs', movieID);
  
    // ********************************************* KODA ZA SHRANJEVANJE - END ***********************************************

    document.getElementById("myListButton").style.display = "none";
    document.getElementById("myListButton2").style.display = "inline-block";
  }
  