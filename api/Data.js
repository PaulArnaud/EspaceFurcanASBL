const mongoose = require("mongoose");

const Service = mongoose.connection.model('Service');
const SocialCategory = mongoose.connection.model('SocialCategory');
const Reservation = mongoose.connection.model('Reservation');
const User = mongoose.connection.model('User');

const prices = {
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
    {
        service_id: "1",
        name: "Aide et Conseil",
        description: "L’asbl aide les personnes désireuses d’être aidées dans le domaine du numérique, dans la vie en général ou dans le but d’entamer ou de réussir un projet par tous les moyens possibles en mettant l’accent sur la recherche de stratégies efficaces via Internet. \n \r Les aides sont organisées par ½ heure, les tarif constient selon les difficultés sociales de la personne intéressée. \n \r Un abonnement mensuel est possible aux mêmes conditions tarifaires que précédemment, qui donne droit à une aide d’une ½ heure par mois et avec en plus une aide offerte gratuite d’une ½ heure par mois, ce qui fait un total de 24 aides d’une ½ heure par an. \n \r L’abonnement est payable par mois ou en deux fois (par 6 mois), dans ce cas 1 mois est offert ou bien encore en une seule fois pour toute l’année, dans ce cas 2 mois sont offerts. L’asbl fourni des conseils totalement gratuits. Nous faisons également appel en cas de besoin à des organismes tiers professionnels ou qualifiés pour conseiller les personnes désireuses d’avoir des conseils clairs, avisée et judicieux, dans ce cas également, le service est entièrement gratuit.",
        price: {
            "CPAS": "3.00",
            "Chômage": "4.00",
            "Moins de 1250€": "4.00",
            "Moins de 1750€": "5.00",
            "Etudiant": "5.00",
            "Travailleur d'une ASBL": "5.00",
            "Moins de 2250€": "6.00",
            "Famille nombreuse": "6.00",
            "Moins de 2750€": "7.00",
            "Plus de 2750€": "8.00"
        }
    },
    {
        service_id: "2",
        name: "Formations et Stages",
        description: "Il est possible dans l’asbl d’accueillir des stagiaires, pour qu’ils puissent accomplir un stage technique ou un stage de vente / gestion ou encore un stage administratif ou bien encore un stage de moniteur pour les activités socioculturelles et de loisirs. La durée du stage est conditionnée par le moniteur de stage ou par le responsable de stage du stagiaire. L’asbl peut également accueillir des stagiaires en filière libre (sans responsable de stage) pour une durée variable à convenir avant le début du stage. Dans tous les cas, l’asbl fourni à la fin du stage, un certificat de stage et une appréciation de stage.",
        price: prices
    },
    {
        service_id: "3",
        name: "Soutien scolaire",
        description: "L’asbl aidera et soutiendra les familles désireuses de vouloir augmenter les chances de réussite de leurs enfants par tous les moyens possibles, en mettant l’accent sur un soutien scolaire de qualité et en organisant un espace de devoirs, d’apprentissages, de découvertes et de loisirs.",
        price: {
            "CPAS": "0.50",
            "Chômage": "0.50",
            "Moins de 1250€": "0.50",
            "Moins de 1750€": "1.00",
            "Etudiant": "1.00",
            "Travailleur d'une ASBL": "1.00",
            "Moins de 2250€": "1.00",
            "Famille nombreuse": "1.00",
            "Moins de 2750€": "1.50",
            "Plus de 2750€": "1.50"
        }
    },
    {
        service_id: "4",
        name: "Aide au logement et à l'emploi",
        description: "L’asbl aide les personnes désireuses de trouver un logement sur Bruxelles par tous les moyens possibles en mettant l’accent sur la recherche de logements via Internet. L’asbl fourni ce service avec 4 propositions de logement moyennant une contribution de la personne selon les difficultés sociales de la personne intéressée L’asbl aide les personnes désireuses à trouver un emploi sur Bruxelles par tous les moyens possibles en mettant l’accent sur l’aide à la rédaction d’une bonne lettre de motivation et d’un bon CV, qui seront envoyés par courrier postal aux sociétés qui intéressent la personne,  et également en mettant l’accent sur la recherche d’emplois via Internet. L’asbl fourni ce service avec 4 sollicitations d’emploi par mois moyennant une contribution de la personne selon les difficultés sociales de la personne intéressée",
        price: {
            "CPAS": "3.00",
            "Chômage": "4.00",
            "Moins de 1250€": "4.00",
            "Moins de 1750€": "5.00",
            "Etudiant": "5.00",
            "Travailleur d'une ASBL": "5.00",
            "Moins de 2250€": "6.00",
            "Famille nombreuse": "6.00",
            "Moins de 2750€": "7.00",
            "Plus de 2750€": "8.00"
        }
    },
    {
        service_id: "5",
        name: "Activités socioculturelles",
        description: "L’asbl aide, soutien et initie par tous les moyens possibles, divers activités socioculturelles comme par exemple : Des animations diverses, des création d’œuvres et les exposer, production de court métrage (divers sujets possibles), participation à des ateliers d’écriture, de peinture, de céramique, de créations diverses et exposer les réalisations.",
        price: {
            "CPAS": "3.00",
            "Chômage": "4.00",
            "Moins de 1250€": "4.00",
            "Moins de 1750€": "5.00",
            "Etudiant": "5.00",
            "Travailleur d'une ASBL": "5.00",
            "Moins de 2250€": "6.00",
            "Famille nombreuse": "6.00",
            "Moins de 2750€": "7.00",
            "Plus de 2750€": "8.00"
        }
    },
    {
        service_id: "6",
        name: "Activités de loisirs",
        description: " Jouer aux échecs, aux dames, à des jeux de stratégie, à des jeux en ligne, à des jeux sur consoles, à des jeux de société (Monopoly, Scrabble, backgammon, etc.) / Résoudre un problème, un casse-tête, des mots croisés, mots cachés, etc. / Réparer ou démonter et remonter les appareils ménagers, électroniques, les jouets / Rendre des services à des étudiants, à des personnes âgées, à l'hôpital ou ailleurs / Participer à des campagnes humanitaires : Croix-Rouge, Téléthon, MSF, WWF, et autres / Visiter les gens qui sont malades, pauvres ou en difficultés / Organiser une tombola, une fête d'école ou de quartier / Donner des cadeaux à des enfants qui sont malades / Aider des personnes âgées à faire leurs courses / Histoires humoristiques ou histoires drôles, vraies / Aller dans des médiathèques et des bibliothèques / Aller dans les musées ou à des expositions / Faire du jogging, du yoga et des promenades / Parler de philosophie et de spiritualité / Construire des maquettes diverses. Le tarif des activités de loisirs payantes sont ajustées à la situation financière de la personne intéressée.",
        price: prices
    },
    {
        service_id: "7",
        name: "Vente et Achat",
        description: "L’asbl fournie du matériel numérique d’occasion ou neuf (PC de bureau, PC portables, Tablets, Smartphones, Imprimantes et accessoires divers) via un commerce social avec des tarifs ajustées à la situation financière de chacun et des formules adéquates selon les besoins et le budget de chacun. L’asbl achète du matériel numérique d’occasion (PC de bureau, PC portables, Tablets, Smartphones, Imprimantes et accessoires divers) de particuliers ou de gros fournisseurs pour le revendre. L’asbl fait en effet le rachat de matériel numérique de seconde main, dans le but de le revendre une fois reconditionné à des tarifs ajustés à la situation financière de chaque client, selon les besoins et le budget de chacun. L’asbl offre de ce fait une deuxième vie aux appareils et ceci est tout aussi bénéfique pour l’environnement. De plus le matériel numérique usagé mais encore fonctionnel peut être réutilisé dans la communauté.",
        price: prices
    },
    {
        service_id: "8",
        name: "Location et cyber",
        description: "Il est possible dans l’asbl de louer du matériels numériques durant une journée, une semaine, un mois, trois mois, six mois et un an. Le tarif varie en fonction de la valeur du matériel numérique loué, de la durée de la location et selon les difficultés sociales de la personne intéressée. Un abonnement hebdomadaire, mensuelle, trimestriel, semestriel et annuel est possible avec à chaque fois une réduction si la formule choisie est d’une plus longue période. Dans tous les cas une garantie sera exigée. Le montant de la garantie varie en fonction de la valeur du matériel numérique loué, elle est fixée à la moitié du prix maximal de vente du matériel numérique loué. L'asbl met également à votre disposition une salle dédiée aux Formations, Réunions, Séminaires, Evénements, Cérémonies, Baptêmes, Fiançailles. Le tarif est de 20 euros de l'heure pour l'aide et pour les frais de fonctionnements, de charges de la salle. Il est également possible dans l’asbl d’aller sur Internet via un coin cyber et d'imprimer en couleur ou en noir et blanc.",
        price: {
            "CPAS": "0.50",
            "Chômage": "0.50",
            "Moins de 1250€": "0.50",
            "Moins de 1750€": "1.00",
            "Etudiant": "1.00",
            "Travailleur d'une ASBL": "1.00",
            "Moins de 2250€": "1.00",
            "Famille nombreuse": "1.00",
            "Moins de 2750€": "1.50",
            "Plus de 2750€": "1.50"
        }
    },
    {
        service_id: "9",
        name: "Réparation",
        description: " Dépannage matériels / Sauvegarde des données / Réinitialisation complète de matériels / Mise en place de logiciels Anti-Virus / Mise à niveau des anciennes machines / Installation et maintenance réseaux / Installation et configuration de pare-feu / Nettoyage et optimisation systèmes et matériels / Création de sites internet & d'E-commerces / Dépannage à distance via TeamViewer",
        price: {
            "CPAS": "6.00",
            "Chômage": "7.00",
            "Moins de 1250€": "7.00",
            "Moins de 1750€": "8.00",
            "Etudiant": "8.00",
            "Travailleur d'une ASBL": "8.00",
            "Moins de 2250€": "9.00",
            "Famille nombreuse": "9.00",
            "Moins de 2750€": "10.0",
            "Plus de 2750€": "12.0"
        }
    },
    {
        service_id: "10",
        name: "Maintenance",
        description: "La maintenance vous permet de garder votre matériel numérique (PC de bureau, PC portable, Smartphone et Tablet) ou parc informatique dans un état assez optimale et sécurisé.",
        price: prices
    }
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

User.insertMany([
], (err, result) => {
    console.log("User writed");
});

Reservation.insertMany([
], (err, result) => {
    console.log("Reservation writed");
});
