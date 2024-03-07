// dbQueries.js

const db = require("./modules/dbConfig.js");

async function getAllProducts() {
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

async function newProduct(
  product_name,
  product_category,
  product_color,
  product_photo,
  product_materials,
  price,
  sub_category,
  product_description,
  product_state
) {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO public.products (product_name, product_category, product_color, product_photo, product_materials, price, sub_category, product_description, product_state) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
    const values = [
      product_name,
      product_category,
      product_color,
      product_photo,
      product_materials,
      price,
      sub_category,
      product_description,
      product_state,
    ];

    db.query(sql, values)
      .then((results) => {
        resolve(results.rows);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

async function getFilteredProducts(argument) {
  return new Promise((resolve, reject) => {
    const sql =
      "SELECT product_name, product_category, product_color, product_photo, product_materials, price, sub_category, product_description, product_state" +
      "FROM products";
    ("WHERE  ");
    const values = [
      product_name,
      product_category,
      product_color,
      product_photo,
      product_materials,
      price,
      sub_category,
      product_description,
      product_state,
    ];

    db.query(sql, values)
      .then((results) => {
        resolve(results.rows);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = {
  getAllProducts,
  newProduct,
  getFilteredProducts,
};
