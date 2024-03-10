// getProduct.js

// Importe la fonction executant les requêtes SQL
const executeQuery = require("../modules/dbConfig.js");

// Requêtes SQL :
// const detailProducts =
//   "SELECT product_name, price, product_description, id FROM products ORDER BY price ASC";
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

module.exports = {
  getProduct
};
