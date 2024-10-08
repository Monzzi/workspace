const fizzbuzz = require('./fizzbuzz.js');

test('El juego fizzbuzz de 3 es Fizz', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
});
test('El juego fizzbuzz de 0 es Error', () => {
  expect(fizzbuzz(0)).toBe('Error: Por favor, introduce un número > 0');
});
test('El juego fizzbuzz para un string es Error', () => {
  expect(fizzbuzz('hola')).toBe('Error: Por favor, introduce un número > 0');
});



