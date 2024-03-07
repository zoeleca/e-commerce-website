// dbQueries.js

const executeQuery = require("./modules/dbConfig.js");
const detailProducts =
  "SELECT product_name, price, product_description FROM products ORDER BY price ASC";
const products =   "SELECT * FROM products";


async function getProduct() {
  try {
    const Products = await executeQuery(detailProducts);
    console.log(Products);
    return Products
  } catch (err) {
    console.log("executeQuery failed");
    throw err;
  }
}

async function boQuery() {
  try {
    const allProducts = await executeQuery(products);
    console.log(allProducts);
    return allProducts
  } catch (err) {
    console.log("executeQuery failed");
    throw err;
  }
}

getProduct();

module.exports = {
  getProduct,
  boQuery,
};
