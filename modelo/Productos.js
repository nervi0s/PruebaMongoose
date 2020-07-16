const Mongo = require('mongoose');
const Schema = Mongo.Schema;

const ProductoSchema = new Schema({
    "nombre": String,
    "precio": {
        "type": Number,
        "default": 0
    },
    "descripción": String,
    "tags": [String],
    "fecha": Date
});

const ModelProducto = Mongo.model("productos", ProductoSchema);
module.exports = ModelProducto;