const punto = {
  x: 10,
  y: 15,

   // dibujar = function(){}   método le puedes quitar la palabra function
  dibujar() {
    console.log('Dibujando...');
  }
};

// delete punto.dibujar;
if ('dibujar' in punto) {
    punto.dibujar();
}

// let keys = Object.keys(punto); // es lo mismo
// console.log(Object.keys(punto));
  for (let llave of Object.keys(punto)) {  //forma más antigua de acceder a las propiedades.
    console.log(llave, punto[llave]);
  }
// console.log(Object.values(punto));


for (let entry of Object.entries(punto)) {    // Object.entries o keys es un constructor con sus métodos estos son estáticos.
  console.log(entry);
}


for (let llave in punto) {        // código más moderno para poder acceder a las propiedades del objeto.
  console.log(llave, punto[llave]);
}