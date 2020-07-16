require('dotenv').config();

const mongoose = require('mongoose');

const uri = process.env.MONGO_CONNECTION;

(async function () {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    } catch (error) {
        console.log(error, "No se ha podido establecer conexión con la DB");
    }
})();



/* let connectionMessage = function connectionMessage() {
    console.log("Conexión a la DB establecida!! ");
}
mongoose.connection.once('open', connectionMessage());

let disconnectionMessage = function disconnectionMessage() {
    console.log("Se ha perdido la conexión a la DB");
}
mongoose.connection.on('disconnected', disconnectionMessage); */

//Lo comentado es quivalente a lo de abajo, aunque quizá se vean más claros los
//callbacks con la sintaxis de abajo.

mongoose.connection.once('open', function () {
    console.log("Conexión a la DB establecida!! ");
});

mongoose.connection.on('disconnected', function () {
    console.log("Se ha perdido la conexión a la DB");
});


console.log("Mensaje de test");
//mongoose.connection.close();
