//main.js

const express = require("express");
const router = express.Router();
const { getAllProducts } = require("./Back-end/dbQueries");

router.get("/", function (req, res, next) {
  console.log("Router Working");
});

router.get("/", async (req, res) => {
  // QUOI : Query pour tous les produits disponible à la vente.
  // QUAND : Dès l'affichage de la page d’accueil.
  try {
    const allProducts = await getAllProducts();
    console.log("allProducts :", allProducts);
    res.json(allProducts);
  } catch (error) {
    console.error("Error executing the SQL query for all products", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
