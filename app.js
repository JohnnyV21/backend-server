// Requires
var express = require('express');
var mongoose = require('mongoose');



// Inicializar variables
var app = express();


// Conexion a la base de datos

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', ' online');
});

// Rutas
// request, response

app.get('/', (req, res, next) => {
    // status 200 es Ok son status de error de HTML
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});


// Escuchar ppeticiones
app.listen(3000, () => {
    console.log('Express server puertoo 3000: \x1b[32m%s\x1b[0m', ' online');
})