const mongoose = require("mongoose");

var Service = mongoose.connection.model('Service');
var SocialCategory = mongoose.connection.model('SocialCategory');

var prices = {
    "CPAS": "0",
    "Chômage": "0",
    "Moins de 1250€": "0",
    "Moins de 1750€": "0",
    "Etudiant": "0",
    "Travailleur d'une ASBL": "0",
    "Moins de 2250€": "0",
    "Famille nombreuse": "0",
    "Moins de 2750€": "0",
    "Plus de 2750€": "0"
}

Service.insertMany([
    { service_id: "1", name: "Aide et Conseil", description: "L’asbl aide les personnes désireuses d’être aidées dans le domaine du numérique, dans la vie en général ou dans le but d’entamer ou de réussir un projet par tous les moyens possibles en mettant l’accent sur la recherche de stratégies efficaces via Internet. \n \r Les aides sont organisées par ½ heure, les tarif varient selon les difficultés sociales de la personne intéressée. \n \r Un abonnement mensuel est possible aux mêmes conditions tarifaires que précédemment, qui donne droit à une aide d’une ½ heure par mois et avec en plus une aide offerte gratuite d’une ½ heure par mois, ce qui fait un total de 24 aides d’une ½ heure par an. \n \r L’abonnement est payable par mois ou en deux fois (par 6 mois), dans ce cas 1 mois est offert ou bien encore en une seule fois pour toute l’année, dans ce cas 2 mois sont offerts. L’asbl fourni des conseils totalement gratuits. Nous faisons également appel en cas de besoin à des organismes tiers professionnels ou qualifiés pour conseiller les personnes désireuses d’avoir des conseils clairs, avisée et judicieux, dans ce cas également, le service est entièrement gratuit.", price: prices },
    { service_id: "2", name: "Formations et Stages", description: "...", price: prices },
    { service_id: "3", name: "Soutien scolaire", description: "...", price: prices },
    { service_id: "4", name: "Aide au logement et à l'emploi", description: "...", price: prices },
    { service_id: "5", name: "Activités socioculturelles", description: "...", price: prices },
    { service_id: "6", name: "Activités de loisirs", description: "...", price: prices },
    { service_id: "7", name: "Vente et Achat", description: "...", price: prices },
    { service_id: "8", name: "Location et cyber", description: "...", price: prices },
    { service_id: "9", name: "Réparation", description: "...", price: prices },
    { service_id: "10", name: "Maintenance", description: "...", price: prices }
], (err, result) => {
    console.log("Services writed");
});

SocialCategory.insertMany([
    { socialcategory_id: "1", name: "CPAS", description: "...." },
    { socialcategory_id: "2", name: "Chômage", description: "...." },
    { socialcategory_id: "3", name: "Moins de 1250€", description: "...." },
    { socialcategory_id: "4", name: "Moins de 1750€", description: "...." },
    { socialcategory_id: "5", name: "Etudiant", description: "...." },
    { socialcategory_id: "6", name: "Travailleur d'une ASBL", description: "...." },
    { socialcategory_id: "7", name: "Moins de 2250€", description: "...." },
    { socialcategory_id: "8", name: "Famille nombreuse", description: "...." },
    { socialcategory_id: "9", name: "Moins de 2750€", description: "...." },
    { socialcategory_id: "10", name: "Plus de 2750€", description: "...." }
], (err, result) => {
    console.log("Social Category writed");
});

