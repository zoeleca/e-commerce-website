// detail-query.js

//importation function executeQuery
const executeQuery = require("../modules/dbConfig");

//Création requete SQL
const userQuery = "SELECT * FROM products WHERE id = '4' "; // productID à définir

//Utilisation de la function executeQuery
async function getDetail() {
  try {
    const detail = await executeQuery(userQuery);
    console.log("Détail produit:", detail);
    return detail;
  } catch (error) {
    console.error("Error fetching user accounts:", error.stack);
  }
}
getDetail();
