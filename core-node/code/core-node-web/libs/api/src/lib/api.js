import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configurar __dirname equivalente para ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Datos de ejemplo
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
];

// Router simple
const router = {
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {}
};

// Definir rutas
router.GET['/api/users'] = (req, res) => {
    console.log('GET /api/users llamado');
    res.writeHead(200);
    res.end(JSON.stringify(users));
};

router.GET['/api/users'] = (req, res) => {
    console.log('GET /api/users llamado');

    // Responder con JSON formateado
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users, null, 2)); // Indentación de 2 espacios
};


router.POST['/api/users'] = (req, res) => {
    console.log('POST /api/users llamado');
    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
    });
    req.on('end', () => {
        try {
            const user = JSON.parse(Buffer.concat(body).toString());

            // Encontrar el menor `id` disponible
            const existingIds = users.map(u => u.id).filter(id => id !== undefined);
            let newId = 1; // Por defecto, el primer `id` será 1

            if (existingIds.length > 0) {
                // Crear una lista ordenada de `id`s actuales y buscar huecos
                existingIds.sort((a, b) => a - b);
                for (let i = 1; i <= existingIds[existingIds.length - 1]; i++) {
                    if (!existingIds.includes(i)) {
                        newId = i;
                        break;
                    }
                }

                // Si no hay huecos, usar el siguiente `id` disponible
                if (newId === 1) {
                    newId = existingIds[existingIds.length - 1] + 1;
                }
            }

            // Crear el nuevo usuario
            const newUser = { id: newId, ...user };

            // Agregar el usuario al arreglo
            users.push(newUser);

            res.writeHead(201);
            res.end(JSON.stringify(newUser));
        } catch (error) {
            console.error('Error al procesar la solicitud POST:', error);
            res.writeHead(400);
            res.end(JSON.stringify({ error: 'Solicitud inválida' }));
        }
    });
};

router.PUT['/api/users/:id'] = (req, res) => {
    console.log('PUT /api/users/:id llamado');
    const id = parseInt(req.url.split('/').pop()); // Extraer el id
    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
    });
    req.on('end', () => {
        try {
            const updatedData = JSON.parse(Buffer.concat(body).toString());
            const index = users.findIndex(u => u.id === id);

            if (index !== -1) {
                // Mantener el id y actualizar los demás campos
                users[index] = { ...users[index], ...updatedData };
                res.writeHead(200);
                res.end(JSON.stringify(users[index]));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ error: 'Usuario no encontrado' }));
            }
        } catch (error) {
            console.error('Error al procesar la solicitud PUT:', error);
            res.writeHead(400);
            res.end(JSON.stringify({ error: 'Solicitud inválida' }));
        }
    });
};


router.DELETE['/api/users/:id'] = (req, res) => {
    console.log('DELETE /api/users/:id llamado');
    const id = parseInt(req.url.split('/').pop()); // Extraer el id
    const index = users.findIndex(u => u.id === id);

    if (index !== -1) {
        const deletedUser = users.splice(index, 1)[0]; // Extraer el usuario eliminado
        res.writeHead(200);
        res.end(JSON.stringify({
            message: 'Usuario eliminado',
            user: deletedUser
        }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Usuario no encontrado' }));
    }
}

try {
    // Configurar servidor HTTPS
    const options = {
        key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem'))
    };

    // Crear servidor
    const server = https.createServer(options, (req, res) => {
        // Configurar headers
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        console.log(`${req.method} ${req.url}`);

        if (req.method === 'GET') {
            if (router.GET[req.url]) {
                router.GET[req.url](req, res);
                return;
            }

            if (req.url.match(/^\/api\/users\/\d+$/)) {
                router.GET['/api/users/:id'](req, res);
                return;
            }
        }

        if (req.method === 'POST') {
            if (router.POST[req.url]) {
                router.POST[req.url](req, res);
                return;
            }
        }

        if (req.method === 'PUT') {
            if (req.url.match(/^\/api\/users\/\d+$/)) {
                router.PUT['/api/users/:id'](req, res);
                return;
            }
        }

        if (req.method === 'DELETE') {
            if (req.url.match(/^\/api\/users\/\d+$/)) {
                router.DELETE['/api/users/:id'](req, res);
                return;
            }
        }

        // Ruta no encontrada
        res.writeHead(404);
        res.end(JSON.stringify({
            error: 'Ruta no encontrada',
            url: req.url,
            method: req.method
        }));
    });

    // Iniciar servidor
    server.listen(3000, () => {
        console.log('=================================');
        console.log('Servidor HTTPS iniciado en puerto 3000');
        console.log('URL base: https://localhost:3000');
        console.log('Rutas disponibles:');
        console.log('GET /api/users');
        console.log('GET /api/users/:id');
        console.log('=================================');
    });

} catch (error) {
    console.error('Error al iniciar el servidor:', error);
    console.error('Detalles del error:', error.message);

    if (error.code === 'ENOENT') {
        console.error('No se encontraron los archivos SSL. Asegúrate de que existan:');
        console.error('- ssl/key.pem');
        console.error('- ssl/cert.pem');
        console.error('\nPuedes generarlos con el comando:');
        console.error('openssl req -x509 -newkey rsa:4096 -keyout ssl/key.pem -out ssl/cert.pem -days 365 -nodes -subj "/CN=localhost"');
    }
}