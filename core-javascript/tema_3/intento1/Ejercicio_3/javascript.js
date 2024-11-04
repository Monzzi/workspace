function elegir(productos) { 
    switch (productos)  {
    case "Chaqueta Goretex":
        return document.getElementById("precioChaqueta").textContent=("El precio de la chaqueta es de 250€")
        break;

    case "Botas Chiruca":
        return document.getElementById("precioBotas").textContent=("El precio de las botas es de 150€")
        break;

    case "Mochila Serval":
        return document.getElementById("precioMochila").textContent=("El precio de la mochila es de 100€")
        break;      

    case "Plumas RocNeige":
       return document.getElementById("precioPlumas").textContent=("El precio del plumas es de 500€")
        break;    
        
}
}