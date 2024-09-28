/* 
6. Write a JavaScript program that computes 
the average marks of the following students. 
Then, this average is used to determine 
the corresponding grade.
*/

let student = "";
let mark = 0;

 function grado (student, mark) {
    if (mark <= 100 && mark > 90) {
        console.log(student + " ha conseguido un GRADO A.")
    } else if (mark <= 90 && mark > 80) {
        console.log(student + " ha conseguido un GRADO B.")
    } else if (mark <= 80 && mark > 70) {
        console.log(student + " ha conseguido un GRADO C.")
    } else if (mark <= 70 && mark > 60) {
        console.log(student + " ha conseguido un GRADO D.")
    } else if (mark <= 60) {
        console.log(student + " ha conseguido un GRADO E.")
    } else {
        console.log("Atención revisa la nota. Hay algún error")
    }
}
grado("Montse", 101)