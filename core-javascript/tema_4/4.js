//Dibujar un cuadrado por pantalla

let tamañoCuadrado = 5; // Tamaño del cuadrado
let resultado = ""; // Inicializa una variable para almacenar el resultado

// Bucle para dibujar el cuadrado
for (let i = 0; i < tamañoCuadrado; i++) {
    let fila = ""; // Inicializa una cadena vacía para la fila
    for (let j = 0; j < tamañoCuadrado; j++) {
        fila += "*"; // Agrega un asterisco por cada columna
    }
    resultado += fila + "<br>"; // Agrega la fila y un salto de línea
}

// Imprimir el resultado en el contenedor
document.getElementById("resultado").innerHTML = resultado; // Corrige el uso de innerHTML
