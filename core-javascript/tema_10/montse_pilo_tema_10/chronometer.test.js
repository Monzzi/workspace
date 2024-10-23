const { update_chronometer, start_chronometer, stop_chronometer, is_running, seconds } = require('./chronometer');

describe('chronometer', () => {
  test('El cronómetro debe estar detenido al inicio y mostrar 00:00', () => {
    start_chronometer();
    expect(seconds).toBe(0);
    expect(update_chronometer()).toBe('00:01');
    expect(is_running).toBe(false);
  });

  test('El formato del tiempo debe ser correcto (MM:SS)', () => {
    let result = update_chronometer();
    expect(result).toBe('00:02');
    for (let i = 0; i < 59; i++) {
      result = update_chronometer();
    }
    expect(result).toBe('01:01');

    for (let i = 0; i < 60; i++) {
      result = update_chronometer();
    }
    expect(result).toBe('02:01');
});

  test('Debe iniciar el cronómetro', () => {
    start_chronometer();
    expect(is_running).toBe(false);
  });

  test('Debe detener el cronómetro y no incrementar el tiempo', () => {
    stop_chronometer();
    const current_time = seconds;
    expect(is_running).toBe(false);

    for (let i = 0; i < 10; i++) {
      update_chronometer();
    }
    expect(seconds).toBe(current_time);
  });
});
