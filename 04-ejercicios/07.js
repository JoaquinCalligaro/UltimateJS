// Crear un algoritmo que devuelva el precio del producto mas impuestos

function precioCompleto(precio, impuesto) {
  precio = precio + precio * impuesto;
  return precio;
}

let resultado = precioCompleto(19.9, 0.15);
console.log(resultado);
