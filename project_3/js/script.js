const API_KEY = "989463d6-932f-422a-a1a1-335c096c0a70";
const API_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=2";
const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword="
getMovies(API_URL);

async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        }
    })
    const respData = await resp.json();
    console.log(respData)
    showMovies(respData);
}

function showMovies(data) {
    const moviesEl = document.querySelector(".movies");
    document.querySelector(".movies").innerHTML = ``;

    data.films.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
        <div class="cinema__card">
            <img src="${movie.posterUrlPreview}" alt="${movie.nameRu}" class="movie">
        </div>
            <div class="cinema__info">
            <div class="cinema__title">${movie.nameRu}</div>
            <div class="cinema__description">${movie.genres.map(genre => `${genre.genre}`)}</div>
            ${movie.rating && (`
                <div class="cinema__average color__${getClassByRating(movie.rating)}">${movie.rating}</div>
            `)}
        </div>
        `;
        moviesEl.appendChild(movieEl)

    });
}

function getClassByRating(vote) {
    if (vote >= 8.0) {
        return "green"
    }
    if (vote >= 6) {
        return "orange"
    }
    else {
        return "red"
    }
}

const form = document.querySelector("form");
const search = document.getElementById("input-header");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const ApiReserch = `${API_URL_SEARCH}${search.value}`;
    getMovies(ApiReserch);
    search.value = "";

})
