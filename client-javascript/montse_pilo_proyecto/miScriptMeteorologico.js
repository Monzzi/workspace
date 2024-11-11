/* Script de ejemplo  */

// Añadimos un event listener al botón HTML.
button = document.getElementById('button');
button.addEventListener('click', ajaxCheckWeather);

function ajaxCheckWeather() {
  // obtenemos la información que necesitamos del formulario
  const ubicacion = document.getElementById('location').value;

  // Mostramos la ubicación en el documento HTML
  muestraUbicacion(ubicacion);

  /* LLAMADA AJAX */
  // usamos la API provista en   https://openweathermap.org/current#name */
  // config llamada AJAX
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&lang=es&appid=17c1b561921036fab226611adfcbc80a`;
  // ejemplo  url = "https://api.openweathermap.org/data/2.5/weather?q=Pamplona,es&&lang=es&appid= MI APIKEY AL REGISTRARME "

  // hacemos llamada AJAX, gestionamos respuesta con responseManager(resp)
  // gestionamos los errores con una alerta
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseManager(JSON.parse(result)))
    .catch((error) => alert('error', error));
}

/* funcion principal que gestiona la respuesta a la llamada AJAX */
function responseManager(resp) {
  console.log(resp);
  cambiaIcono(resp.weather[0].icon);
  muestraDesc(resp.weather[0].description);
  muestraHumedad(resp.main.humidity);

  // Función para convertir de Kelvin con los que responde la API a grados Celsius que los entendemos mejor en España.
  function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(1); // Redondea a un decimal
  }
  // Aplicamos la conversión correcta
  const temperaturaCelsius = kelvinToCelsius(resp.main.temp);
  muestraTemperatura(temperaturaCelsius);
}

/* funciones auxiliares para cambiar el HTML/CSS */

function cambiaIcono(nombreIco) {
  // añade o cambia el icono que tiene el id icono
  // utiliza iconos que se enecuentran en el directorio "img" y que tienen el nombre en formato  nombreIco@2x.png
  icono = document.getElementById('icono');
  icono.src = `img/${nombreIco}@2x.png`;
}

function muestraDesc(desc) {
  // Lleva un texto ( que contiene la descripción de la previsión) a la página HTML
  prev = document.getElementById('prevision');
  prev.innerHTML = desc;
}

function muestraUbicacion(ubicacion) {
  // Lleva un texto (que contiene la ubicación pedida por el usuario) a la pagina HTML
  elemento = document.getElementById('ubicacionPedida');
  elemento.innerHTML = ubicacion;
}

function muestraTemperatura(temperatura) {
  // Lleva un número ( que contiene la temperatura en la ubicación solicitada) a la página HTML
  prev = document.getElementById('temp');
  prev.innerHTML = temperatura;
}

function muestraHumedad(humedad) {
  // Lleva un porcentaje ( que contiene la humedad en la ubicación solicitada) a la página HTML
  prev = document.getElementById('humedad');
  prev.innerHTML = humedad;
}
