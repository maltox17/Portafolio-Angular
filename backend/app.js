'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos rutas
var project_routes = require('./routes/project');


// middlewares // una capa que se ejecuta antes de ejecutar el resultado de la peticion

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cors
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //*en el asterisco iria nuestra url cuando subamos nuestro proyecto serio
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Rutas

app.use('/api', project_routes);

/*
app.post('/test', (req, res) => {
    console.log(req.body.nombre);
    console.log(req.query.web);


    res.status(200).send({
        message: "hola mundo desde mi api node js"

    });
});
*/

/*app.get('/test', (req, res) => {
    res.status(200).send({
        message: "hola mundo desde mi api node js"

    });
});*/


// Exportar Modulo
module.exports = app;