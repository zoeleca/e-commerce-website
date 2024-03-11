// getDetail.js

//importation function executeQuery
const executeQuery = require("../modules/dbConfig.js");

//Utilisation de la function executeQuery
async function getDetail(productId) {
  //Création requete SQL
  const userQuery = `SELECT * FROM products WHERE id = ?`; // on utilise un placeholder
  try {
    const detail = await executeQuery(userQuery, [productId]);
    console.log("Détail produit:", detail);
    return detail;
  } catch (error) {
    console.error("Error fetching user accounts:", error.stack);
    throw error;
  }
}

module.exports = { getDetail };
