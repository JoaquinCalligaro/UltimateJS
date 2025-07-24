// Crear un algoritmo que devuelva com numero menor y mayor de un array

let array = [2, 5, 7, 15, -5, -100, 55];
function getMenorMayor(arr) {
  let minimo = arr[0];
  let mayor = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minimo) {
      minimo = arr[i];
    }

    if (arr[i] > mayor) {
      mayor = arr[i];
    }
  }
  let resultado = [minimo, mayor];
  return resultado;
}

let numeros = getMenorMayor(array);
console.log(numeros);
