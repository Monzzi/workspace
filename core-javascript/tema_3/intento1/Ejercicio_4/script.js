function chequearRueda() {
  const diametro = prompt("Introduce el diámetro de la rueda en metros: ");
  const grosor = prompt("Introduce el grosor de la rueda en metros: ");

  let mensajes = "";

  if (!(diametro > 0) || !(grosor > 0)) {
    mensajes += "<p>Los datos introducidos son erróneos.</p>";
    document.getElementById("mensajes").innerHTML = mensajes;
    return;
  }

  if (diametro > 1.4) {
    mensajes += "<p>La rueda es para un vehículo grande.</p>";
  } else if (diametro <= 1.4 && diametro > 0.8) {
    mensajes += "<p>La rueda es para un vehículo mediano.</p>";
  } else {
    mensajes += "<p>La rueda es para un vehículo pequeño.</p>";
  }

  if ((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {
    mensajes += "<p>El grosor para esta rueda es inferior al recomendado.</p>";
  } else {
    mensajes += "<p>Esta rueda está dentro de los parámetros de seguridad.</p>";
  }

  document.getElementById("mensajes").innerHTML = mensajes;
}
