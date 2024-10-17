const map_with_cb = require('./map_with_cb.js');

test('throws an error if first argument is not an array', () => {
  expect(() => map_with_cb('string', ((item) => item * 2))).toThrow('The first parameter must be an array and the second must be a function.');
});

test('throws an error if second argument is not a function', () => {
  expect(() => map_with_cb([1, 2, 3], 'not a function')).toThrow('The first parameter must be an array and the second must be a function.');
});

test('calls the given function at least once', () => {
  const mock_callback = jest.fn();
  map_with_cb([1, 2, 3], mock_callback);
  expect(mock_callback).toHaveBeenCalled();
});

test('calls the given function a number of times equal to the length of the given array', () => {
  const mock_callback = jest.fn();
  map_with_cb([1, 2, 3], mock_callback);
  expect(mock_callback).toHaveBeenCalledTimes(3);
});

test('calls the given function with all items in the array (once, twice and a final time)', () => {
  const mock_callback = jest.fn();
  map_with_cb([1, 2, 3], mock_callback);
  expect(mock_callback).toHaveBeenCalledWith(1);
  expect(mock_callback).toHaveBeenCalledWith(2);
  expect(mock_callback).toHaveBeenCalledWith(3);
});

test('calls the array [3, 4, 5] and returns the result (item * 2) = [6, 8, 10]', () => {
  const mock_callback = jest.fn(item => item * 2);
  map_with_cb([3, 4, 5], mock_callback);
  expect(mock_callback.mock.results[0].value).toEqual(6);
  expect(mock_callback.mock.results[1].value).toEqual(8);
  expect(mock_callback.mock.results[2].value).toEqual(10);
});

