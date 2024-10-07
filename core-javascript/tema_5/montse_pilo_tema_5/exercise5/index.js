function arrojar_cantidad_digitos() {
  let digito = prompt('Introduce un dígito cualquiera (atención: SIN espacios)');
  let numero = prompt('Introduce un número cualquiera (atención: SIN espacios)');

  if ((digito === null || digito.trim() === '') || (digito.length !== 1) ||
    (numero === null || numero.trim() === '') || isNaN(digito) || isNaN(numero)) {
    alert("Atención: comprueba que has introducido correctamente los datos (dígito y número)");
    return null;
  }

  let repeticiones = 0;
  const digito_a_string = digito.toString();
  const numero_a_string = numero.toString();

  for (let i = 0; i < numero_a_string.length; i++) {
    if (numero_a_string[i] == digito_a_string) {
      repeticiones += 1;
    }
  }
  return { digito, numero, repeticiones };
}
function iniciarCalculo() {
  document.getElementById('resultado').innerHTML = '';
  const {digito, numero, repeticiones} = arrojar_cantidad_digitos();

  if (repeticiones !== null) {
    document.getElementById('resultado').innerHTML =
      `La cantidad de veces que aparece el dígito ${digito} en el número ${numero} es: ${repeticiones}`;
  }
}
