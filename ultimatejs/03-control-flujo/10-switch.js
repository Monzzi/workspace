let accion = 'listar';

switch (accion) {
  case 'listar':
    console.log('listar');
    break;
  case 'crear':
    console.log('crear');
    break;
  case 'actualizar':
    console.log('actualizar');
    break;
  default:
    console.log('accion no reconocida');
    break;
}

if (accion === 'listar') {
  console.log('listar');
} else if (accion === 'crear') {
  console.log('crear');
} else if (accion === 'actualizar') {
  console.log('actualizar');
} else {
  console.log('accion no reconocida');
}


// parecido if else, hay que conocer los dos.