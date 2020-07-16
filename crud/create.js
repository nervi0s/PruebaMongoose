require('../conexion');
const Persona = require('../modelo/Personas');

const crearPersonas = async function () {
    const personanueva1 = new Persona({
        nombre: "Juan",
        nick: "redpirate",
        edad: 24,
        hobbis: ['pc', 'jugar'],
        info: {
            mail: 'juan@test.com',
            casado: false,
            pass: 'passsegura',
            fecha: Date.now()
        }
    });
    try {
        await personanueva1.save();
        console.log(personanueva1)
    } catch (err) {
        console.log(err);
    }
}

crearPersonas();