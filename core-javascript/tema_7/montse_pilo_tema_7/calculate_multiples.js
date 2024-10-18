/* eslint-disable camelcase */
const prompts = require('prompts');

function get_multiples(size, base_number) {
  if (size <= 0 || isNaN(size) || isNaN(base_number)) {
    throw new Error('The array size must be greater than 0');
  }
  const multiples = [];
  for (let i = 1; i <= size; i++) {
    multiples.push(base_number * i);
  }
  return multiples;
}

function interact_with_user() {
  prompts([
    {
      type: 'number',
      name: 'size',
      message: 'Enter the size of the array you want:',
    }, {
      type: 'number',
      name: 'base_number',
      message: 'Enter the base number you want to generate its multiples:',
    }]).then(input => {
    try {
      const result = get_multiples(input.size, input.base_number);
      console.log(`Multiples Array: ${JSON.stringify(result)}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  });
}

module.exports = {
  get_multiples,
  interact_with_user,
};

/* istanbul ignore next */
if (require.main === module) interact_with_user();
