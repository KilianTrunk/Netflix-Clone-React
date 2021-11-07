export default async function SaveMovieID() {
    var API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2';
    const response = await fetch(API_URL);
    const json = await response.json();
    var movieID = json.results[0].id;
    var movieName = json.results[0].original_title;
  
    // ********************************************* KODA ZA SHRANJEVANJE - START *********************************************
  
  
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
  