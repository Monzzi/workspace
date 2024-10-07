function fizzbuzz(numero_dado) {

    for (let i = 0; i <= numero_dado; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("FizzBuzz");
  }else if (i % 3 === 0) {
      console.log("Fizz")
  } else if (i % 5 === 0) {
      console.log("Buzz")
  } else {
      console.log(i);
  }
}
}
module.exports = {fizzbuzz}