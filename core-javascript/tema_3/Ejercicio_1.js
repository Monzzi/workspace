/* Enunciado:
1. ¿Se puede escribir un switch como un bloque de if?
    o Si la respuesta anterior es sí, pon un ejemplo (lo bueno, si breve…)
    o Si la respuesta anterior es sí, ¿Qué mejoras o desventajas ofrece cada
    manera? ¿Cuál usarías en cada caso?
*/

// Respuesta Montse: Sí, se puede escribir un switch como un bloque de if. 

// Ejemplo switch:  

let estacion = 4;

    switch (estacion) {
     case 1:
        console.log("primavera");
        break;
      case 2:
        console.log("verano");
        break;
      case 3:
        console.log("otoño");
        break;
    case 4:
        console.log("invierno");
        break;
    default:
        console.log("estacion desconocida");
        break;
    
    console.log(estacion);
    }


// Ejemplo if, if-else:

let estacion = "otoño";

    if (estacion == "primavera") {
        console.log("primavera");
    } else if (estacion == "verano") {
        console.log("verano");
    } else if (estacion == "otoño") {
        console.log("otoño");
    } else if (estacion == "invierno") {
        console.log("invierno");
    } else {
        console.log("estacion desconocida");
    
        console.log(estacion);
    }
   
/* Mejoras o ventajas de switch: (respuesta Montse)
Me parece más sencilla de crear y de leer. 
Puede ser más útil cuando a la hora de mostrar muchos datos de caracterísitcas muy 
parecidas. Es más fácil de leer y comprender y de escribir. */


/* Mejoras o ventajas de if, if-else: (respuesta Montse)
Me parece más compleja de crear y de leer, pero
en mi opinión es más versatil y puede contener otro tipo de datos y comparaciones más
complejas */


