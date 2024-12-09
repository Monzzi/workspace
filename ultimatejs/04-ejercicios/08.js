 /* Crear un algoritmo que tome un array de objetos y devulva un array de pares.
*/

let array = [{
    id: 1,
    name: 'Monzzi',
  }, {
    id: 2,
    name: 'Crismar',
  }, {
    id: 3,
    name: 'Laia',
  }];

  function toPairs(arr) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
      pairs.push([arr[i].id, arr[i].name]);
    }
    return pairs;
  }

  let resultado = toPairs(array);
  console.log(resultado);