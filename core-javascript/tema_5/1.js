// 1. Define con una función recursiva cómo calcularías la serie de Fibonacci.
/* Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. 
La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. 
Por ejemplo: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8) */

function fibonacci (n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
   
 return (fibonacci(n - 1) + fibonacci(n - 2));
}
// fuera de la función este bucle da toda la serie hasta el 20.
for (let i = 0; i <= 20; i++) {
    console.log(fibonacci(i));
} 

    fibonacci(20);



     // Aquí con este bucle calculas toda la serie hasta el 20.