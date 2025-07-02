let user = {
  id: 1,
  name: 'Chanchito Feliz',
  age: 25,
};

for (let propiedad in user) {
  console.log(propiedad, user[propiedad]);
}

// si vas a acceder a los elementos de un array no utilizar for in utiliza for of.

// let animales = ['Chanchito feliz', 'Dragón', 'Canguro'];
// for (let i in animales) {
//   console.log(i, animales[i]);
// }
