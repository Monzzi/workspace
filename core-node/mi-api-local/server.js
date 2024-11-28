const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if (req.url === '/') {
        res.end('Bienvenido a mi servidor!' + '\nRutas disponibles:\n/saludar\n/hora\n/fecha');

    } else if (req.url === '/saludar') {
        res.end('Hola, visitante!');
    } else if (req.url === '/hora') {
        const date = new Date().toLocaleTimeString();
        res.end('La hora actual es: ' + date);
    } else if (req.url === '/fecha') {
        const date = new Date().toLocaleDateString();
        res.end('La fecha actual es: ' + date);
    } else {
        res.statusCode = 404;
        res.end('Página no encontrada');
    }

});
server.listen(3000, () => {
    console.log('Server running on port 3000: http://localhost:3000');
});


