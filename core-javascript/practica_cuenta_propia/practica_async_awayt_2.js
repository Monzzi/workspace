const apiConError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Hubo un error en la API.');
  }, 2000);
});

const manejaError = async () => {
  try {
    console.log('llamando a la API que dará error...');

    // esperamos a que la promesa se resulva
    const resultado = await apiConError;

    console.log(resultado);
  } catch (error) {
    console.error('Error capturado: ', error); // esto captura el error
  }
};
manejaError();
