// short-circuit

// Falso o falsy son valores que se consideran falsos en un contexto booleano.

// false
// 0
// ''
// null
// undefined
// NaN

let nombre = 'Chanchito Feliz';
let userName = nombre || 'Usuario Anónimo'; // Si nombre es falsy, asigna 'Usuario Anónimo'
console.log(userName);

function fn1(params) {
  console.log('soy funcion 1');
  return false; // Retorna true, que es truthy
}

function fn2(params) {
  console.log('soy funcion 2');
  return true;
}

let x = fn1() && fn2(); // Si fn1 retorna true, se ejecuta fn2
