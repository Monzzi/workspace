function arrojar_cantidad_digitos() {
  let digito = prompt('Introduce un dígito cualquiera (¡OJO!: SIN espacios)');
  let numero = prompt('Introduce un número cualquiera (¡OJO!: SIN espacios)');

  if ((digito === null || digito.trim() === '') || (digito.length !== 1) ||
    (numero === null || numero.trim() === '') || isNaN(digito) || isNaN(numero)) {
    alert("Atención error: comprueba que has introducido correctamente los dos datos");
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
function iniciar_calculo() {
  document.getElementById('resultado').innerHTML = '';
  const { digito, numero, repeticiones } = arrojar_cantidad_digitos();

  if (repeticiones !== null) {
    let numero_formateado = Number(numero).toLocaleString('es-ES');
    document.getElementById('resultado').innerHTML = `La cantidad de veces que aparece el dígito ${digito} en el número ${numero_formateado} es: ${repeticiones}`;
  }
}
