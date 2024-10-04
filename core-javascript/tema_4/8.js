/* Preguntar un número por input, después,
imprimir todos los
números impares hasta él.
*/

document.getElementById('submitButton').onclick = function() {
  let oneNumber = parseInt(document.getElementById('numberInput').value);
  document.getElementById('result').innerHTML = ''; // Limpiar resultados

  if (!isNaN(oneNumber) && oneNumber > 0) {
      for (let i = 1; i <= oneNumber; i++) {
          if (i % 2 !== 0) {
              document.getElementById('result').innerHTML += i + '<br>'; // Mostrar número impar
          }
      }
  } else {
      document.getElementById('result').innerHTML = 'Error: introduce un número entero positivo.'; // Mensaje de error
  }
};


