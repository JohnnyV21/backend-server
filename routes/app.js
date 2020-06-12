// Rutas
// request, response

var express = require('express');

var app = express();

app.get('/', (req, res, next) => {
    // status 200 es Ok son status de error de HTML
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});


module.exports = app;