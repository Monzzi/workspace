function fizzbuzz(numero_dado) {
    if (typeof numero_dado !== 'number' || isNaN(numero_dado) || numero_dado === '' || numero_dado <= 0) {
        return 'Error: Por favor, introduce un número > 0';
      }
    let result = '';

    for (let i = 1; i <=numero_dado; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            result = "FizzBuzz";
        } else if (i % 3 === 0) {
            result = "Fizz"
        } else if (i % 5 === 0) {
            result = "Buzz"
        } else {
        }
    }
    return result;
}
fizzbuzz(15);

module.exports = fizzbuzz;