// Crear un algoritmo que devuelva cantidad de numeros positivos en un array

let array = [2, 5, 7, 15, -5, -100, 55]; // defino el array con los numeros principales

function cuantosPositivos(arr) {
  let contador = 0; // el contador comprar cuantos numeros hay
  for (const numero of arr) {
    // un bucle for que recorre el array es decir los elementos y los añade en numeros para hacer la comparacion
    if (numero > 0) {
      // compara si el numero es mayor a 0 y se cumple la condicion.
      contador++; // se le suma uno al contador por cada vuelta
    }
  }
  return contador; // devuelve el valor de contador
}

let numeros = cuantosPositivos(array); // se guardan los "numeros" es decir el resultado la funcion array.
console.log(numeros); // llamada la variable numeros que contiene la llamada del array
