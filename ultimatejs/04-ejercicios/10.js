/* Crear un array de longitud N, y que sus elementos sean números de 1 hasta N.
*/


let n = 10;
;

function crearArray(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array;
}

console.log(crearArray(n));