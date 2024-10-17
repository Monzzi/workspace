const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const get_multiples = (size, number) => {
  if (size <= 0 || size === undefined || number === undefined) {
    throw 'Por favor, introduce valores válidos.';
  }
  const multiplos = [];
  for (let i = 1; i <= size; i++) {
    multiplos.push(number * i);
  }
  return multiplos;
};
const ejecutarPrograma = async () => {
  const size = await new Promise((resolve) => {
    rl.question('Introduce el size del array: ', (inputsize) => {
      resolve(parseInt(inputsize));
    });
  });

  const number = await new Promise((resolve) => {
    rl.question('Introduce el número base: ', (inputnumber) => {
      resolve(parseInt(inputnumber));
    });
  });

  // Validación de entradas
  if (isNaN(size) || isNaN(number) || size <= 0) {
    console.log('Por favor, introduce valores válidos.');
  } else {
    const resultado = get_multiples(size, number);
    console.log(`Array de múltiplos: [${resultado.join(', ')}]`);
  }

  rl.close();
};

if (require.main === module) {
  ejecutarPrograma();
}

module.exports = {
  get_multiples,
  ejecutarPrograma,
};
