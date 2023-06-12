import { FilterData, SortByMovies, FilterAndSortMovies, resetFilteredAndSortedMovies } from '../src/data.js';

const filmsFake = [
  {title:"a"},
  {title:"b"},
  {title:"c"},
]

describe('Tests para filterData', () => {
  
  it('es una función', () => {
    expect(typeof FilterData).toBe('function');
  });

  it('filtra por categorías', () => {
    expect(FilterData(filmsFake, "title", "a")).toStrictEqual([{title:"a"}]);
  });

  it('si no encuentra categoría', () => {
    expect(FilterData(filmsFake, "title", "d")).toStrictEqual([]);
  });

  it('si el valor no es un array', () => {
    expect(() => { FilterData(10) }).toThrow('films is not an array');
  });

  it('si la propiedad "filmProperty" no está presente', () => {
    expect(() => { FilterData(filmsFake, undefined) }).toThrow('filmProperty can not be undefined');
  });

  it('si la propiedad "filmPropertyValue" no está presente', () => {
    expect(() => { FilterData(filmsFake, "title", undefined) }).toThrow('filmPropertyValue can not be undefined');
  });
});

const filmYears =[
  { year: "2006" },
  { year: "2003" },
  { year: "2006" },
  { year: "2023" },
]

describe('Tests para sortData', () => {

  it('es una función', () => {
    expect(typeof SortByMovies).toBe('function');
  });

  it('ordena de forma ascendente', () => {
    expect(SortByMovies(filmYears, "year", [1])).toStrictEqual([{year: '2003'},{year:'2006'},{year:'2006'},{year: '2023'}]);
  });

  it('ordena de forma descendente', () => {
    expect(SortByMovies(filmYears, "year", [-1])).toStrictEqual([{ year: '2023' }, { year: '2006' }, {year:'2006'}, { year: '2003' }]);
  });

  it('si el valor no es un array', () => {
    expect(() => { SortByMovies(1) }).toThrow('films is not an array');
  });

  it('si la propiedad no está presente', () => {
    expect(() => { SortByMovies(filmYears, undefined) }).toThrow('sortByProperty can not be undefined');
  });
});












describe('Tests para FilterAndSortMovies', () => {
  beforeEach(() => {
    resetFilteredAndSortedMovies()
  });
  
  it('es una función', () => {
    expect(typeof FilterAndSortMovies).toBe('function');
  });

  it('filtra por categorías', () => {
    expect(FilterAndSortMovies(filmsFake, "title", "a")).toStrictEqual([{title:"a"}]);
  });

  it('si no encuentra categoría', () => {
    expect(FilterAndSortMovies(filmsFake, "title", "d")).toStrictEqual([]);
  });

  it('si el valor no es un array', () => {
    expect(() => FilterAndSortMovies(1)).toThrow('films is not an array');
  });

  it('si las propiedades para filtrar no están presentes', () => {
    expect(FilterAndSortMovies(filmsFake, undefined)).toStrictEqual(filmsFake);
  });
 
  it('ordena de forma ascendente', () => {
    expect(FilterAndSortMovies(filmYears, undefined, undefined, "year", [1])).toStrictEqual([{year: '2003'},{year:'2006'},{year:'2006'},{year: '2023'}]);
  });

  it('ordena de forma descendente', () => {
    expect(FilterAndSortMovies(filmYears, undefined, undefined, "year", [-1])).toStrictEqual([{ year: '2023' }, { year: '2006' }, {year:'2006'}, { year: '2003' }]);
  });

  it('si las propiedades para ordenar no están presentes', () => {
    expect(FilterAndSortMovies(filmYears, undefined, undefined)).toStrictEqual(filmYears);
  });
});
