function input_values(array_size, number) {
  let created_array = [];
  for (let i = 1; i <= array_size; i++) {
    created_array.push(i * number);
  }
  return created_array;
}
// console.log(input_values(5, 3)); todo @montsepilo para testear con node en terminal.

function show_multiples() {
  const array_size = parseInt(document.getElementById("array_size").value);
  const number = parseInt(document.getElementById("number").value);

  if (isNaN(array_size) || isNaN(number) || array_size < 0 || number < 0) {
      document.getElementById("result").innerHTML = 'Por favor, introduce números válidos.';
      return;
  }

  let result = input_values(array_size, number);
  document.getElementById("result").innerHTML = `El resultado es: ${result.join(', ')}`;
}

document.querySelector('button').addEventListener('click', show_multiples);

module.exports = {
  input_values,
  show_multiples,
};
