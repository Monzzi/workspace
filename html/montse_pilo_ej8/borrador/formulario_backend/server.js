const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware para procesar datos de formularios
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static('public'));

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para procesar datos de formularios
app.use(express.urlencoded({ extended: true }));

// Ruta POST para check.html - DEBE IR PRIMERO
app.post('/check.html', (req, res) => {
    const { user_mail, password } = req.body;
    const passwordMask = '*'.repeat(password.length);
    res.send(`
        <h1>Datos del Login</h1>
        <p>Email: ${user_mail}</p>
        <p>Password: ${passwordMask}</p>
    `);
});

// Servir archivos estáticos - DEBE IR DESPUÉS
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
});