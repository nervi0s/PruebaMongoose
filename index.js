require('./conexion');
const Persona = require('./modelo/Personas');
const Producto = require('./modelo/Productos');

const Persona1 = new Persona({
    nombre: 'Juan',
    nick: "lol",
    edad: 33,
    hobbis: ['comer', 'leer'],
    info: {
        mail: 'test@test.com',
        casado: false,
        pass: 'yeepaaaa',
        fecha: Date.now()
    }
});

console.log(Persona1);

Persona1.save()
    .then((DocuPersonaGuardada) => {
        console.log(DocuPersonaGuardada)
    })
    .catch((err) => {
        console.log(err)
    });

//----------------Others differents ways to save data----------------

/* Persona1.save(function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/* Persona1.save((error,docu) => {
    if(error){
        console.log(error);
    }
    console.log(docu);
});
 */

//--------------------------------

const Producto1 = new Producto({
    "nombre": "Patata",
    "descripción": "La patata",
    "tags": ["comida", "fresco"],
    "fecha": Date.now()
});

console.log(Producto1);

(async function () {
    try {
        let documentoGuardado = await Producto1.save();
        console.log(documentoGuardado);
    } catch (err) {
        console.log(err);
    }
})();