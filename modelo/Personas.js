const Mongo = require('mongoose');
const Schema = Mongo.Schema;

const PersonillaSchema = new Schema({
    nombre: String,
    nick: {
        type: String,
        unique: true,
        required: true,
    },
    edad: Number,
    hobbis: [String],
    info: {
        mail: String,
        casado: Boolean,
        pass: String,
        fecha: Date
    }
});

module.exports = Mongo.model('personas', PersonillaSchema);
