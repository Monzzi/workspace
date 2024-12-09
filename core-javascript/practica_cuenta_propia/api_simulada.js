const apiSimulada = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Datos recibidos de la API simulada');
  }, 3000);
});

console.log('Llamando a la API...');
apiSimulada.then((datos) => console.log(datos));
console.log('Mientras tanto, sigo ejecutando otras tareas...');
