function validarRespuestas() {
    let pregunta1 = prompt("¿Cuál es la capital de Finlandia?").trim().toLowerCase(); 
    let pregunta2 = prompt("¿Cuál es la raíz cuadrada de 64?").trim();

    let esCorrectaPregunta2 = (parseInt(pregunta2) === 8 || pregunta2.toLowerCase() === "ocho");

         if (pregunta1 === "helsinki" && esCorrectaPregunta2) {
              document.getElementById("resultado").textContent = "Muy bien. Eres muy inteligente.";
         } else {
              document.getElementById("resultado").textContent = "Ohhhh. Vuelve a intentarlo.";
         }
}

