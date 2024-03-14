//postProduct.js

// Importe la fonction executant les requêtes SQL
const executePostQuery = require("../modules/dbConfigPost.js");

// Requêtes SQL d'insertion
const insertQuery = `INSERT INTO public.products (
  product_name, 
  product_category, 
  product_color, 
  product_photo, 
  product_materials, 
  price, 
  sub_category, 
  product_description, 
  product_state, 
  product_owner
  ) VALUES (
    $1, 
    (SELECT id FROM product_categories WHERE category_name = $2), 
    (SELECT id FROM product_color WHERE color_name = $3),
    $4, 
    (SELECT id FROM product_materials WHERE material_name = $5),
    $6, 
    (SELECT id FROM sub_categories WHERE sub_category_name = $7),
    $8, 
    $9, 
    $10) 
RETURNING *`;

async function postProduct(data) {
  try {
    const values = [
      data.product_name,
      data.product_category,
      data.product_color,
      4,
      data.product_materials,
      data.price,
      data.sub_category,
      data.product_description,
      2,
      1,
    ];
    console.log('values :', values);
    const result = await executePostQuery(insertQuery, values);
    console.log("annonce :", result);
    return result;
  } catch (err) {
    console.log("executeQuery failed inside postProduct");
    throw err;
  }
}

module.exports = {
  postProduct,
};
