/* loops, tipos de bucles
while
do while
for
for in
for of
*/

// cuales son lo número pares

/* while (condicion) {
 lógica a ejecutar
}
 */

let i = 0;
while (i < 10) {
  if (i % 2 === 0) {
  console.log(`numeros pares, ${i}`);
};
i++;
}
console.log('fuera del while');
