/**
 * Crear algoritmo que devuelva
 * un array de objetos en base a pares
 */

let pares = [
  [1, { name: 'Nicolas' }],
  [2, { name: 'Felipe' }],
  [3, { name: 'Chanchito' }],
];

let array = [
  {
    id: 1,
    name: 'Nicolas',
  },
  {
    id: 2,
    name: 'Felipe',
  },
  {
    id: 3,
    name: 'Chanchito',
  },
];

function toCollection(arr) {
  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    let obj = { id: arr[i][0], name: arr[i][1].name };
    resultado.push(obj);
  }
  return resultado;
}

let resultado = toCollection(pares);
console.log(resultado);
