/* Índice validar que no sea menor a cero y que el elmento existe en el array */

function getByIndex(array, index) {
  if (index < 0 || array.length <= index) {
    return undefined;
  }
  return array[index];
}
let resultado = getByIndex([1, 2, 3], 2);
console.log(resultado);

resultado = getByIndex([1, 2, 3], -1);
console.log(resultado);

resultado = getByIndex([1, 2, 3], 4);
console.log(resultado);

resultado = getByIndex([1, 2, 3], 0);
console.log(resultado);
