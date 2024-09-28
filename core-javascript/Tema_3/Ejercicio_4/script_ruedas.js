function chequearRueda() {
    
let diametro = prompt("Introduce el diametro de la rueda en metros: ");
let grosor = prompt("Introduce el grosor de la rueda en metros: ");


    if (!(diametro>0) || !(grosor>0)) {
        alert('Los datos introducidos son erroneos.');				
            return;
        } 

    if (diametro > 1.4) {
        alert("La rueda es para un vehículo grande.");
        } else if (diametro <= 1.4 && diametro > 0.8) {
             alert("La rueda es para un vehículo mediano.");
        } else {
            alert("La rueda es para un vehículo pequeño.");
        }   

    if (diametro > 1.4 && grosor < 0.4 || diametro <= 1.4 && diametro > 0.8 && grosor < 0.25) {       
        alert("El grosor para esta rueda es inferior al recomendado.");
        } else {
            alert("Esta rueda está dentro de los parametros de seguridad.");
        }
}