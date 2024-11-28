const fs = require('fs').promises;
const path = require('path');

// Función para encontrar todos los archivos .json en una carpeta y subcarpetas
async function findSalesFiles(folderName) {
  let results = [];

  try {
    console.log(`Reading directory: ${folderName}`);
    const items = await fs.readdir(folderName, { withFileTypes: true });
    for (const item of items) {
      const itemPath = path.join(folderName, item.name);
      if (item.isDirectory()) {
        console.log(`Found directory: ${itemPath}`);
        const nestedResults = await findSalesFiles(itemPath);
        results = results.concat(nestedResults);
      } else if (path.extname(item.name) === '.json') {
        console.log(`Found JSON file: ${itemPath}`);
        results.push(itemPath);
      }
    }
    return results;
  } catch (error) {
    console.error('Error reading directory:', error.message);
    throw error;
  }
}

// Función para leer los archivos .json y calcular el total de ventas
async function calculateTotalSales(salesFiles) {
  let totalSales = 0;

  for (const file of salesFiles) {
    try {
      console.log(`Reading file: ${file}`);
      const fileContent = await fs.readFile(file, 'utf-8');
      const jsonData = JSON.parse(fileContent);

      console.log(`Content of ${file}:`, jsonData);

      // Verificar si el campo 'total' existe y sumarlo
      if (jsonData.total) {
        console.log(`Adding total from ${file}: ${jsonData.total}`);
        totalSales += jsonData.total;
      } else {
        console.warn(`No 'total' field found in ${file}`);
      }
    } catch (error) {
      console.error(`Error reading or processing file ${file}:`, error.message);
    }
  }

  return totalSales;
}


// Función principal
async function main() {
  const salesDir = path.join(__dirname, 'stores'); // Ruta de la carpeta 'stores'
  const salesTotalsDir = path.join(__dirname, 'salesTotals'); // Ruta de la carpeta 'salesTotals'

  try {
    console.log(`Creating directory: ${salesTotalsDir}`);
    await fs.mkdir(salesTotalsDir, { recursive: true });
  } catch (error) {
    console.error(`Error creating directory ${salesTotalsDir}:`, error.message);
    throw error;
  }

  try {
    // Buscar todos los archivos .json dentro de 'stores'
    console.log(`Finding sales files in: ${salesDir}`);
    const salesFiles = await findSalesFiles(salesDir);

    console.log(`Found ${salesFiles.length} sales files.`);

    // Calcular el total de ventas
    const totalSales = await calculateTotalSales(salesFiles);

    console.log(`Total Sales Calculated: $${totalSales.toFixed(2)}`);

    // Escribir el total en 'totals.txt'
    const totalsFilePath = path.join(salesTotalsDir, 'totals.txt');
    console.log(`Writing total sales to: ${totalsFilePath}`);
    await fs.writeFile(totalsFilePath, `Total Sales: $${totalSales.toFixed(2)}`);

    console.log(`Total Sales: $${totalSales.toFixed(2)}`);
    console.log(`Wrote sales totals to ${totalsFilePath}`);
  } catch (error) {
    console.error('Error processing sales data:', error.message);
  }
}

main();
