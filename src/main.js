// import { example } from './data.js';
// en este import data.js se traen las funciones filterdata / sortdata / computestats
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js' lo que nos trae la base de datos GHIBLI



let movieTitlesFromDataBase = data.films.map(film => film.title);
const movieLibrary = document.getElementById('movieLibrary');
let firstMovieTitle = movieTitlesFromDataBase[0];
movieLibrary.innerText = firstMovieTitle;

// let moviePostersFromDataBase = data.films.map(film => film.poster);
// const posterImageLocation = document.getElementById('poster');
// const showPosterImage = document.createElement("img").src =

