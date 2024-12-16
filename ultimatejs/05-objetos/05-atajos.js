let obj = {};
let obj2 = new Object();

/*
new Array(); []
new Boolean(); true false
new Date();
new Function();
new Number(); 222
new Object();
new RegExp();
new String(); ""  '' ``
*/

function Usuario () {
  this.name = 'Nico';
}
let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");

console.log(s1, s2);
console.log(eval(s1), eval(s2));
console.log(s1);
console.log(s2);
console.log(s1 === s2);
console.log(s2.valueOf());
console.log(s1.valueOf());
console.log(s2.valueOf() === s1.valueOf());
