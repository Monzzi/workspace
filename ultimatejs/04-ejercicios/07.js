// crear un algoritmo que devuelva el precio más su impuesto

function precioMasIva(precio, iva) {
  return precio + (precio * (iva / 100));
}
console.log(precioMasIva(100, 21));
console.log(Math.round(precioMasIva(24.80, 21)));
