/* 4. Write a JavaScript conditional statement 
to find the largest of five numbers. 
Display an alert box to show the results.
Sample numbers : -5, -2, -6, 0, -1
Output : 0
*/

function buscarMasGrande (a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e) {
        alert("El número más grande es " + a)
    } else if (b > a && b > c && b > d && b > e) {
        alert("El número más grande es " + b)
    } else if (c > a && c > b && c > d && c > e) {
        alert("El número más grande es " + c)
    } else if (d > a && d > b && d > c && d > e)  {
        alert("El número más grande es " + d)
    } else if(e > a && e > b && e > c && e > d) {
        alert("El número más grande es " + e)
    }  else {
        alert("Todos los números son iguales")
    }
    }
    
buscarMasGrande(5000, 100, 999, 0, -1)