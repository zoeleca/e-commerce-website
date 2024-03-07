//main.js

const express = require("express");
const router = express.Router();
const { getProduct } = require("./Back-end/dbQueries.js");

router.get("/", function(req, res, next) {
  console.log("Router Working");
});
  
router.get("/", async (req, res) => {
  try {
    const products = await getProduct();
    res.json(products);
  } catch (error) {
    console.error("Error executing SQL query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;
