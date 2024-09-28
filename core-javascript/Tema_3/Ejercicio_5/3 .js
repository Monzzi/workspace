/* Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
Sample numbers : 0, -1, 4
Output : 4, 0, -1 */
const alert = require('node-alert');
function ordenar (x, y, z) {
    if (x > y && y > z) {
        alert(x + ", " + y +", "+ z)
    } else if (x > z && z > y) {
        alert(x + ", " + z + ", " + y)
    } else if (y > x && x > z) {
        alert(y + ", " + x + ", " + z)
    } else if (z > x && x > y) {
        alert (z + ", " + x + ", " + y)
    } else if (z > y && y > x){
         alert(z + ", " + y + ", " + x)
    } else if(y > z &&  z > x) {
        alert(y + ", " + z + ", " + x)
    } else if(z > y & y > x) {
        alert(z + ", " + y + ", " + x)
    }
}
(ordenar(0, -1, -5));





