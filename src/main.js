// en este import data.js se traen las funciones filterdata / sortdata / computestats
import data from './data/ghibli/ghibli.js'; // lo que nos trae la base de datos GHIBLI
import { SortByMovies, FilterData } from './data.js'


// let movieTitlesFromDataBase = data.films.map(film => film.title);
// const movieLibrary = document.getElementById('movie-library');
// let firstMovieTitle = movieTitlesFromDataBase[0];
// movieLibrary.innerText = firstMovieTitle;

// let director = data.films.map(film => film.director);

// Crear un template para cada película en el arreglo del Ghibli.js:

const movieTemplate = document.getElementById("movie-template"); // Traemos el template que vamos a estar clonando
const movieSection = document.querySelector(".index-movies-library"); // Traemos donde vamos a mostrar los clones del template

for (let movieIndex = 0; movieIndex < data.films.length; movieIndex++) { // Vamos a iterar por todas las películas que están en el data
  const movie = data.films[movieIndex]; // Declaramos la película que corresponde a la iteración actual

  const templateClone = movieTemplate.content.cloneNode(true); // Declaramos el clon, y con el content.cloneNode y el true le decimos que clone el elemento con todos los hijos
  const moviePoster = templateClone.querySelector(".movie-poster"); // Es como el document.getElementDyId pero con selector en lugar de ID, y sólo busca dentro del templateClone, en lugar de todo el documento
  const movieTitle = templateClone.querySelector(".movie-title");
  const movieYear = templateClone.querySelector(".movie-year");

  movieTitle.innerText = movie.title; // .title: así se llama ese dato en ghibli.js, aquí se cambian los valores del template por los de la película de la iteración actual
  movieYear.innerText = "(" + movie.release_date + ")"; // .release_date: así se llama ese dato en ghibli.js
  moviePoster.src = movie.poster; // .poster: así se llama ese dato en ghibli.js

  movieSection.appendChild(templateClone); // Aquí estamos poniendo el clon en el movieSection

}

function addFilmToLibrary(film) {
  const templateClone = movieTemplate.content.cloneNode(true);
  const moviePoster = templateClone.querySelector(".movie-poster");
  const movieTitle = templateClone.querySelector(".movie-title");
  const movieYear = templateClone.querySelector(".movie-year");

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
filterButtons.forEach(filterButton => filterButton.addEventListener("click", FilterMoviesWrapper))

function FilterMoviesWrapper (event) {
  const button = event.target
  const filmProperty = button.dataset.property // director
  const filmPropertyValue = button.dataset.value // Hayao Miyazaki

  const filteredFilms = FilterData(data, filmProperty, filmPropertyValue);

  movieSection.innerHTML = "";
  addFilmsToLibrary(filteredFilms)
}



const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", SearchMovies);
const searchInput = document.getElementById("searchBar");
searchInput.addEventListener("input", SearchMovies);


function SearchMovies() {

  movieSection.innerHTML = "";

  // Agregar código para traer el input text, y sacar el texto de búsqueda
  const searchBarValue = document.getElementById("searchBar").value;

  let filteredMovies = null;

  // Agregar código para filtrar por título (solo por mientras, luego por más propiedades)
  filteredMovies = data.films.filter(film => film["title"].toLowerCase().includes(searchBarValue.toLowerCase()));

  addFilmsToLibrary(filteredMovies)
}



const sortByButtons = document.querySelectorAll(".sort-by-option")
sortByButtons.forEach(sortByButton => sortByButton.addEventListener("click", SortByMoviesWrapper))

function SortByMoviesWrapper (event) {
  const button = event.target
  const sortByProperty = button.dataset.property
    
  let sortOrder = 1;
  switch (button.dataset.order) {
  case "asc":
    sortOrder = 1; // Ascendente
    break;
  case "desc":
    sortOrder = -1; // Descendente
    break;
  }

  const sortedMovies = SortByMovies(data, sortByProperty, sortOrder)
    
    
  movieSection.innerHTML = "";
  addFilmsToLibrary(sortedMovies)
}
