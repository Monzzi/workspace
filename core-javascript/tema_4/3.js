// Imprimir sólo los números múltiplos de 20 del 1 al 100 por pantalla.

function ImprimirMultiplos20 () {

    for (i = 1; i <= 100; i++) {

    if (i % 20 === 0) {
         document.getElementById("resultado").innerHTML += i + "<br>";
        }
    }    
}

