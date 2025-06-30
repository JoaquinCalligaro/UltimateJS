let a = 10;

// Operadores de comparación
console.log(a > 5); // true, porque 10 es mayor que 5
console.log(a >= 10); // true, porque 10 es igual a 10
console.log(a < 5); // false, porque 10 no es menor que 5
console.log(a <= 5); // false, porque 10 no es menor ni igual a 5

// Nota: Los siguientes operadores (== y !=) no se usan prácticamente en JavaScript moderno.
// Es recomendable usar siempre === y !== para evitar errores de comparación de tipo.
/*
console.log(a == 10); // true, porque 10 es igual a 10
console.log(10 != 10); // false, porque 10 es igual a 10
*/

// Comparación estricta (recomendada)
// estos son los operadores recomendados:
console.log(10 === '10'); // false, porque 10 es un número y "10" es una cadena de texto

console.log(10 !== '10'); // true, porque 10 es un número y "10" es una cadena de texto
