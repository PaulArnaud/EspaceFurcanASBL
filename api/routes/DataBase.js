const mongoose = require("mongoose");

mongoose.connection.dropCollection("services");

mongoose.connection.collection("services").insertMany([
    { serviceId: "1", name: "Aide et Conseil", description:"..."},
    { serviceId: "2", name: "Formations et Stages", description:"..."},
    { serviceId: "3", name: "Soutien scolaire", description:"..."},
    { serviceId: "4", name: "Aide au logement et à l'emploi", description:"..."},
    { serviceId: "5", name: "Activités socioculturelles", description:"..."},
    { serviceId: "6", name: "Activités de loisirs", description:"..."},
    { serviceId: "7", name: "Vente et Achat", description:"..."},
    { serviceId: "8", name: "Location et cyber", description:"..."},
    { serviceId: "9", name: "Réparation", description:"..."},
    { serviceId: "10", name: "Maintenance", description:"..."}
]);

mongoose.connection.dropCollection("users");

console.log("DataBase writed");