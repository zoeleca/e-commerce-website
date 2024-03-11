// getProduct.js

// Importe la fonction executant les requêtes SQL
const executeQuery = require("../modules/dbConfig.js");

// Requêtes SQL :
// const detailProducts =
//   "SELECT product_name, price, product_description, id FROM products ORDER BY price ASC";
const allProducts = `SELECT
p.id,
p.product_name,
pc.category_name,
sc.sub_category_name,
c.color_name,
pp.photo_src,
pm.material_name,
p.price,
p.product_description,
ps.state_name
FROM
public.products p
INNER JOIN
public.product_categories pc ON p.product_category = pc.id
INNER JOIN
public.sub_categories sc ON p.sub_category = sc.id
INNER JOIN
public.product_color c ON p.product_color = c.id
INNER JOIN
public.product_materials pm ON p.product_materials = pm.id
INNER JOIN
public.product_state ps ON p.product_state = ps.id
INNER JOIN
public.product_photos pp ON p.product_photo = pp.id;`;

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
