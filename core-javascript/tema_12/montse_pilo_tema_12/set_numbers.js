function getRange(inputSet, rangeMin, rangeMax) {
  return new Set([...inputSet].filter((num) => num >= rangeMin && num <= rangeMax));
}

const numbersSet = new Set([11, 22, 33, 44, 55, 66, 77, 88, 99, 100]);
console.log([...getRange(numbersSet, 30, 60)]);

module.exports = {
  getRange,
};
