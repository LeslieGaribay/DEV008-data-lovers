import { FilterData } from '../src/data.js';

const filmsFake = [
  { title: "a" },
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

});



// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
