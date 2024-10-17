const prompt = require('prompt-sync')();

function get_multiples(size, base_number) {
  if (size <= 0 || isNaN(size) || isNaN(base_number)) {
    throw new Error('Error: check if size and base number are not empty or if size is not <= to 0');
  }
  const multiples = [];
  for (let i = 1; i <= size; i++) {
    multiples.push(base_number * i);
  }
  return multiples;
}

function interact_with_user() {
  const size = parseInt(prompt('Enter the size of the array: '));
  const base_number = parseInt(prompt('Enter the base number: '));

  try {
    const result = get_multiples(size, base_number);
    console.log('Your array of multiples:', result);
  } catch (error) {
    console.error(error.message);
  }
}

if (require.main === module) {
  interact_with_user();
}

module.exports = {
  get_multiples,
  interact_with_user,
};
