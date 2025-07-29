let obj = {};
let obj2 = new Object();

/** formas de crear un objeto
 * new Array(); []
 * new String(); "" - '' - ``
 * new Number(); 1234
 * new Boolean(); true/false
 */

function Usuario() {
  this.name = 'Chancito Feliz';
}
let user = new Usuario();

console.log(user.constructor);
