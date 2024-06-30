//newProduct.js

const express = require("express");

function makeRouter(saveProduct) {
  const router = express.Router();
  router.post("/", async (req, res) => {
    try {
      console.log("req.body:", req.body);
      const annonce = await saveProduct(req.body);
      res.json(annonce);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de l'ajout de l'annonce" });
    }
  });
  return router;
}

module.exports = makeRouter;
