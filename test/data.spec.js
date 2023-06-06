import { FilterData, SortByMovies } from '../src/data.js';

const filmsFake = [
  {title:"a"},
  {title:"b"},
  {title:"c"},
]

describe('Tests para filterData', () => {
  
  it('es una funcion', () => {
    expect(typeof FilterData).toBe('function');
  });

  it('filtra por categorias', () => {
    expect(FilterData(filmsFake, "title", "a")).toStrictEqual([{title:"a"}]);
  });

  it('si no encuentra categoria', () => {
    expect(FilterData(filmsFake, "title", "d")).toStrictEqual([]);
  });
});

const filmYears =[
  { year: "2006" },
  { year: "2003" },
  { year: "2023" },
]

describe('Tests para sortData', () => {

  it('es una funcion', () => {
    expect(typeof SortByMovies).toBe('function');
  });

  it('ordena de forma ascendente', () => {
    expect(SortByMovies(filmYears, "year", [1])).toStrictEqual([{year: '2003'},{year:'2006'},{year: '2023'}]);
  });

  it('ordena de forma descendente', () => {
    expect(SortByMovies(filmYears, "year", [-1])).toStrictEqual([{ year: '2023' }, { year: '2006' }, { year: '2003' }]);
  });

});