const { get_multiples, ejecutarPrograma } = require('./multiples_calculator'); // Importar tus funciones

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

describe('Pruebas para la función get_multiples', () => {
  test('debería devolver un array de múltiplos de 3', () => {
    expect(get_multiples(5, 3)).toEqual([3, 6, 9, 12, 15]);
  });

  test('debería devolver un array de 1 múltiplo si el tamaño es 1', () => {
    expect(get_multiples(1, 3)).toEqual([3]);
  });
  test('debería lanzar un error si el size es 0 o es negativo', () => {
    expect(() => get_multiples(-1, 2)).toThrow('Por favor, introduce valores válidos.');
    expect(() => get_multiples(0, 2)).toThrow('Por favor, introduce valores válidos.');
  });

  test('debería devolver un error si los inputs están vacios', () => {
    expect(() => get_multiples()).toThrow('Por favor, introduce valores válidos.');
  });

  test('debería devolver un array vacío si el tamaño es 1', () => {
    expect(get_multiples(1, 0)).toEqual([0]);
  });

  test('debería funcionar con números negativos', () => {
    expect(get_multiples(3, -2)).toEqual([-2, -4, -6]);
  });
});

test('debería devolver un array de múltiplos de 3 con tamaño 5', () => {
  expect(get_multiples(5, 3)).toEqual([3, 6, 9, 12, 15]);
});

describe('Pruebas para la función ejecutarPrograma', () => {
  test('debería ejecutar el programa y obtener la salida esperada', async () => {
    console.log = jest.fn(); // Mockear console.log para verificar la salida

    await ejecutarPrograma(); // Ejecutar la funció

    expect(console.log).toHaveBeenCalledWith('Array de múltiplos: [3, 6, 9, 12, 15]');
  });
});