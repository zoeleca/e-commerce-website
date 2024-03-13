// getUser.js

// Importe la fonction executant les requêtes SQL
const executeQuery = require("../modules/dbConfig.js");

// Requêtes SQL :
const allUser = "SELECT * FROM User"


// Query temporaire de la table "products" pour simuler un fetch depuis la page backoffice.
// A terme, il faudra query la table "stock".
async function getUser() {
  try {
    const User = await executeQuery(allUser);
    console.log("stock :", User);
    return User;
  } catch (err) {
    console.log("executeQuery failed inside boQuery");
    throw err;
  }
}

module.exports = {
  getUser
};
