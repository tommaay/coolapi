const express = require("express");

const router = express.Router();

// endpoints when url begins with /orders
router.get("/", (req, res) => {
  res.send("GET /orders endpoint");
});

// /orders/:id
router.get("/:id", (req, res) => {
  res.send(`GET /orders/${req.params.id} endpoint`);
});

module.exports = router;
