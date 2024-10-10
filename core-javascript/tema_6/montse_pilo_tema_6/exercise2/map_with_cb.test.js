const map_with_cb = require('./map_with_cb.js');

// 1
test('throws an error if first argument is not an array', () => {
  expect(() => map_with_cb('string', ((item) => item * 2))).toThrow('The first parameter must be an array and the second must be a function.');
});

// 2
test('throws an error if second argument is not a function', () => {
  expect(() => map_with_cb([1, 2, 3], 'not a function')).toThrow('The first parameter must be an array and the second must be a function.');
});

// 3
test('calls the given function at least once', () => {
  const mock_callback = jest.fn();
  map_with_cb([1, 2, 3], mock_callback);
  expect(mock_callback).toHaveBeenCalled();
});

// 4
test('calls the given function a number of times equal to the length of the given array', () => {
  const mock_callback = jest.fn();
  map_with_cb([1, 2, 3], mock_callback);
  expect(mock_callback).toHaveBeenCalledTimes(3);
});

// 5
test('calls the given function with any one item from the given array', () => {
  const mock_callback = jest.fn();
  map_with_cb([1, 2, 3], mock_callback);
  expect(mock_callback).toHaveBeenCalledWith(1);
});

// 6
test('calls the given function a second time with the second item in the given array', () => {
  const mock_callback = jest.fn();
  map_with_cb([1, 2, 3], mock_callback);
  expect(mock_callback).toHaveBeenCalledWith(2);
});

// 7
test('calls the given function a final time with the final item in the given array', () => {
  const mock_callback = jest.fn();
  map_with_cb([1, 2, 3], mock_callback);
  expect(mock_callback).toHaveBeenCalledWith(3);
});
