let a = { prop: 1 };

function suma(n) {
  n.prop++;
}

suma(a);
console.log(a);

//! Tipos de datos -> primitivos se copian (cuando se asignan a otras variables)

//! Tipos de datos de referencias -> se crea una referencia (obj,arr,fun)
