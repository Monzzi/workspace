  let array_size = Number;
  let number = Number;

  function show_multiples(array_size, number) {

    if (array_size <= 0 || number <= 0) {
      return 'Error: Por favor, introduce un número > 0';
}

    let created_array = [];
    for (let i = 1; i <= array_size; i++) {
    created_array.push(i * number);
  }
    return (created_array);
};

    let result = show_multiples(array_size, number);
    console.log(result);

module.exports = show_multiples;
