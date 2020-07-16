require('../conexion');
const Persona = require('../modelo/Personas');

async function eliminarPersona() {
    let persona = await Persona.findOneAndDelete({ "edad": 20, "nombre": "Juan" });
    console.log(persona);
}
eliminarPersona();