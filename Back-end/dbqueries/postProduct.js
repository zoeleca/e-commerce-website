//postProduct.js

// Importe la fonction executant les requêtes SQL
const executeQuery = require("../modules/dbConfig.js");

// Requêtes SQL d'insertion
const product = `INSERT INTO 
public.products (product_name, product_category, product_color, product_photo, product_materials, price, sub_category, product_description, product_state, product_owner) 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
RETURNING *`;

async function postProduct(data) {
  try {
    const values = [
      data.product_name,
      data.product_category,
      data.product_color,
      'test',
      data.product_materials,
      data.price,
      data.sub_category,
      data.product_description,
      data.product_state,
      'moi',
    ];
    console.log('values :', values);
    const postPublished = await executeQuery(product, values);
    console.log("annonce :", postPublished);
    return postPublished;
  } catch (err) {
    console.log("executeQuery failed inside postProduct");
    throw err;
  }
}

module.exports = {
  postProduct,
};
