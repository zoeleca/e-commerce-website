// boQuery.js

// Importe la fonction executant les requêtes SQL
const executeQuery = require("../modules/dbConfig.js");

// Requêtes SQL :
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
ps.state_name,
ua.user_name

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
public.product_photos pp ON p.product_photo = pp.id
INNER JOIN
public.user_accounts ua ON p.product_owner = ua.id
;`;

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
  boQuery
};
