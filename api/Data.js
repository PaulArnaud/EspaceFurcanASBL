const mongoose = require("mongoose");

var Service = mongoose.connection.model('Service');

Service.deleteMany({});

Service.insertMany([
    { service_id: "1", name: "Aide et Conseil", description: "..." },
    { service_id: "2", name: "Formations et Stages", description: "..." },
    { service_id: "3", name: "Soutien scolaire", description: "..." },
    { service_id: "4", name: "Aide au logement et à l'emploi", description: "..." },
    { service_id: "5", name: "Activités socioculturelles", description: "..." },
    { service_id: "6", name: "Activités de loisirs", description: "..." },
    { service_id: "7", name: "Vente et Achat", description: "..." },
    { service_id: "8", name: "Location et cyber", description: "..." },
    { service_id: "9", name: "Réparation", description: "..." },
    { service_id: "10", name: "Maintenance", description: "..." }
]);