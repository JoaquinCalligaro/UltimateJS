const user = { id: 1 };

user.name = 'Nicolas';
user.guardar = function () {
  console.log('Guardando', user.name);
};

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

// const user1 = Object.freeze({ id: 1 }); //Object.freeze congela el objeto: no podés cambiar, agregar ni borrar propiedades
const user1 = Object.seal({ id: 1 }); // a diferencia del freeze seal permite cambiar los valores de la propiedad del objeto
user1.name = 'Nico';
user1.id = 2;
console.log(user1);
