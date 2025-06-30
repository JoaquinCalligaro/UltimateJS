function suma(a, b) {
  console.log(arguments); // Muestra los argumentos pasados a la función en la consola (no recomendado utilizar esto pero puede pasar de ver codigo con esto)
  return a + b;
}

let resultado = suma(5, 6, 1, 2, 3); // Llama a la función 'suma' con el argumento 5 y almacena el resultado en la variable 'resultado'
console.log(resultado); // Muestra el resultado de la suma en la consola
console.log(typeof resultado); // Muestra el tipo de dato de 'resultado' en la consola
