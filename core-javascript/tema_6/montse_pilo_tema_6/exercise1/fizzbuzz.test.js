const fizzbuzz = require('./fizzbuzz.js');

test('El juego fizzbuzz de 3 es Fizz', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
});

test('El juego fizzbuzz de 0 es Error', () => {
  expect(fizzbuzz(0)).toBe('FizzBuzz');
});

test('El juego fizzbuzz para un string es Error', () => {
  expect(fizzbuzz('hola')).toBe('Error: Por favor, introduce un número mayor o igual a 0');
});

test('El juego fizzbuzz de 1 es 1', () => {
  expect(fizzbuzz(1)).toBe(1);
});

test('El juego fizzbuzz de -1 es Error', () => {
  expect(fizzbuzz(-1)).toBe('Error: Por favor, introduce un número mayor o igual a 0');
});

test('El juego fizzbuzz de 5 es Buzz', () => {
  expect(fizzbuzz(5)).toBe('Buzz');
});

test('El juego fizzbuzz de 15 es FizzBuzz', () => {
  expect(fizzbuzz(15)).toBe('FizzBuzz');
});
