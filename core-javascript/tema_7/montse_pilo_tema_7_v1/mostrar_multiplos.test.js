const { input_values, show_multiples } = require('./mostrar_multiplos');

describe('Test de generación de múltiplos', () => {
    let dom;
    let document;

    beforeEach(() => {
        const fs = require('fs');
        const path = require('path');
        const { JSDOM } = require('jsdom');
        const html = fs.readFileSync(path.resolve(__dirname, 'mostrar_multiplos.html'), 'utf-8');
        dom = new JSDOM(html);
        document = dom.window.document;
        global.document = document;
        global.window = dom.window;
        global.navigator = dom.window.navigator;
    });

    test('debería mostrar un mensaje de error si se ingresan valores no válidos: números negativos o ningun número', () => {
        document.getElementById('array_size').value = '-1';
        document.getElementById('number').value = '';
        show_multiples();
        expect(document.getElementById("result").textContent.trim()).toBe('Por favor, introduce números válidos.');
    });

    test('debería mostrar los múltiplos correctos', () => {
        document.getElementById('array_size').value = '3';
        document.getElementById('number').value = '5';
        document.querySelector('button').click();
        expect(document.getElementById("result").textContent.trim()).toBe('El resultado es: 5,10,15');
    });

    // Test directo para input_values
    test('input_values debería devolver el array correcto de múltiplos', () => {
        expect(input_values(3, 5)).toEqual([5, 10, 15]);
        expect(input_values(4, 2)).toEqual([2, 4, 6, 8]);
        expect(input_values(0, 5)).toEqual([]);
    });
});

