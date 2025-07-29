/**  Las funciones son objetos de primera clase
    Significa:
    En JavaScript, las funciones se pueden usar igual que cualquier otro valor u objeto.
    ¿Qué podés hacer con ellas?
    - Guardarlas en variables
    - Pasarlas como argumento a otras funciones
    - Devolverlas desde otras funciones
    - Guardarlas en arrays u objetos
 */

function Usuario(nombre) {
  this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('Nicolas');

console.log(user);

function of(Fn, arg) {
  return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

function returned() {
  return function () {
    console.log('Hola Mundo');
  };
}

let saludo = returned();
saludo();
