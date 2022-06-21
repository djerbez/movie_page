const mainDiv3 = document.querySelector(".container3");
const div = document.querySelector(".container");
const div1 = document.querySelector(".container1");
const div2 = document.querySelector(".container2");
const paragraph = document.querySelector(".paragraph");
const paragraph1 = document.querySelector(".paragraph1");
const paragraph2 = document.querySelector(".paragraph2");
const imagePrefix3 = "https://image.tmdb.org/t/p/w500/";
const input = document.getElementById("searchMovie");
const addSearch = async (movie) => {
  input.addEventListener("keydown", async function (event) {
    if (input.value.length >= 3) {
      hideDiv();
      addSearchedMovies();
    } else {
      showDiv();
    }
  });
};
const addSearchedMovies = async (movie) => {
  const movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&query=${input.value}&page=1&include_adult=true`
  ).catch((err) => console.log(err));
  const data = await movies.json().catch((err) => console.log(err));
  const data2 = data.results;
  data2.forEach(createHTMLSearchedMovies);
};
const createHTMLSearchedMovies = async (movie) => {
  const malidiv = document.createElement("div");
  const img = document.createElement("img");
  img.src = imagePrefix3 + movie.poster_path;
  img.classList.add("img");
  img.classList.add("zoom");
  malidiv.classList.add("text");
  malidiv.innerText = movie.original_title;
  mainDiv3.appendChild(malidiv);
  malidiv.appendChild(img);
};
addSearch();
function hideDiv() {
  div.style.display = "none";
  div1.style.display = "none";
  div2.style.display = "none";
  paragraph.style.display = "none";
  paragraph1.style.display = "none";
  paragraph2.style.display = "none";
  mainDiv3.style.display = "grid";
  mainDiv3.innerHTML = "";
}
function showDiv() {
  div.style.display = "grid";
  div1.style.display = "grid";
  div2.style.display = "grid";
  paragraph.style.display = "block";
  paragraph1.style.display = "block";
  paragraph2.style.display = "block";
  mainDiv3.innerHTML = "";
}
