// let a = 1;
// let b = a;

// b++;

// console.log(a, b);


// let a = {};
// let b = a;

// b.prop = 1;

// console.log(a, b);

// console.log(a === b);


// let a = 1; // los tipos primitivos se copian resultan iguales.

// function suma(n) {
//   n++;
// }
// suma(a);
// console.log(a);  // valores iguales. los almacena igual.


let a = { prop : 1 };

function suma(n) { // tipo de referencia se referencian y son los objetos, los array y las funciones.
  n.prop++;
}
suma(a);
console.log(a);


