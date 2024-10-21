let seconds = 0;
let interval_id = null;
let is_running = false;

// Función para actualizar el cronómetro
function update_chronometer() {
  seconds++;
  let minutes = Math.floor(seconds / 60);
  let seconds_rest = seconds % 60;

  // Formatear el tiempo con dos dígitos
  const formatted_time =
    (minutes < 10 ? '0' : '') + minutes + ':' +
    (seconds_rest < 10 ? '0' : '') + seconds_rest;

  return formatted_time; // Retorna el tiempo formateado para ser usado tanto en el DOM como en los tests
}

// Función para iniciar el cronómetro
function start_chronometer() {
  if (!is_running) {
    interval_id = setInterval(() => {
        
      const time = update_chronometer();
      // Si estamos en un navegador, actualizamos el DOM
      if (typeof document !== 'undefined') {
        document.getElementById('chronometer').textContent = time;
      }
    }, 1000);
    is_running = true;
  }
}

// Función para detener el cronómetro
function stop_chronometer() {
  clearInterval(interval_id);
  is_running = false;
}

// Lógica de manejar clics solo en el navegador
if (typeof document !== 'undefined') {
  document.body.addEventListener('click', () => {
    if (is_running) {
      stop_chronometer();
    } else {
      start_chronometer();
    }
  });
}

// Exportamos las funciones y variables para hacer pruebas
module.exports = {
  start_chronometer,
  stop_chronometer,
  update_chronometer,
  is_running,
  seconds,
};
