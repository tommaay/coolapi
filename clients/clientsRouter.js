const express = require("express");

const router = express.Router();

// endpoints when url begins with /clients
router.get("/", (req, res) => {
  res.send("GET /clients endpoint");
});

// /clients/:id
router.get("/:id", (req, res) => {
  res.send(`GET /clients/${req.params.id} endpoint`);
});

module.exports = router;
