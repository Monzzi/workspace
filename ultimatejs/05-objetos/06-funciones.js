function Usuario(nombre) {  // función constructor es un objeto de primer orden.
  this.name = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length); // cantidad de argumentos que recibe una función.

const U = Usuario;
let user = new U('Nico');
console.log(user);

function of(Fn, arg) {
  return new Fn(arg);
}

let user2 = of(Usuario, 'Nico'); // pasar unas funciones a otras funciones como argumento.
console.log(user2);



// también se pueden retornar dentro de otras funciones:
function returned() {
  return function() {   // una función que retorna otra función. 
    console.log('Hola mundo');
}
}

let saludo = returned();
saludo();
