//backoffice.js

const express = require("express");
const router = express.Router();
const { boQuery } = require("../dbqueries/boQuery.js");
// const authenticateToken = require('../middleware/authenticateToken');

// le router doit en premier lieu vérifier si l'utilisateur à le droit d'accès
// router.use(authenticateToken)

router.get("/backoffice", async (req, res) => {
  // QUOI : Query pour tous les produits disponible.
  // QUAND : Dès l'affichage de la page backoffice.
  try {
    const products = await boQuery();
    res.status(200).json(products);
  } catch (error) {
    console.error(
      "Error executing SQL query of boQuery inside backoffice route",
      error
    );
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;