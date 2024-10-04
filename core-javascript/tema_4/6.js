/* Imprimir por pantalla
las tablas de multiplicar del 0 al 9
*/

let resultados = '';

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    const resultado = i * j;
    resultados += (`${i} * ${j} = ${resultado}<br>`)
  }
  }

document.getElementById('resultado').innerHTML = resultados;