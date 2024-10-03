/* 3. Crea una función que convierta de Farenheit a Celsius, y si quieres que
convierta de Celsius a Farenheit, y otra tercera que haga las dos cosas
dependiendo el input.
*/

let gradosFarenheit = 10;
let gradosCelsius = 50;

function convertirGradosFaGradosC (gradosFarenheit) {
    return Math.floor((gradosFarenheit - 32) * 5 / 9);
}
    
function convertirGradosCaGradosF (gradosCelsius) {
    return Math.floor((gradosCelsius * 9 / 5) + 32);
}

    console.log(`${gradosCelsius} grados Celsius son`, convertirGradosCaGradosF(gradosCelsius) + " grados farenheit.");
    console.log(`${gradosFarenheit} grados Farenheit son`, convertirGradosFaGradosC(gradosFarenheit) + " grados celsius.");

function elegirMedida () {
    if (elegirMedida === (gradosFarenheit))
        return convertirGradosFaGradosC();

    else if (elegirMedida === (gradosCelsius)) 
        return convertirGradosCaGradosF();
    }

    elegirMedida(gradosFarenheit);