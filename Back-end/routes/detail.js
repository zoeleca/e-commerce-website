// detail.js

const express = require("express");
const router = express.Router();

// définition des routes pour /detail
router.get("/detail", async (req, res) => {
  try {
    const detailProduct = await getDetail();
    res.json(detailProduct);
    console.log("détail :", detailProduct);
  } catch (error) {
    console.error("Error executing SQL query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Exporte le routeur pour utilisation dans app.js
module.exports = router;
