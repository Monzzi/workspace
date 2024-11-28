const fs = require('fs').promises;
const path = require('path');

// Función para encontrar todos los archivos .json en una carpeta y subcarpetas
async function findSalesFiles(folderName) {
  let results = [];

  try {
    const items = await fs.readdir(folderName, { withFileTypes: true });
    for (const item of items) {
      const itemPath = path.join(folderName, item.name);
      if (item.isDirectory()) {
        // Si es un directorio, buscamos dentro de él
        const resultsReturned = await findSalesFiles(itemPath);
        results = results.concat(resultsReturned);
      } else {
        // Si es un archivo .json, lo añadimos a los resultados
        if (path.extname(item.name) === '.json') {
          results.push(itemPath);
        }
      }
    }
    return results;
  } catch (error) {
    console.error('Error reading folder:', error.message);
    throw error;
  }
}

// Función para leer los archivos .json y sumar las ventas
async function processSalesData(salesFiles) {
  let totalSales = 0;

  for (const file of salesFiles) {
    try {
      const fileData = await fs.readFile(file, 'utf-8');
      const jsonData = JSON.parse(fileData);

      // Imprimir el contenido del archivo para depuración
      console.log(`Processing file: ${file}`);
      console.log('File contents:', jsonData);

      // Aquí asumimos que cada archivo JSON tiene un campo 'sales' con el monto
      if (jsonData.sales) {
        console.log(`Adding sales from ${file}: ${jsonData.sales}`);
        totalSales += jsonData.sales;
      } else {
        console.log(`No "sales" field found in ${file}`);
      }
    } catch (error) {
      console.error(`Error processing file ${file}:`, error.message);
    }
  }
  return totalSales;
}

async function main() {
  // Ruta de la carpeta stores
  const salesDir = path.join(__dirname, 'stores');
  // Ruta de la carpeta salesTotals (donde se guardarán los totales)
  const salesTotalsDir = path.join(__dirname, 'salesTotals');

  try {
    // Crear la carpeta para guardar los totales, si no existe
    await fs.mkdir(salesTotalsDir, { recursive: true });
  } catch (error) {
    console.log(`${salesTotalsDir} already exists.`);
  }

  // Obtener todos los archivos .json dentro de las carpetas dentro de 'stores'
  const salesFiles = await findSalesFiles(salesDir);

  console.log(`Found ${salesFiles.length} sales files.`);

  // Procesar los datos de ventas
  const totalSales = await processSalesData(salesFiles);

  // Escribir el total en el archivo totals.txt
  const totalsFilePath = path.join(salesTotalsDir, 'totals.txt');
  await fs.writeFile(totalsFilePath, `Total Sales: $${totalSales.toFixed(2)}`);

  console.log(`Total Sales: $${totalSales.toFixed(2)}`);
  console.log(`Wrote sales totals to ${totalsFilePath}`);
}

main();
