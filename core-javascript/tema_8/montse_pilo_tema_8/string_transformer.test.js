const {transformar_string} = require('./string_transformer');

test('convertir el string en un array de 1 a 1', () => {
  expect(new transformar_string('hola').convertir_array_1a1()).toEqual(['h', 'o', 'l', 'a']);
});

test('ordenar caracteres de manera aleatoria', () => {
    const string = 'hola';
    const result = new transformar_string(string).ordenar_caracteres_ramdom();

    expect(result.split('').sort()).toEqual(string.split('').sort());
    expect(result.split('').sort()).toEqual(string.split('').sort());
});


test('invertir el orden de los caracteres', () => {
  expect(new transformar_string('hola').invertir_orden_caracteres()).toEqual('aloh');
});

test('eliminar vocales', () => {
  expect(new transformar_string('hola').eliminar_vocales()).toEqual('hl');
});

test('eliminar consonantes', () => {
  expect(new transformar_string('hola').eliminar_consonantes()).toEqual('oa');
});

test('convertir el string en un array de palabras', () => {
  expect(new transformar_string('hola como estas').convertir_array_palabras()).toEqual(['hola', 'como', 'estas']);
});

test('invertir el orden de las palabras', () => {
  expect(new transformar_string('hola como estas').invertir_orden_palabras()).toEqual('estas como hola');
});




