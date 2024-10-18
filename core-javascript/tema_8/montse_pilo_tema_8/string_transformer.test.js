const { Transform_string } = require('./string_transformer');

test('Transform the string in an array 1 to 1', () => {
  expect(new Transform_string('hola').modify_array_1to1()).toEqual(['h', 'o', 'l', 'a']);
});

test('Order characters in a random way', () => {
  const string = 'hola';
  const result = new Transform_string(string).order_chart_ramdom();

  expect(result.split('').sort()).toEqual(string.split('').sort());
  expect(result.split('').sort()).toEqual(string.split('').sort());
});

test('Invert the characters order', () => {
  expect(new Transform_string('hello').invert_chart_order()).toEqual('olleh');
});

test('remove all vowels', () => {
  expect(new Transform_string('hello').remove_vowels()).toEqual('hll');
});

test('remove all consonants', () => {
  expect(new Transform_string('hello').remove_consonants()).toEqual('eo');
});

test('Transform string in an array of words', () => {
  expect(new Transform_string('hello how are you').convert_into_words()).toEqual(['hello', 'how', 'are', 'you']);
});

test('Invert the order of the words in the string', () => {
  expect(new Transform_string('hello how are you').invert_words_order()).toEqual('you are how hello');
});