const api1 = new Promise((resolve) => setTimeout (() => resolve('Datos de api1'), 3000));
const api2 = new Promise((resolve) => setTimeout (() => resolve('Datos de api2'), 2000));
const api3 = new Promise((resolve) => setTimeout (() => resolve('Datos de api3'), 1000));

const obtenerTodosLosDatos = async () => {
    console.log('Inicio llamada a las APIs...');
    const datos1 = await api1;
    console.log(datos1);

    const datos2 = await api2;
    console.log(datos2);

    const datos3 = await api3;
    console.log(datos3);
};

obtenerTodosLosDatos();
