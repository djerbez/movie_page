const topmovies =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1";
const mainDiv2 = document.querySelector(".container2");
const imagePrefix2 = "https://image.tmdb.org/t/p/w500/";
const addTop = async (movie) => {
  const movies = await fetch(`${topmovies}`).catch((err) => console.log(err));
  const data = await movies.json().catch((err) => console.log(err));
  const data2 = data.results;
  data2.forEach(createHTMLAddTop);
};
const createHTMLAddTop = async (movie) => {
  const malidiv = document.createElement("div");
  const img = document.createElement("img");
  img.src = imagePrefix2 + movie.poster_path;
  img.classList.add("img");
  img.classList.add("zoom");
  malidiv.classList.add("text");
  malidiv.innerText = movie.original_title;
  mainDiv2.appendChild(malidiv);
  malidiv.appendChild(img);
};
addTop();
