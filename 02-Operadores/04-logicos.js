// AND, OR, NOT

// AND &&

let mayor = false;
let suscrito = true;
console.log(true && true); // true, porque ambos son verdaderos
console.log(true && false); // false, porque uno es falso

console.log('Operador AND', mayor && suscrito);

// OR ||
console.log('Operador OR', mayor || suscrito);

// NOT !
console.log('Operador NOT', !mayor); // true, porque mayor es false
// console.log('Operador NOT', !suscrito); // false, porque suscrito es true

let soloCatalogoInfantil = !mayor;
