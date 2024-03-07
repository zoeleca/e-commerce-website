// dbQueries.js

const executeQuery = require("./modules/dbConfig.js");
const detailProducts =
  "SELECT product_name, price, product_description FROM products ORDER BY price ASC ";
const products = "SELECT * FROM products";

//query de la page d'accueil

async function getProduct() {
  try {
    const products = await executeQuery(detailProducts);
    console.log(products);
    return products;
  } catch (err) {
    console.log("executeQuery failed");
    throw err;
  }
}

//query de l'espace backoffice

async function boQuery() {
  try {
    const allProducts = await executeQuery(products);
    console.log(allProducts);
    return allProducts;
  } catch (err) {
    console.log("executeQuery failed");
    throw err;
  }
}

//export des fonctions queries

module.exports = {
  getProduct,
  boQuery
};
