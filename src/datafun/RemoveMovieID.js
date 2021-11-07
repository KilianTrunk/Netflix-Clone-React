export default async function RemoveMovieID() {
    localStorage.removeItem('movieIDs');
    localStorage.removeItem('movieNames');

    document.getElementById("myListButton2").style.display = "none";
    document.getElementById("myListButton").style.display = "inline-block";
  }
  