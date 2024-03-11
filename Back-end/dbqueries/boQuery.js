// boQuery.js

// Importe la fonction executant les requêtes SQL
const executeQuery = require("../modules/dbConfig.js");

// Requêtes SQL :
const allProducts = "SELECT * FROM products";

// Query temporaire de la table "products" pour simuler un fetch depuis la page backoffice.
// A terme, il faudra query la table "stock".
async function boQuery() {
  try {
    const stock = await executeQuery(allProducts);
    console.log("stock :", stock);
    return stock;
  } catch (err) {
    console.log("executeQuery failed inside boQuery");
    throw err;
  }
}

module.exports = {
  boQuery
};
