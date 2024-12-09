const promesa = new Promise((resolve, reject) => {
  const exito = true;
  if (exito) {
    resolve('¡Promesa cumplida!');
  } else {
    reject('¡¡Oooh hubo un error!!');
    }
  });

  promesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);

  });
