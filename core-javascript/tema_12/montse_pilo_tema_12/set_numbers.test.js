// range.test.js
const { getRange } = require('./set_numbers');

describe('getRange', () => {
  test('Caso básico con números dentro del rango', () => {
    const set = new Set([10, 20, 30, 40, 50, 60]);
    expect(getRange(set, 20, 50)).toEqual(new Set([20, 30, 40, 50]));
  });

  test('Sin números dentro del rango', () => {
    const set = new Set([100, 200, 300]);
    expect(getRange(set, 10, 50)).toEqual(new Set());
  });

  test('Conjunto vacío', () => {
    const set = new Set([]);
    expect(getRange(set, 10, 50)).toEqual(new Set());
  });

  test('Rango que incluye todos los valores', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    expect(getRange(set, 1, 5)).toEqual(new Set([1, 2, 3, 4, 5]));
  });

  test('Un solo valor en el conjunto dentro del rango', () => {
    const set = new Set([42]);
    expect(getRange(set, 40, 45)).toEqual(new Set([42]));
  });

  test('Rango que excluye todos los valores', () => {
    const set = new Set([5, 10, 15]);
    expect(getRange(set, 20, 30)).toEqual(new Set());
  });

  test('Rango inverso (mínimo mayor que máximo)', () => {
    const set = new Set([10, 20, 30, 40]);
    expect(getRange(set, 50, 20)).toEqual(new Set());
  });

  test('Conjunto con números negativos', () => {
    const set = new Set([-50, -10, 0, 10, 50]);
    expect(getRange(set, -20, 20)).toEqual(new Set([-10, 0, 10]));
  });

  test('Valores decimales en el conjunto y el rango', () => {
    const set = new Set([0.1, 1.5, 2.8, 3.3, 4.9]);
    expect(getRange(set, 1.0, 4.0)).toEqual(new Set([1.5, 2.8, 3.3]));
  });

  test('Rango donde todos los valores están en los límites superiores e inferiores', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    expect(getRange(set, 3, 3)).toEqual(new Set([3]));
  });
});
