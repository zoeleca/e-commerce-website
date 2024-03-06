// dbQueries.js


const db = require("./modules/dbConfig.js");

async function getProduct() {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT product_name, price, product_description" +
        "FROM products" +
        "ORDER BY price ASC",
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results.rows);
      }
    );
  });
}

async function newProduct(product_name, price, product_description) {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO products (product_name, price, product_description) VALUES ($1, $2, $3)";
    const values = [product_name, price, product_description];

    db
      .query(sql, values)
      .then(results => {
        resolve(results.rows);
      })
      .catch(error => {
        reject(error);
      });
  });
}

module.exports = {
  getProduct,
  newProduct
};
