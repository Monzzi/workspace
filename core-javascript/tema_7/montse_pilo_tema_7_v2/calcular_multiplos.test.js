const obtenerMultiplos = require('./calcular_multiplos');

// Test básico para la función
describe('obtenerMultiplos', () => {
    test('Debe devolver un array con los múltiplos correctos', () => {
        expect(obtenerMultiplos(3, 2)).toEqual([2, 4, 6]);
        expect(obtenerMultiplos(4, 3)).toEqual([3, 6, 9, 12]);
    });

    test('Debe devolver un array vacío si el tamaño es 0', () => {
        expect(() => obtenerMultiplos(0, 2)).toThrow('El tamaño del array y el número base deben ser mayores a 0');
    });

    test('Debe lanzar un error si el tamaño o número base es negativo', () => {
        expect(() => obtenerMultiplos(-1, 2)).toThrow('El tamaño del array y el número base deben ser mayores a 0');
        expect(() => obtenerMultiplos(3, -2)).toThrow('El tamaño del array y el número base deben ser mayores a 0');
    });

    test('Debe devolver un array de 1 múltiplo si el tamaño es 1', () => {
        expect(obtenerMultiplos(1, 5)).toEqual([5]);
    });
});
