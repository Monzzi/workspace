/* 1. Write a JavaScript function to check whether an `input` is an array or not.
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
*/

const es_un_array = (input) => Array.isArray(input);

console.log(es_un_array('w3resource'));
console.log(es_un_array([1, 2, 4, 0]));