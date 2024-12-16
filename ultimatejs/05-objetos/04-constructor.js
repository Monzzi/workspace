// { id:1, recuperarClave: function() {} }
function Usuario () {
  this.id = 1;
  this.recuperarClave = function() { // cuando tenemos una propiedad a la que asignamos una fucnión esta pasa a llamarse metodo.
    console.log('recuperando clave... ');
  }
}

let usuario = new Usuario();

console.log(usuario);
