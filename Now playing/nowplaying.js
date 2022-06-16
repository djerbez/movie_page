const nowplaying = "https://api.themoviedb.org/3/movie/now_playing?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1";
const mainDiv1 = document.querySelector(".container1");
const prefix1 = "https://image.tmdb.org/t/p/w500/"
const addPlaying = async (movie) => {
    const movies = await fetch(`${nowplaying}`).catch((err) =>
      console.log(err));
    const data = await movies.json().catch((err) => console.log(err));
    console.log(data);
    const data2 = data.results
    data2.forEach ((movie) => {
        const malidiv = document.createElement ("div");
        const img = document.createElement ("img");
        img.src = (prefix1 + movie.poster_path);
        img.classList.add("img");
        img.classList.add("zoom");
        malidiv.classList.add("text");
        malidiv.innerText= (movie.original_title);
        mainDiv1.appendChild(malidiv);
        malidiv.appendChild(img)
    })
}
addPlaying()
