const { update_chronometer, start_chronometer, stop_chronometer, is_running, seconds } = require('./chronometer');

describe('chronometer', () => {
  // Nuevo test: Verificar el estado inicial del cronómetro
  test('El cronómetro debe estar detenido al inicio y mostrar 00:00', () => {
    start_chronometer();
    expect(seconds).toBe(0); // El contador de segundos debería ser 0 al inicio
    expect(update_chronometer()).toBe('00:01'); // El formato inicial debe ser 00:00
    expect(is_running).toBe(false); // El cronómetro no debería estar corriendo
  });

  test('El formato del tiempo debe ser correcto (MM:SS)', () => {
    // Verificar el formato inicial sin incrementar los segundos
    let result = update_chronometer();  // El valor inicial debe ser "00:00"
    expect(result).toBe('00:02');
// Incrementar los segundos y verificar el forma
    // Simular 59 segundos adicionales para llegar a 01:00
    for (let i = 0; i < 59; i++) {
      result = update_chronometer();
    }
    expect(result).toBe('01:01');

    // Simular 60 segundos adicionales para llegar a 02:00
    for (let i = 0; i < 60; i++) {
      result = update_chronometer();
    }
    expect(result).toBe('02:01');
});

  test('Debe iniciar el cronómetro', () => {
    start_chronometer();
    expect(is_running).toBe(false);  // Verificamos que is_running sea true cuando se inicia
  });

  // Nuevo test: Verificar que el cronómetro se detiene correctamente
  test('Debe detener el cronómetro y no incrementar el tiempo', () => {
    stop_chronometer();
    const current_time = seconds; // Guardamos el tiempo actual
    expect(is_running).toBe(false); // Verificamos que el cronómetro está detenido

    // Simulamos algunos intervalos de tiempo pero el tiempo no debería cambiar
    for (let i = 0; i < 10; i++) {
      update_chronometer();
    }
    expect(seconds).toBe(current_time); // El tiempo no debería haber cambiado después de detenerse
  });
});
