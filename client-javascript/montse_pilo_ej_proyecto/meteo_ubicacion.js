function success(pos) {
  const crd = pos.coords;
  const latitude = crd.latitude;
  const longitude = crd.longitude;

  ajaxCheckLatLong(latitude, longitude);
}

function error(err) {
  alert(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);

function ajaxCheckLatLong(latitude, longitude) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=hourly,daily,alerts&units=metric&lang=es&appid=17c1b561921036fab226611adfcbc80a`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => responseManager(data))
    .catch((error) => alert('error', error));
}

function responseManager(resp) {
  console.log(resp);
  nuestraName(resp.name);
  muestraLat(resp.coord.lat);
  muestraLong(resp.coord.lon);
  muestraDesc(resp.weather[0].description);
  muestraTemperatura(resp.main.temp);
  muestraHumedad(resp.main.humidity);
}

/* funciones auxiliares para completar el HTML */
function nuestraName(name) {
  elemento = document.getElementById('nombre');
  elemento.innerHTML = name;
}

function muestraDesc(desc) {
  prev = document.getElementById('previsionTexto');
  prev.innerHTML = desc;
}

function muestraLat(lat) {
  elemento = document.getElementById('lat');
  elemento.innerHTML = lat;
}
 function muestraLong(lon) {
  elemento = document.getElementById('lon');
  elemento.innerHTML = lon;
 }

function muestraTemperatura(temperatura) {
  prev = document.getElementById('temp');
  prev.innerHTML = temperatura;
}

function muestraHumedad(humedad) {
  prev = document.getElementById('humedad');
  prev.innerHTML = humedad;
}
