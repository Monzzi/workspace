const fs = require('fs').promises;
const path = require('path');

async function createDirectories() {
  // Creación de directorios
  await fs.mkdir(path.join(__dirname, 'stores', '201', 'newDir'));  // Necesita que 'stores/201' exista

  // Creación de directorios de forma recursiva (si las carpetas intermedias no existen)
  await fs.mkdir(path.join(__dirname, 'stores', '201', 'newDir'), { recursive: true });

  // Manejo de errores si el directorio ya existe
  const pathToCreate = path.join(__dirname, 'stores', '201', 'newDirectory');
  try {
    await fs.mkdir(pathToCreate);  // Intentamos crear el directorio
  } catch {
    console.log(`${pathToCreate} already exists.`);  // Si ya existe, mostramos un mensaje
  }
}

// Llamamos a la función
createDirectories();
