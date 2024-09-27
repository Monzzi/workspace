let diametro = 0.9;
let grosor = 0.4;

if (diametro > 1.4) {
    console.log("La rueda es para un vehículo grande.");
} else if (diametro <= 1.4 && diametro > 0.8) {
    console.log("La rueda es para un vehículo mediano.");
} else {
    console.log("La rueda es para un vehículo pequeño.");
}

if (diametro > 1.4 && grosor < 0.4) {       
    console.log("El grosor para esta rueda es inferior al recomendado.");
} else if (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25) {
    console.log("El grosor para esta rueda es inferior al recomendado.");
} else {
    console.log("Esta rueda está dentro de los parametros de seguridad.");
}