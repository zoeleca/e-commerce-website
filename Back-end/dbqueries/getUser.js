// getUser.js

// Importe la fonction executant les requêtes SQL
const executeQuery = require("../modules/dbConfig.js");

// Requêtes SQL :
const allUser = "SELECT * FROM user_accounts;";

// Query temporaire de la table "products" pour simuler un fetch depuis la page backoffice.
// A terme, il faudra query la table "stock".
async function getUser() {
  try {
    const user = await executeQuery(allUser);
    console.log("user :", user);
    return user;
  } catch (err) {
    console.log("executeQuery failed inside boQuery");
    throw err;
  }
}
getUser();

module.exports = {
  getUser,
};
