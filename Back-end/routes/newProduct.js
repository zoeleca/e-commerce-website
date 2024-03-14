//newProduct.js

const express = require("express");
const router = express.Router();
const { postProduct } = require("../dbqueries/postProduct");

router.post("/", async (req, res) => {
  try {
    console.log("req.body:", req.body);
    const annonce = await postProduct(req.body);
    res.json(annonce);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de l'ajout de l'annonce" });
  }
});

module.exports = router;
