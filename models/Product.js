const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product: {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    typeOfChocolate: String,
    entryDate: { type: Date, default: Date.now }
  }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
