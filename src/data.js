

//sortData(data, sortBy, sortOrder=[1,-1])
export function SortByMovies(data, sortByProperty, sortOrder) {
  let filteredMovies = [];

  filteredMovies = data.films.sort((a, b) => {
    if (a[sortByProperty] > b[sortByProperty]) {
        return 1 * sortOrder;
    } else if (b[sortByProperty] > a[sortByProperty]) {
        return -1 * sortOrder;
    } else {
        return 0;
    }
  });

  return filteredMovies;
}

