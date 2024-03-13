// boQuery.js

// Importe la fonction exécutant les requêtes SQL
const executeQuery = require("../modules/dbConfig.js");

// Requêtes SQL :
const newUser = `INSERT INTO public.\"user_account\" (user_email, user_password, user_name, user_addres) VALUES ('${User_mail}','${User_password}','${User_name}', '${User_address}')`

// Fonction pour insérer des données dans la base de données
async function postUser(UserRegistre) {
  try {
    // Exemple de requête d'insertion (remplace avec ta propre logique)
    await executeQuery(newUser);

    console.log('Données insérées avec succès dans la table "User".');
  } catch (err) {
    console.log("executeQuery failed inside boQuery for postUser");
    throw err;
  }
}

// ... Autres fonctions et requêtes ...

module.exports = {
  UserRegistre,
  postUser
};






