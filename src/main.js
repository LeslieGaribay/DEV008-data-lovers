// import { example } from './data.js';
// en este import data.js se traen las funciones filterdata / sortdata / computestats
import data from './data/ghibli/ghibli.js'; // lo que nos trae la base de datos GHIBLI




// let movieTitlesFromDataBase = data.films.map(film => film.title);
// const movieLibrary = document.getElementById('movie-library');
// let firstMovieTitle = movieTitlesFromDataBase[0];
// movieLibrary.innerText = firstMovieTitle;

// let director = data.films.map(film => film.director);

// Crear un template para cada película en el arreglo del Ghibli.js:

let movieTemplate = document.getElementById("movie-template"); // Traemos el template que vamos a estar clonando
let movieSection = document.querySelector(".index-movies-library"); // Traemos donde vamos a mostrar los clones del template

for (let movieIndex = 0; movieIndex < data.films.length; movieIndex++) { // Vamos a iterar por todas las películas que están en el data
    let movie = data.films[movieIndex]; // Declaramos la película que corresponde a la iteración actual

    let templateClone = movieTemplate.content.cloneNode(true); // Declaramos el clon, y con el content.cloneNode y el true le decimos que clone el elemento con todos los hijos
    let moviePoster = templateClone.querySelector(".movie-poster"); // Es como el document.getElementDyId pero con selector en lugar de ID, y sólo busca dentro del templateClone, en lugar de todo el documento
    let movieTitle = templateClone.querySelector(".movie-title");
    let movieYear = templateClone.querySelector(".movie-year");

    movieTitle.innerText = movie.title; // .title: así se llama ese dato en ghibli.js, aquí se cambian los valores del template por los de la película de la iteración actual
    movieYear.innerText = "(" + movie.release_date + ")"; // .release_date: así se llama ese dato en ghibli.js
    moviePoster.src = movie.poster; // .poster: así se llama ese dato en ghibli.js

    movieSection.appendChild(templateClone); // Aquí estamos poniendo el clon en el movieSection

}

function addFilmToLibrary(film) {
    let templateClone = movieTemplate.content.cloneNode(true);
    let moviePoster = templateClone.querySelector(".movie-poster");
    let movieTitle = templateClone.querySelector(".movie-title");
    let movieYear = templateClone.querySelector(".movie-year");

    movieTitle.innerText = film.title;
    movieYear.innerText = "(" + film.release_date + ")";
    moviePoster.src = film.poster;

    movieSection.appendChild(templateClone);
}
function addFilmsToLibrary(films) {// Para el boton de busqueda
    for (let movieIndex = 0; movieIndex < films.length; movieIndex++) {
        const filteredMovie = films[movieIndex];
        addFilmToLibrary(filteredMovie);
    }
}


const filterButtons = document.querySelectorAll(".filter-list .sub-filter-list-button")
filterButtons.forEach(filterButton => filterButton.addEventListener("click", FilterAndShowMovies))

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", SearchMovies);


function FilterAndShowMovies(event) {

    movieSection.innerHTML = "";

    const button = event.target
    const filmProperty = button.dataset.property // director
    const filmPropertyValue = button.dataset.value // Hayao Miyazaki
    let filteredMovies = null;
    if (filmProperty == "rt_score") {
        switch (filmPropertyValue) {
            case "Fresh status":
                filteredMovies = data.films.filter(film => film[filmProperty] >= 60);
                break;
            case "Rotten status":
                filteredMovies = data.films.filter(film => film[filmProperty] < 60);
                break;
        }
    } else {
        filteredMovies = data.films.filter(film => film[filmProperty] === filmPropertyValue);
    }

    addFilmsToLibrary(filteredMovies)
}

function SearchMovies(event) {

    movieSection.innerHTML = "";

    // Agregar codigo para traer el input text, y sacar el texto de busqueda
    const searchBarValue = document.getElementById("searchBar").value;


    let filteredMovies = null;

    // Agregar codigo para filtrar por titulo (solo por mientras, luego por mas propiedades)
    filteredMovies = data.films.filter(film => film["title"].toLowerCase().includes(searchBarValue.toLowerCase()));



    addFilmsToLibrary(filteredMovies)
}

const sortByButtons = document.querySelectorAll(".sort-by-option")
sortByButtons.forEach(sortByButton => sortByButton.addEventListener("click", SortByMovies))

function SortByMovies(event) {
    movieSection.innerHTML = "";

    const button = event.target
    const sortByProperty = button.dataset.property
    console.log(sortByProperty)
    let filteredMovies = [];

    switch (button.innerText) {
        case "A-Z":
            filteredMovies = data.films.filter(film => film[sortByProperty]).sort((a, b) => {
                if (a.title > b.title) {
                    return 1;
                } else if (b.title > a.title) {
                    return -1;
                } else {
                    return 0;
                }
            });
            break;

        case "Z-A":
            filteredMovies = data.films.filter(film => film[sortByProperty]).sort((a, b) => {
                if (b.title > a.title) {
                    return 1;
                } else if (a.title > b.title) {
                    return -1;
                } else {
                    return 0;
                }
            });
            break;

        case "Latest to oldest":
            filteredMovies = data.films.filter(film => film[sortByProperty]).sort((a, b) => {
                if (b.release_date > a.release_date) {
                    return 1;
                } else if (a.release_date > b.release_date) {
                    return -1;
                } else {
                    return 0;
                }
            });
            break;

        case "Oldest to latest":
            filteredMovies = data.films.filter(film => film[sortByProperty]).sort((a, b) => {
                if (a.release_date > b.release_date) {
                    return 1;
                } else if (b.release_date > a.release_date) {
                    return -1;
                } else {
                    return 0;
                }
            });
            break;
    }
    addFilmsToLibrary(filteredMovies)
}