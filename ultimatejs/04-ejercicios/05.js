/* crear algoritmo que devuelva el número mayor y el menor de un array.
*/

let array = [12, 22, 55, 1000, -5, 89, -44];

function mayorMenor(arr) {
  let mayor = array[0];
  let menor = array[0];
  for (let i = 0; i < array.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i];
    }
    if (array[i] < menor) {
      menor = arr[i];
    }
  }
  return [mayor, menor];
}

console.log(mayorMenor(array));