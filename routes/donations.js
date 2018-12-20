const express = require("express");
const router = express.Router();
// const Product = require("../models/Product");

// api/donations/test
router.get("/test", (req, res) => {
  res.json({ name: "GET api/donations/test" });
});

module.exports = router;
