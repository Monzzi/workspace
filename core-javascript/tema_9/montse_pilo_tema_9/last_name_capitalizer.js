/* eslint-disable prefer-template */
/* eslint-disable camelcase */
function capitalize_last_name(str) {
  if (typeof str !== 'string') {
    throw new TypeError('str must be a string');
  }

  class ValueError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValueError';
    }
  }

  const words = str.split(/\s+/);
  if (words.length !== 2) {
    throw new ValueError('str must consist of exactly two words');
  }

  const [firstName, lastName] = words;

  // Retornar el nombre capitalizado y el apellido en mayúsculas
  return `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName.toUpperCase()}`;
}

try {
  console.log(capitalize_last_name('marisa tomei'));
  console.log(capitalize_last_name('pol aguilera'));
  console.log(capitalize_last_name('marisaTomei'));
} catch (error) {
  console.error(error.name + ': ' + error.message);
}

try {
  console.log(capitalize_last_name('monzzi'));
} catch (error) {
  console.error(error.name + ': ' + error.message);
}

try {
  console.log(capitalize_last_name(42));
} catch (error) {
  console.error(error.name + ': ' + error.message);
}

module.exports = {
  capitalize_last_name,
};
