const apiSimulada = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Datos recibidos de la API simulada');
  }, 3000);
});

// apiSimulada
//   .then((datos) => {
//     console.log(datos); // aquí se ejecuta si todo va bien
//   })
//   .catch((error) => {
//     console.error('Error', error); // aquí si hay un error
//   });

const obtenerDatos = async () => {
  try {
    console.log('llamando a la API...');

    // esperamos a que la promesa se resulva
    const datos = await apiSimulada;

    console.log(datos); // aquí tendremos el resultado
    console.log('Proceso completado.');
  } catch (error) {
    console.log('Error al obtener los datos: ', error);
  }
};
obtenerDatos();
