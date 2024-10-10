function fizzbuzz(numero_dado) {
    if (typeof numero_dado !== 'number' || isNaN(numero_dado) || numero_dado === '' || numero_dado < 0) {
        return 'Error: Por favor, introduce un número mayor o igual a 0';
      }
    let result = '';

    for (let i = 0; i <= numero_dado; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            result = "FizzBuzz";
        } else if (i % 3 === 0) {
            result = "Fizz"
        } else if (i % 5 === 0) {
            result = "Buzz"
        } else {
            result = i;
        }
    }
    return result;
}
console.log(fizzbuzz(1));
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
console.log(fizzbuzz(0));
console.log(fizzbuzz(-1));
console.log(fizzbuzz('a'));

module.exports = fizzbuzz;
