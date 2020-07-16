require('../conexion');
const Persona = require('../modelo/Personas');

async function encontrarUnaPersona() {
    let persona = await Persona.find({ "nick": "lol" });
    console.log(persona);
}

encontrarUnaPersona();