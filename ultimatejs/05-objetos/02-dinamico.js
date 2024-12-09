const user = { id: 1 };

user.name = 'Nico';
user.guardar = function () {
  console.log('Guardando', user.name, user.id);
}

//  user.guardar();

delete user.name;
delete user.guardar;
console.log(user);
