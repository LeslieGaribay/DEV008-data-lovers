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

for (let movieIndex = 0; movieIndex < data.films.length; movieIndex++){ // Vamos a iterar por todas las películas que están en el data
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


const filterButtons = document.querySelectorAll(".filter-list .sub-filter-list-button")
console.log({filterButtons})

filterButtons.forEach(filterButton => filterButton.addEventListener("click", FilterAndShowMovies))


function FilterAndShowMovies (event) {
    
    movieSection.innerHTML = "";

    const button = event.target
    const filmProperty = button.dataset.property // director
    const filmPropertyValue = button.dataset.value // Hayao Miyazaki
    const filteredMovies = data.films.filter(film => film[filmProperty] === filmPropertyValue);

    for (let movieIndex = 0; movieIndex < filteredMovies.length; movieIndex++) { 
        const filteredMovie = filteredMovies[movieIndex]
             addFilmToLibrary(filteredMovie)
    }

}