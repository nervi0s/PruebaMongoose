//To find data from DB
require('../conexion');
const Persona = require('../modelo/Personas');
const Producto = require('../modelo/Productos');

/* Persona.find(function (err, documentos) {
    if (err) {
        console.log(err);
    } else {
        let docuStringifeado = JSON.stringify(documentos)
        console.log(docuStringifeado);
    }
}); */

/* Persona.find((err, documentos) => {
    if (err) {
        console.log(err);
    } else {
        console.log(documentos);
    }
}); */

async function econtrarPersonas() {
    let arrayPersonas = await Persona.find();
    return arrayPersonas;
}

econtrarPersonas()
    .then((arrayDePersonas) => {
        console.log(arrayDePersonas);
    })
    .catch((err) => {
        console.log(err);
    });

async function encontrarProductos() {
    try {
        let productos = await Producto.find()
        return productos;
    } catch (err) {
        console.log(err);
    }
}

(async () => {
    let arrayConProductos = await encontrarProductos();
    console.log(arrayConProductos)
})();