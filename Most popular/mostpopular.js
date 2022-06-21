const mostpopular =
  "https://api.themoviedb.org/3/movie/popular?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1";
const mainDiv = document.querySelector(".container");
const prefix = "https://image.tmdb.org/t/p/w500/";
const addPopular = async (movie) => {
  const movies = await fetch(`${mostpopular}`).catch((err) => console.log(err));
  const data = await movies.json().catch((err) => console.log(err));
  const data2 = data.results;
  data2.forEach(createHTMLMostPopular);
};
const createHTMLMostPopular = async (movie) => {
  const malidiv = document.createElement("div");
  const img = document.createElement("img");
  img.src = prefix + movie.poster_path;
  img.classList.add("img");
  img.classList.add("zoom");
  malidiv.classList.add("text");
  malidiv.innerText = movie.original_title;
  mainDiv.appendChild(malidiv);
  malidiv.appendChild(img);
};
addPopular();
