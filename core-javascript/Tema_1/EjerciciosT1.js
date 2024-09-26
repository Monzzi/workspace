//Ejercicios pdf 1.Exercises
// 1. Declara una variable normal y una constante
let normal = "String";
const constante = "String2";

// 2.  Declara una variable normal. Asígnala después a un número
let numero = 1;

// 3. Declara dos variables numéricas y declara una tercera con su suma
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log(sum);

// 4. Declara dos variables de string y declara una tercera con su suma
let str1 = "hola";
let str2 = "mundo";
let sum2 = str1 + str2;
console.log(sum2);

// 5. Informate, ¿cómo se declara una clase?
/* Resumen rápido:
class: Define una clase.
constructor(): Método especial que se ejecuta cuando creamos un objeto de la clase.
this: Se refiere al objeto actual que estás creando.
Método: Es una función que realiza una acción dentro de la clase.
Objeto: Creas un nuevo objeto de una clase usando new.
*/
// Definición de la clase Persona
class Persona {
    // Constructor para inicializar el objeto con nombre y edad
    constructor(nombre, edad) {
        this.nombre = nombre; // Propiedad nombre
        this.edad = edad;     // Propiedad edad
    }

    // Método para mostrar la información de la persona
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

// Crear una instancia (objeto) de la clase Persona
const persona1 = new Persona("Carlos", 30);
const persona2 = new Persona("Ana", 25);

// Llamar al método mostrarInfo para mostrar los datos
persona1.mostrarInfo();  // Resultado: Nombre: Carlos, Edad: 30
persona2.mostrarInfo();  // Resultado: Nombre: Ana, Edad: 25

// 6. Ejercicios realizados en www.w3schools.com
