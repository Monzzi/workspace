let edad = prompt('Ingrese su edad:', '');

if (edad >= 18) {
  alert('Tiene la edad suficiente para conducir');
} else {
  let tiempoEspera = (18 - edad);
  alert('Te faltan ' + tiempoEspera +   ' años para conducir.');
};



