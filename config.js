const mongoose = require('mongoose');

const dbconnect = async () => {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect("mongodb://db-service.db-carlos.svc.cluster.local:27017/examen", {});
        console.log("Conexion correcta");
    } catch (err) {
        console.error("Hay un error en la conexión:", err);
    }
}

module.exports = dbconnect;
