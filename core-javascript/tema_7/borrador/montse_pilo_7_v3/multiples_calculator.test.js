const { obtenerMultiplos } = require('./multiples_calculator');

describe('obtenerMultiplos', () => {
  it('Devuelve un array con múltiplos del número dado', () => {
    expect(obtenerMultiplos(2, 3)).toEqual([2, 4, 6]);
    expect(obtenerMultiplos(5, 4)).toEqual([5, 10, 15, 20]);
  });
  it('Devuelve un error si el tamaño es cero o negativo', () => {
    expect(() => obtenerMultiplos(2, -1)).toThrow('Por favor, introduce valores válidos.');
  });
});
