//backoffice.js

const express = require("express");
const router = express.Router();
const { boQuery } = require("../dbQueries.js");

router.get("/", function(req, res, next) {
  console.log("Backoffice Router Working");
});
  
router.get("/", async (req, res) => {
  try {
    const products = await boQuery();
    res.json(products);
  } catch (error) {
    console.error("Error executing SQL query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});