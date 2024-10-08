const map_with_cb = require('./map_with_cb.js');

test('la función mock_callback debe llamar 3 veces a map_whith_cb con el array [1, 2, 3]', () => {
  const mock_callback = jest.fn();
  const array = [1, 2, 3];

    map_with_cb(array, mock_callback);

    expect(mock_callback).toHaveBeenCalledTimes(3);
});

test('la función mock_callback debe devolver el resultado correcto del array [1, 2, 3] que es [2, 4, 6]', () => {
  const mock_callback = jest.fn(x => x * 2);
  const array = [1, 2, 3];

    map_with_cb(array, mock_callback);

    expect(mock_callback.mock.results[0].value).toBe(2);
    expect(mock_callback.mock.results[1].value).toBe(4);
    expect(mock_callback.mock.results[2].value).toBe(6);
});

test('la función mock_callback debe devolver el resultado correcto del array [10, 20, 30] que es [20, 40, 60]', () => {
  const mock_callback = jest.fn(x => x * 2);
  const array = [10, 20, 30];

    map_with_cb(array, mock_callback);

    expect(mock_callback.mock.results[0].value).toBe(20);
    expect(mock_callback.mock.results[1].value).toBe(40);
    expect(mock_callback.mock.results[2].value).toBe(60);
});
