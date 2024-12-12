const https = require('https');
const fs = require('fs');
const path = require('path');

const key = fs.readFileSync(path.join(__dirname, 'key.pem')); // Archivo de clave
const cert = fs.readFileSync(path.join(__dirname, 'cert.pem')); // Archivo de certificado


// Crear un servidor básico
const server = https.createServer( { key, cert }, (req, res) => {
  if (req.url === '/api/data') {
    // servir el archivo JSON
    const filePath = path.join(__dirname, 'data.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify( { error: `Algo ha ido mal: ${err.code}`}));
      }else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
      case '.css':
        contentType = 'text/css';
        break;
      case '.js':
        contentType = 'text/javascript';
        break;
    }

  // Leer el archivo y enviarlo al cliente
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Uy, lo sentimos, no pudimos encontrar lo que buscabas</h1>');
      } else {
        res.writeHead(500);
        res.end(`Algo ha ido mal: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
}
});

const PORT = 3443;
server.listen(PORT, () => {
  console.log(`Server running on port https://localhost:${PORT}`)
});
