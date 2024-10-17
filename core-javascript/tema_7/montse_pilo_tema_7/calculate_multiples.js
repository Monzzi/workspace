/* eslint-disable camelcase */
const prompt = require('prompt-sync')();

function get_multiples(size, base_number) {
  if (size <= 0 || base_number < 0 || isNaN(size) || isNaN(base_number)) {
    throw new Error('The array size must be greater than 0 and base number must be greater or equal than 0');
  }
  const multiples = [];
  for (let i = 1; i <= size; i++) {
    multiples.push(base_number * i);
  }
  return multiples;
}

function interact_with_user() {
  const size = parseInt(prompt('Enter the size of the array you want: '));
  const base_number = parseInt(prompt('Enter the base number you want to generate its multiples:'));

  try {
    const result = get_multiples(size, base_number);
    console.log(`Multiples Array: ${JSON.stringify(result)}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

if (require.main === module) {
  interact_with_user();
}

module.exports = {
    get_multiples,
};
