// Indice validar que no sea menor a cero y que el elemento exista en el array

function getbyIdx(arr, idx) {
  if (idx < 0 || arr.length <= idx) {
    return 'Indice Invalido';
  }

  return arr[idx];
}
let resultado = getbyIdx([1, 2], 0);
console.log(resultado);
