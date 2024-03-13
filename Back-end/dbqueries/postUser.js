// boQuery.js

// Importe la fonction exécutant les requêtes SQL
const executeQuery = require("../modules/newProduct.js");

// Requêtes SQL :
const newUser = `INSERT INTO public.\"User\" (name, mail, mot_de_passe) VALUES ('${User_name}','${User_mail}','${User_mdp}')`

// Fonction pour insérer des données dans la base de données
async function postUser(userData) {
  try {
    // Exemple de requête d'insertion (remplace avec ta propre logique)
    await executeQuery(newUser, [userData.name, userData.mail, userData.mdp]);

    console.log('Données insérées avec succès dans la table "User".');
  } catch (err) {
    console.log("executeQuery failed inside boQuery for postUser");
    throw err;
  }
}

// ... Autres fonctions et requêtes ...

module.exports = {
  getUser,
  postUser
};






