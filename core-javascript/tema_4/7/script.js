function crearMultiplicacion() {
  while (true) {
    let num1 = prompt("Introduce el primer número");
    let num2 = prompt("Introduce el segundo número");

    if ((num1 === null || num1.trim() === "") || (num2 === null || num2.trim() === "")) {
      alert("Atención: debes introducir un número en ambos prompts.");
      continue;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    if (!isNaN(num1) && !isNaN(num2)) {
      const resultado = num1 * num2;
      alert(`El resultado de ${num1.toLocaleString('es-ES')} por ${num2.toLocaleString('es-ES')} es ${resultado.toLocaleString('es-ES')}.`);

    } else {
      alert("Atención ha habido un error en la introducción de los números");
    }
  }
}
