const map_with_cb = (array, callback) => {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw Error('The first parameter must be an array and the second must be a function.');
  }
  return array.map(item => callback(item));
};

console.log(map_with_cb([1, 2, 3], ((item) => item * 2)));

console.log(map_with_cb([400, 500, 600], ((item) => item * 2)));

try {
  console.log(map_with_cb(['a', 'b', 'c']));
} catch (error) {
  console.log(error.message);
};

try {
  console.log(map_with_cb([1, 2, 3]));
} catch (error) {
  console.log(error.message);
};

try {
  console.log(map_with_cb(((item) => item * 2)));
} catch (error) {
  console.log(error.message);
};

module.exports = map_with_cb;