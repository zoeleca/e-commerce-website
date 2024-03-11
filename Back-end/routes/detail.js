// detail.js

// on charge le module Express
const express = require("express");

// on crée un router (mini app)
const router = express.Router();

const { getDetail } = require("../dbqueries/getDetail.js");

// on définit les routes pour /detail 
router.get("/:Id", async (req, res) => {
  // en fonction du paramètre dynamique "ProductId" envoyé par l'URL dans /detail/productId
  let productId = req.params.Id;
  console.log('productId :', productId);
  try {
    const detailProduct = await getDetail(productId);
    res.json(detailProduct);
    console.log("détail :", detailProduct);
  } catch (error) {
    console.error("Error executing SQL query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Exporte le routeur pour utilisation dans app.js
module.exports = router;
