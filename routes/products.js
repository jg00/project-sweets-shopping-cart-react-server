const express = require("express");
const router = express.Router();
const Product = require("../schemas/Product");

// api/products/add
router.get("/add", (req, res) => {
  res.json({ name: "GET api/products/add" });
});

// api/products/add
router.post("/add", (req, res) => {
  //   console.log(req.body);
  //   res.json(req.body);
  const product = new Product({
    product: {
      name: "name01",
      price: 10.99,
      typeOfChocolate: "dark01"
    }
  });

  product.save((error, returnedOrder) => {
    if (error) {
      res.status(500).json({ error: "Unable to create product" });
      return;
    }
    res.json({ returnedOrder });
  });
});

module.exports = router;
