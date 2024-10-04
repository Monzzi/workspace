function aplicarDescuento() {
  const precio = 1000;
  if (precio >= 200) {
    return precio - (precio * 0.1);
  } return precio;
}
module.exports = (aplicarDescuento);
