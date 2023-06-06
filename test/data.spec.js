import { FilterData } from '../src/data.js';

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

