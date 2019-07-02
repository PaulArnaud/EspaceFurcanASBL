const mongoose = require("mongoose");

mongoose.connection.dropCollection("services");

mongoose.connection.collection("services").insertMany([
    { id: "1", name: "Aide et Conseil", description:"..."},
    { id: "2", name: "Formations et Stages", description:"..."},
    { id: "3", name: "Soutien scolaire", description:"..."},
    { id: "4", name: "Aide au logement et à l'emploi", description:"..."},
    { id: "5", name: "Activités socioculturelles", description:"..."},
    { id: "6", name: "Activités de loisirs", description:"..."},
    { id: "7", name: "Vente et Achat", description:"..."},
    { id: "8", name: "Location et cyber", description:"..."},
    { id: "9", name: "Réparation", description:"..."},
    { id: "10", name: "Maintenance", description:"..."}
]);

mongoose.connection.dropCollection("users");

mongoose.connection.collection("users").insertMany([
    { userId: "1", name: "Paul", description:"..."},
    { userId: "2", name: "Mohamed", description:"..."},
    { userId: "3", name: "Nicolas", description:"..."}
]);

console.log("DataBase writed");