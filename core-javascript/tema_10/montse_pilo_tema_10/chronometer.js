let seconds = 0;
let interval_id = null;
let is_running = false;

function update_chronometer() {
  seconds++;
  let minutes = Math.floor(seconds / 60);
  let seconds_rest = seconds % 60;

  const formatted_time =
    `${(minutes < 10 ? '0' : '') + minutes  }:${
      seconds_rest < 10 ? '0' : '' }${seconds_rest}`;

  return formatted_time;
}

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

function stop_chronometer() {
  clearInterval(interval_id);
  is_running = false;
}

if (typeof document !== 'undefined') {
  document.body.addEventListener('click', () => {
    if (is_running) {
      stop_chronometer();
    } else {
      start_chronometer();
    }
  });
}

module.exports = {
  start_chronometer,
  stop_chronometer,
  update_chronometer,
  is_running,
  seconds,
};
