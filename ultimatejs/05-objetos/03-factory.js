// let user = {
//   id: 1,
//   email: 'nico@holamundo.com',
//   name: 'Nico',
//   active: true,
//   recuperarClave: function() {    //función anónima
//     console.log('recuperando clave... ');
//   },
// };

// let user1 = {
//   id: 2,
//   email: 'lola@holamundo.com',
//   name: 'Lola',
//   active: false,
//   recuperarClave: function() {    //función anónima
//     console.log('recuperando clave... ');
//   },
// }; muy repetitivo para crear muchos usuarios utilizamos lo que sigue:

function crearUsuario(name, email) {
  return {
    email,
    name,
    active: true,
    recuperarClave: function() {    //función anónima
      console.log('recuperando clave... ');
    },
  };
}

let user1 = crearUsuario('Monzzi', 'monzzi@monzzi.com');
let user2 = crearUsuario('Nico', 'nico@nico.com');
let user3 = crearUsuario('Lola', 'lola@lola.com');

console.log(user1, user2, user3);

