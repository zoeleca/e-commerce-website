// dbQueries.js

const executeQuery = require("./modules/dbConfig.js");
const products =
  "SELECT product_name, price, product_description FROM products ORDER BY price ASC";

async function getProduct() {
  try {
    const allProducts = await executeQuery(products);
    console.log(allProducts);
    return allProducts
  } catch (err) {
    console.log("executeQuery failed");
    throw err;
  }
}

async function getProduct() {
  try {
    const allProducts = await executeQuery(products);
    console.log(allProducts);
  } catch (err) {
    console.log("executeQuery failed");
    throw err;
  }
}

getProduct();

module.exports = {
  getProduct,
  newProduct,
  searchProduct
};
