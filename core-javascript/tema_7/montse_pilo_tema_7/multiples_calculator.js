/* eslint-disable camelcase */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const get_multiples = (size, number) => {
  if (size <= 0 || size === undefined || number === undefined) {
    throw new Error('Please enter valid values.');
  }
  const multiplos = [];
  for (let i = 1; i <= size; i++) {
    multiplos.push(number * i);
  }
  return multiplos;
};
const execute_program = async () => {
  const size = await new Promise((resolve) => {
    rl.question('Enter the size of the array: ', (inputsize) => {
      resolve(parseInt(inputsize, 10));
    });
  });

  const number = await new Promise((resolve) => {
    rl.question('Enter the number of which you want its multiples ', (inputnumber) => {
      resolve(parseInt(inputnumber, 10));
    });
  });

  // Validación de entradas
  if (isNaN(size) || isNaN(number) || size <= 0) {
    console.log('Please enter valid values.');
  } else {
    const result = get_multiples(size, number);
    console.log(`Your multiples array: [${result.join(', ')}]`);
  }

  rl.close();
};

if (require.main === module) {
  execute_program();
}

module.exports = {
  get_multiples,
  execute_program,
};
