require('./conexion');
const Persona = require('./modelo/Personas');
const Producto = require('./modelo/Productos');

let persona1 = new Persona({
    nombre: 'David',
    nick: "Davison",
    edad: 30,
    hobbis: ['comer', 'leer'],
    info: {
        mail: 'test@test.com',
        casado: false,
        pass: '123456',
        fecha: Date.now()
    }
});

let producto1 = new Producto({
    "nombre": "tv",
    "descripción": "tv top full hd",
    "tags": ["cine", "video"],
    "fecha": Date.now()
});

async function guardar(documento) {
    try {
        let datoGuardado = await documento.save();
        console.log(datoGuardado);
    } catch (error) {
        console.log(error);
    }
}

guardar(persona1);
guardar(producto1);

//----------------Others differents ways to save data----------------

/* async function guardar(documento) {
    let datoGuardado = await documento.save();
    return datoGuardado;
}

guardar(persona1)
    .then(function (datoGuardado) {
        console.log(datoGuardado);
    })
    .catch(function (err) {
        console.log(err);
    });

guardar(producto1)
    .then((datoGuardado) => {
        console.log(datoGuardado);
    })
    .catch((err) => {
        console.log(err);
    }); */

//--------------------------------
