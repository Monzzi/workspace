/* 2. Define una función que al clicar el botón del 
ratón la llames y te escriba
en la página un saludo
*/

function clickSaludar () {
    document.getElementById("saludo").innerHTML = "¡Muchos saludos desde Tafalla!";
}
window.onload = function() {
    document.addEventListener("click", clickSaludar);
}