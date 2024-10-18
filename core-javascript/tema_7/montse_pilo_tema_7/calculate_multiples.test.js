const { get_multiples, interact_with_user } = require('./calculate_multiples');
const prompts = require('prompts');

jest.mock('prompts');

describe('get_multiples', () => {
  test('Must return an array with the correct multiples', () => {
    expect(get_multiples(3, 2)).toEqual([2, 4, 6]);
    expect(get_multiples(4, 3)).toEqual([3, 6, 9, 12]);
  });

  test('Must return an error if the array size is 0', () => {
    expect(() => get_multiples(0, 2)).toThrow('The array size must be greater than 0');
  });

  test('Must return an error if the size o base number is a negative number', () => {
    expect(() => get_multiples(-1, 2)).toThrow('The array size must be greater than 0');
  });

  test('Must return an array with 1 multiple if the size is 1', () => {
    expect(get_multiples(1, 5)).toEqual([5]);
  });

  test('Must return an error if size or base number are empty', () => {
    expect(() => get_multiples()).toThrow('The array size must be greater than 0');
  });
});

describe('interact_with_user', () => {
  afterAll(() => jest.restoreAllMocks());
  test('User must insert correct size and base_number values', async () => {
    prompts.mockResolvedValueOnce({
      size: 3,
      base_number: 2,
    });
    const consoleMock = jest.spyOn(console, 'log').mockImplementation();
    await interact_with_user();
    expect(consoleMock).toHaveBeenCalledWith('Multiples Array: [2,4,6]');
  });
  test('Must return an error if user insert invalid values', async () => {
    prompts.mockResolvedValueOnce({
      size: 0,
      base_number: 2,
    });
    const consoleMock = jest.spyOn(console, 'error').mockImplementation();
    await interact_with_user();
    expect(consoleMock).toHaveBeenCalledWith('Error: The array size must be greater than 0');
  });
});
