// en constructor se utiliza UpperCamelCase
// {id: 1, recuperarClave: function(){}}

function Usuario() {
  //UpperCamelCase
  this.id = 1;
  this.recuperarClave = function () {
    // ! cuando una funcion se utiliza de esta manera se llamda 'metodos'
    console.log('Recuperando Clave...');
  };
}

let usuario = new Usuario();
console.log(usuario);
