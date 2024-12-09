/* Crear algoritmo que devuelva la cantidad de número positivos de un array.
*/

let array = [12, 22, 55, 1000, -5, 89, -44];

function contarPositivos(arr) {
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      contador++;
    }
  }
  return contador;
}

console.log(contarPositivos(array));
