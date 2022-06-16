const mainDiv3 = document.querySelector(".container3");
const div = document.querySelector(".container");
const div1 = document.querySelector(".container1");
const div2 = document.querySelector(".container2");
const p = document.querySelector(".p");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const prefix3 = "https://image.tmdb.org/t/p/w500/";
const input = document.getElementById("searchMovie");
const addSearch = async (movie) => {
  input.addEventListener("keydown", async function (event) {
    console.log(input.value);
    if (input.value.length >= 3) {
      div.style.display = "none";
      div1.style.display = "none";
      div2.style.display = "none";
      p.style.display = "none";
      p1.style.display = "none";
      p2.style.display = "none";
      mainDiv3.style.display = "grid";
      mainDiv3.innerHTML = "";
      const movies = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&query=${input.value}&page=1&include_adult=true`
      ).catch((err) => console.log(err));
      const data = await movies.json().catch((err) => console.log(err));
      console.log(data);
      const data2 = data.results;
      data2.forEach((movie) => {
        const malidiv = document.createElement("div");
        const img = document.createElement("img");
        img.src = prefix3 + movie.poster_path;
        img.classList.add("img");
        img.classList.add("zoom");
        malidiv.classList.add("text");
        malidiv.innerText = movie.original_title;
        mainDiv3.appendChild(malidiv);
        malidiv.appendChild(img);
      });
    } else {
      div.style.display = "grid";
      div1.style.display = "grid";
      div2.style.display = "grid";
      p.style.display = "block";
      p1.style.display = "block";
      p2.style.display = "block";
      mainDiv3.innerHTML = "";
    }
  });
};
addSearch();
