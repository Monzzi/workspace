/* 2. Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/

const primer_array = [1, 2, 4, 0];
const array_clon = [...primer_array];

console.log(array_clon);
console.log(primer_array);