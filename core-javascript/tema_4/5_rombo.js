/* DAVID RONCAL REDIN

DAVID RONCAL REDIN
16:59
/ this function tries to draw a diamond with the given size
//
// example, if size is 1:
//
// /\ 0spaces + /\ + 0 spaces
// \/ 0spaces + \/ + 0 spaces
//
// example, if size is 2:
//
// 0 /\ 1 spaces + / + 0 spaces + \ + 1 spaces
// 1 / \ 0 spaces + / + 2 spaces + \ + 0 spaces
// 2 \ / 0 spaces + \ + 2 spaces + / + 0 spaces
// 3 \/ 1 spaces + \ + 0 spaces + / + 1 spaces
//
//
// example, if size is 3:
//
// 0 /\ 2 spaces + / + 0 spaces + \ + 2 spaces
// 1 / \ 1 spaces + / + 2 spaces + \ + 1 spaces
// 2 / \ 0 spaces + / + 4 spaces + \ + 0 spaces
// 3 \ / 0 spaces + \ + 4 spaces + / + 0 spaces
// 4 \ / 1 spaces + \ + 2 spaces + / + 1 spaces
// 5 \/ 2 spaces + \ + 0 spaces + / + 2 spaces
//
//
// example, if size is 4: size -1 * 2
//
// 0 /\ 3 spaces + / + 0 spaces + \ + 3 spaces
// 1 / \ 2 spaces + / + 2 spaces + \ + 2 spaces
// 2 / \ 1 spaces + / + 4 spaces + \ + 1 spaces
// 3 / \ 0 spaces + \ + 6 spaces + / + 0 spaces
// 4 \ / 0 spaces + \ + 6 spaces + / + 0 spaces
// 5 \ / 1 spaces + \ + 4 spaces + / + 1 spaces
// 6 \ / 2 spaces + \ + 2 spaces + / + 2 spaces
// 7 \/ 3 spaces + \ + 0 spaces + / + 3 spaces
//

// size 1 -> line returns -> 2
// size 2 -> line returns -> 4
// size 3 -> line returns -> 6
// size 1 -> spaces returns -> 0
// size 2 -> spaces returns -> 2
// size 3 -> spaces returns -> 4


// function draw_diamond(size) {
// // gets size of the diamond and returns string with the diamond
// let diamond = "";
// let number_lines = 2 * size;
// for (let num_line = 0; num_line < number_lines; num_line++) {
// if (num_line == 0) {
// diamond += String(" ").repeat(size - 1) + "/\\" + String(" ").repeat(size - 1) + "\n";
// }
// else if (num_line == 2 * size - 1) {
// diamond += String(" ").repeat(size - 1) + "\\/" + String(" ").repeat(size - 1) + "\n";
// }
// else {
// if (num_line < size) {
// diamond += String(" ").repeat(size - num_line - 1) + "/" + String(" ").repeat(num_line * 2) + "\\" + String(" ").repeat(size - 2) + "\n";
// }
// else {
// diamond += String(" ").repeat(num_line - size) + "\\" + String(" ").repeat(((size - 1) * 2) - (2 * (num_line - size))) + "/" + String(" ").repeat(num_line - size) + "\n";
// }
// }
// }

// return diamond;
// }
*/

function draw_diamond(size) {
// gets size of the diamond and returns string with the diamond
let diamond = "";
let number_lines = 2 * size;
for (let num_line = 0; num_line < number_lines; num_line++) {
if (num_line < size) {
diamond += String(" ").repeat(size - num_line - 1) + "/" + String(" ").repeat(num_line * 2) + "\\" + String(" ").repeat(size - num_line - 1) + "\n";
}
else {
diamond += String(" ").repeat(num_line - size) + "\\" + String(" ").repeat(((size - 1) * 2) - (2 * (num_line - size))) + "/" + String(" ").repeat(num_line - size) + "\n";
}
}
return diamond;
}


// document.write(draw_diamond(1));

module.exports = {
draw_diamond,
}

// console.log(draw_diamond(2));
// console.log(draw_diamond(10));
