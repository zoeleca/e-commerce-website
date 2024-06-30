const products = new Map();

function saveProduct(data) {
  if (data.product_materials === undefined) {
    throw new Error();
  }
  const id = products.size + 1;
  const productToAdd = {
    id: "1",
    price: data.price,
    product_category: data.product_category,
    product_color: data.product_color,
    product_description: data.product_description,
    product_materials: data.product_materials,
    product_name: data.product_name,
    product_owner: 3,
    product_photo: 4,
    product_state: 2,
    sub_category: data.sub_category,
  };
  products.set(id, productToAdd);
  return [productToAdd];
}

module.exports = {
  saveProduct,
};
