/**
 * Crear un array de longitud N, y que sus elementos sean
 * numeros 1 hasta N.
 */

let longitud = 10;

function crearArray(n) {
  let nuevoArray = [];
  if (n <= 0) {
    return nuevoArray;
  }
  for (let i = 0; i <= n; i++) {
    nuevoArray.push(i);
  }
  return nuevoArray;
}

let resultado = crearArray(longitud);

console.log(resultado);
