function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log('Dibujando...');
  };
}
//? Utiliza esta manera
let punto = { z: 7 };
Punto.call(punto, 1, 2); //* podes extender  objetos definidos anteriormente tanto con apply y con call
//! con call se pasan uno a uno y con apply se pasan como un array
//Punto.apply(punto, [1, 2]);
console.log(punto);

// ! de esta manera ya no se utiliza utiliza la que esta arriba
// const Point = new Function(
//   'x',
//   'y',
//   `
//     this.x = x;
//   this.y = y;
//   this.dibujar = function () {
//     console.log('Dibujando...');
//   };
// `
// );

// const p = new Point(1, 2);
// console.log(p);
