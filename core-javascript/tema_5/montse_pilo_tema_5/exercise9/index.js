function titulo(string_dado) {
  const string_separado = string_dado.split(' ');
  let resultado = '';

  for (let i = 0; i < string_separado.length; i++) {
    const array_creado = string_separado[i];
    resultado += array_creado.charAt(0).toUpperCase() + array_creado.substring(1).toLowerCase() + ' ';
  }
  return resultado.trim();
}

document.getElementById('boton_transformar').addEventListener('click', function () {
  const fraseUsuario = document.getElementById('input_usuario_frase').value;
  if (!fraseUsuario) {
    document.getElementById('resultado').innerHTML = 'Por favor, ingresa una frase válida.';
    return;
  }
  const resultado = titulo(fraseUsuario);
  document.getElementById('resultado').innerHTML = resultado;
});
