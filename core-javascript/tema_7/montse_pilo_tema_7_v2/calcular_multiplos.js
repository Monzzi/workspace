// Importar el paquete prompt-sync
const prompt = require('prompt-sync')();

// Función que recibe un tamaño y un número base para devolver un array de múltiplos
function obtenerMultiplos(tamano, numeroBase) {
    if (tamano <= 0 || numeroBase <= 0) {
        throw new Error('El tamaño del array y el número base deben ser mayores a 0');
    }
    const multiplos = [];
    for (let i = 1; i <= tamano; i++) {
        multiplos.push(numeroBase * i);
    }
    return multiplos;
}

// Solicitar el tamaño del array y el número base utilizando prompt-sync
const tamano = parseInt(prompt('Introduce el tamaño del array: '));
const numeroBase = parseInt(prompt('Introduce el número base para generar los múltiplos: '));

try {
    const resultado = obtenerMultiplos(tamano, numeroBase);
    console.log(`Array de múltiplos: ${JSON.stringify(resultado)}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}

module.exports = obtenerMultiplos;

