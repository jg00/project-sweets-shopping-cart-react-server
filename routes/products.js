const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// api/products/test
router.get("/test", (req, res) => {
  res.json({ name: "GET api/products/test" });
});

// api/products/add
router.post("/add", (req, res) => {
  //   console.log(req.body);
  //   res.json(req.body);
  const product = new Product({
    product: {
      name: "name01",
      price: 10.98,
      typeOfChocolate: "dark01"
    }
  });

  product
    .save()
    .then(product => res.json(product))
    .catch(err => res.json({ error: "Unable to save product", err }));

  //   product.save((error, returnedOrder) => {
  //     if (error) {
  //       res.status(500).json({ error: "Unable to create product" });
  //       return;
  //     }
  //     res.json({ returnedOrder });
  //   });
});

module.exports = router;
