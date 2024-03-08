// dbQueries.js

// Importe la fonction executant les requêtes SQL
const executeQuery = require("./modules/dbConfig.js");

// Requêtes SQL :
const detailProducts =
  "SELECT product_name, price, product_description, id FROM products ORDER BY price ASC";
const allProducts = "SELECT * FROM products";

async function getProduct() {
  try {
    const allProductsInfo = await executeQuery(allProducts);
    // console.log("Products inside the query :", allProductsInfo);
    return allProductsInfo;
  } catch (err) {
    console.log("executeQuery failed inside getProduct");
    throw err;
  }
}

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
  getProduct,
  boQuery,
};
