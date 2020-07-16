require('../conexion');
const Persona = require('../modelo/Personas');

async function updatearPersona() {
    let user = await Persona.update({ "nick": "popitas123" }, { "nombre": "David" });
    console.log(user);
}

updatearPersona();

async function updateManual() {
    let arrayPersonas = await Persona.find({ "edad": 99 });
    console.log(arrayPersonas);

    arrayPersonas.forEach(async (documento) => {
        documento.edad = 20;
        await documento.save();
    });
}

updateManual();