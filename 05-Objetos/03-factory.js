function crearUsuario(name, email, activo) {
  //factory functions siempre con camelCase
  return {
    email,
    name,
    activo,
    recuperarClave: function () {
      console.log('Recuperando Clave...');
    },
  };
}

let user1 = crearUsuario('Nicolas', 'Nico@holamundo.io', true);
let user2 = crearUsuario('Felipe', 'Felipe@holamundo.io', true);
let user3 = crearUsuario('Chancito', 'Chancito@holamundo.io', false);

console.log(user1, user2, user3);
