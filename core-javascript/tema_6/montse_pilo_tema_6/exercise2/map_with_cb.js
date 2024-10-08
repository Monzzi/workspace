function map_with_cb(array, callback) {
  return array.map(callback);
}

map_with_cb([1, 2, 3], x => x * 2);

module.exports = map_with_cb;