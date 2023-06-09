
export function FilterData(films, filmProperty, filmPropertyValue) {
  if (!Array.isArray(films)) {
    throw new TypeError('films is not an array')
  }

  if (!filmProperty) {
    throw new TypeError('filmProperty can not be undefined')
  }
 
  let filteredMovies = [];
  filteredMovies = films.filter(film => film[filmProperty] === filmPropertyValue);
  return filteredMovies;
}


//sortData(data, sortBy, sortOrder=[1,-1])
export function SortByMovies(films, sortByProperty, sortOrder) {
  if (!Array.isArray(films)) {
    throw new TypeError('films is not an array')
  }
  
  if (!sortByProperty) {
    throw new TypeError('sortByProperty can not be undefined')
  }

  let sortedMovies = [];
  sortedMovies = films.sort((a, b) => {
    if (a[sortByProperty] > b[sortByProperty]) {
      return 1 * sortOrder;
    } else if (b[sortByProperty] > a[sortByProperty]) {
      return -1 * sortOrder;
    } else {
      return 0;
    }
  });

  return sortedMovies;
}

let filteredAndSortedMovies = []; // guardar estado 
export function FilterAndSortMovies(films, filmProperty, filmPropertyValue, sortByProperty, sortOrder){
  if (filteredAndSortedMovies.length === 0){
    filteredAndSortedMovies = films;
  }

  if (filmProperty && filmPropertyValue){
    filteredAndSortedMovies = FilterData(films, filmProperty, filmPropertyValue); 
  } 
  
  if (sortByProperty && sortOrder){
    filteredAndSortedMovies = SortByMovies(filteredAndSortedMovies, sortByProperty, sortOrder);
  }
  return filteredAndSortedMovies;
}