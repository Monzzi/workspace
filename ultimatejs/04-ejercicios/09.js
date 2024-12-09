/* Crear un algoritmo que devuelva un array en base a unos pares. */

let pairs = [
  [1, { name: 'Monzzi' }],
  [2, { name:'Crismar' }],
  [3, { name: 'Laia' }],
];

// let array = pairs.map(pair => pair[1]);
//console.log(array);

function toCollection(arr) {
  let collection = [];
  for (idx in arr) {
    let elemento = arr[idx];
    collection[idx] = elemento[1];
    collection[idx].id = elemento[0];
  }
  return collection;
}

console.log(toCollection(pairs));
