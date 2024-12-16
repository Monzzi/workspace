// Crear una función que consulte el clima de una lista de ciudades usando una API ficticia.



function getWeather(city) {
  return new Promise((resolve, reject) => {
    const weatherData = ['Soleado', 'Nublado', 'Tormenta', 'Nieve'];

    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject('Error al obtener el clima de ' + city);
      } else {
        const weahter = weatherData[Math.floor(Math.random() * weatherData.length)];
        resolve ( {city, weahter} );
      }
    }, 1000);

  });
  }


  async function getWeatherForCities(cities) {
    const promises = cities.map(city =>
      getWeather(city).catch(error => ({city, error}))
    );

    return Promise.all(promises);
  }

  const cities = ['Conxinxina', 'Nueva York', 'Tokio', 'Londres', 'Seul'];

  getWeatherForCities(cities)
  .then(results => console.log(results))
  .catch(error => console.log(error));
