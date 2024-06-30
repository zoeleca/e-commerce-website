//home.js

const express = require("express");
const router = express.Router();
const { getProduct } = require("../dbqueries/getProduct.js");
router.get("/", async (req, res) => {
  // QUOI : Query pour tous les produits disponible à la vente.
  // QUAND : Dès l'affichage de la page d’accueil.
  try {
    const allProducts = await getProduct();
    console.log("allProducts response from the endpoint :", allProducts);
    res.status(200).json(allProducts);
  } catch (error) {
    console.error("Error executing the SQL query for all products", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
