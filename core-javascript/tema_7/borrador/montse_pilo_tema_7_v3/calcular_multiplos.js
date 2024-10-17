const prompt = require('prompt-sync')();

// Función que recibe un tamaño y un número base para devolver un array de múltiplos
function obtenerMultiplos(tamano, numeroBase) {
    if (tamano <= 0 || numeroBase <= 0 || isNaN(tamano) || isNaN(numeroBase)) {
        throw new Error('El tamaño del array y el número base deben ser mayores a 0');
    }
    const multiplos = [];
    for (let i = 1; i <= tamano; i++) {
        multiplos.push(numeroBase * i);
    }
    return multiplos;
}

// Función para interactuar con el usuario
function interactuarConUsuario() {
    const tamano = parseInt(prompt('Introduce el tamaño del array: '));
    const numeroBase = parseInt(prompt('Introduce el número base para generar los múltiplos: '));

    try {
        const resultado = obtenerMultiplos(tamano, numeroBase);
        console.log(`Array de múltiplos: ${JSON.stringify(resultado)}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// Solo ejecutar la interacción si no estamos en un entorno de test
if (require.main === module) {
    interactuarConUsuario();
};

module.exports = {
    obtenerMultiplos,
};