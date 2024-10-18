/* eslint-disable camelcase */
const { capitalize_last_name } = require('./last_name_capitalizer');
const { ValueError } = require('./last_name_capitalizer');

describe('capitalize_last_name', () => {
  test('should capitalize the last name', () => {
    expect(capitalize_last_name('marisa tomei')).toBe('Marisa TOMEI');
    expect(capitalize_last_name('pol aguilera')).toBe('Pol AGUILERA');
  });

  test('should throw an error if the str is not a string', () => {
    expect(() => capitalize_last_name(42)).toThrowError(TypeError, /str must be a string/);
  });

  test('should throw an error if the str is not exactly two words', () => {
    expect(() => capitalize_last_name('marisaTomei')).toThrowError(ValueError, /str must consist of exactly two words/);
    expect(() => capitalize_last_name('monzzi')).toThrowError(ValueError, /str must consist of exactly two words/);
    expect(() => capitalize_last_name('')).toThrowError(ValueError, /str must consist of exactly two words/);
  });
});
