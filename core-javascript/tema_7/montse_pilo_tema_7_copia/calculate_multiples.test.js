/* eslint-disable camelcase */
const { get_multiples, interact_with_user } = require('./calculate_multiples'); // Importar ambas funciones
const prompt = require('prompt-sync');

jest.mock('prompt-sync'); // Mockear el módulo prompt-sync

describe('get_multiples', () => {
  test('Must return an array with the correct multiples', () => {
    expect(get_multiples(3, 2)).toEqual([2, 4, 6]);
    expect(get_multiples(4, 3)).toEqual([3, 6, 9, 12]);
  });

  test('Must return an error if the array size is 0', () => {
    expect(() => get_multiples(0, 2)).toThrow('Error: check if size and base number are not empty or if size is not <= to 0');
  });

  test('Must return an error if the size or base number is a negative number', () => {
    expect(() => get_multiples(-1, 2)).toThrow('Error: check if size and base number are not empty or if size is not <= to 0');
  });

  test('Must return an array with 1 multiple if the size is 1', () => {
    expect(get_multiples(1, 5)).toEqual([5]);
  });

  test('Must return an error if size or base number are empty', () => {
    expect(() => get_multiples()).toThrow('Error: check if size and base number are not empty or if size is not <= to 0');
  });
});

// Tests para interact_with_user
describe('interact_with_user', () => {
  beforeEach(() => {
    prompt.mockImplementation(() => jest.fn()); // Inicializa el mock
  });

  test('Must log the correct array of multiples', () => {
    prompt.mockReturnValueOnce('3'); // Simula la entrada del usuario para el tamaño
    prompt.mockReturnValueOnce('2'); // Simula la entrada del usuario para el número base

    const consoleSpy = jest.spyOn(console, 'log'); // Espía el método console.log
    interact_with_user(); // Llama a la función

    expect(consoleSpy).toHaveBeenCalledWith('Your array of multiples:', [2, 4, 6]); // Verifica la salida esperada
    consoleSpy.mockRestore(); // Restaura el espía
  });

  test('Must log an error message if an error occurs', () => {
    prompt.mockReturnValueOnce('0'); // Simula la entrada del usuario con un tamaño inválido
    prompt.mockReturnValueOnce('2'); // Simula la entrada del usuario para el número base

    const consoleErrorSpy = jest.spyOn(console, 'error'); // Espía el método console.error

    interact_with_user(); // Llama a la función

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error: check if size and base number are not empty or if size is not <= to 0'); // Verifica el mensaje de error esperado
    consoleErrorSpy.mockRestore(); // Restaura el espía
  });
});
