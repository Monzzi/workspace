const { Error } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const obtenerMultiplos = (num, tamaño) => {
  if (tamaño <= 0) {
   throw new Error('Por favor, introduce valores válidos.');
  }
  const multiplos = [];
  for (let i = 1; i <= tamaño; i++) {
    multiplos.push(num * i);
  }
  return multiplos;
};

rl.question('Introduce el tamaño del array: ', (inputTamaño) => {
  const tamaño = parseInt(inputTamaño);

  rl.question('Introduce el número base: ', (inputNumero) => {
    const numero = parseInt(inputNumero);

    if (isNaN(tamaño) || isNaN(numero) || tamaño <= 0) {
      console.log('Por favor, introduce valores válidos.');
    } else {
      const resultado = obtenerMultiplos(numero, tamaño);
      console.log(`Array de múltiplos: ${resultado}`);
    }

    rl.close();
  });
});

module.exports = {
  obtenerMultiplos,
};