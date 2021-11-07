export default async function RemoveMovieID() {
    localStorage.removeItem('movieIDs');
    localStorage.removeItem('movieNames');

    let movieDetailsText = document.getElementById("movieDetailsText");
    let userTextHandler = document.getElementById("userHandling");
    let button =  document.getElementById("myListButton2");
    let userInstructions = document.getElementById("userInstructions");

    button.style.display = "none";
    movieDetailsText.style.display = "none";
    userInstructions.style.display = "none";
    userTextHandler.innerHTML = "Add a movie to your list by pressing the '+ My List' button to display it here.";
  }
  