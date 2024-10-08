const show_multiples = require('./mostrar_multiplos.js');

test('si el tamaño del array es 5 y el número dado es 5, el array resultado será : 5, 10, 15, 20, 25', () => {
  expect(show_multiples(5, 5)).toEqual([5, 10, 15, 20, 25]);
});

test('si el tamaño del array es 4 y el número creado es 4, el array resultado es: 4, 8, 18, 20', () => {
  expect(show_multiples(4, 4)).toEqual([4, 8, 12, 16]);
});

test('si el tamaño del array es 0 o el número dado es 0 se mostrará un error', () => {
  expect(show_multiples(0,0)).toBe('Error: Por favor, introduce un número > 0');
});