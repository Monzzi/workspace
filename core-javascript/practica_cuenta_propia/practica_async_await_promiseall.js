const api1 = new Promise((resolve) => setTimeout (() => resolve('Datos de api1'), 3000));
const api2 = new Promise((resolve) => setTimeout (() => resolve('Datos de api2'), 2000));
const api3 = new Promise((resolve) => setTimeout (() => resolve('Datos de api3'), 1000));

const obtenerDatosParalelo = async () =>  {
    const resultados = await Promise.all([api1, api2, api3]);
    console.log('Datos recibidos en paralelo: ', resultados);
}

obtenerDatosParalelo();
