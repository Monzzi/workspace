// function cualEsMayor(a, b) {
//   if (a > b) {
//     return a;
// } else if (b > a) {
//   return b;
// } else {
//   return 'son iguales';
// }
// }

// let mayor = (cualEsMayor(10, 5));
// console.log(mayor);


// con operador ternario
function cualEsMayor(a, b) {
  return (a > b) ? a : b;
}

console.log(cualEsMayor(1, 5));
