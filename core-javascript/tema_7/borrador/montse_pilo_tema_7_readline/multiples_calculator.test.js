/* eslint-disable camelcase */
const { get_multiples, execute_program } = require('./multiples_calculator'); // Importar tus funciones

jest.mock('readline', () => {
  const mReadline = {
    createInterface: jest.fn().mockReturnValue({
      question: jest.fn((questionText, callback) => {
        // Simular respuestas del usuario
        if (questionText.includes('size')) {
          callback('5');
        } else {
          callback('3');
        }
      }),
      close: jest.fn(),
    }),
  };
  return mReadline;
});

describe('Tests for the function get_multiples', () => {
  test('should return an array of 5 multiples of 3', () => {
    expect(get_multiples(5, 3)).toEqual([3, 6, 9, 12, 15]);
  });

  test('should return an array of 1 multiple if size is 1', () => {
    expect(get_multiples(1, 3)).toEqual([3]);
  });
  test('should throw an error if size is 0 or negative', () => {
    expect(() => get_multiples(-1, 2)).toThrow('Please enter valid values.');
    expect(() => get_multiples(0, 2)).toThrow('Please enter valid values.');
  });

  test('should return an error if the inputs are empty', () => {
    expect(() => get_multiples()).toThrow('Please enter valid values.');
  });

  test('should return an array of the given number even if the size is 1', () => {
    expect(get_multiples(1, 5)).toEqual([5]);
  });

  test('should work with negative numbers', () => {
    expect(get_multiples(3, -2)).toEqual([-2, -4, -6]);
  });
});

describe('Tests for the function execute_program', () => {
  test('Should run the program and get the expected output', async () => {
    console.log = jest.fn();

    await execute_program();

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Your multiples array: [3, 6, 9, 12, 15]');
  });
});
