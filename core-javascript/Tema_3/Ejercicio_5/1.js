
// 1. Write a JavaScript program that displays the largest integer among two integers.

function comparar(integer1, integer2) {
    if (integer1 > integer2)  {
        console.log(integer1);
    } else if (integer1 < integer2) {
        console.log(integer2); 
    } else 
        console.log("Los números son iguales");    
}
comparar(10, 10);
