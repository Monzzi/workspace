const descuento = require('./1_testing_agile.js');

test('si el precio es mayor de 200 descuenta 10% el precio es 180', () => {
  expect(descuento(1000)).toBe(900);
});
