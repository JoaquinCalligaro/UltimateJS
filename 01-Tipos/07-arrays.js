let animales = ['perro', 'gato', 'pez']; // Declaración de un array con tres elementos
console.log(animales); // Muestra el array completo en consola
console.log(animales[0]); // Muestra el primer elemento del array ('perro')
animales[2] = 'Dragon'; // Cambia el tercer elemento ('pez') por 'Dragon'
console.log(animales); // Muestra el array actualizado

animales[10] = 'Pez'; // Asigna 'Pez' en la posición 10, creando elementos vacíos entre medias
console.log(animales[7]); // Muestra el elemento en la posición 7 (undefined porque no está definido)

console.log(typeof animales); // Muestra el tipo de la variable 'animales' (object)
console.log(animales.length); // Muestra la longitud del array (11)
