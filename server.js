const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

const products = require("./routes/products");

const db = require("./config/keys").mongoUrl;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to database!"))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use("/api/products", products);

app.listen(PORT, () => {
  console.log("Server started on port ${PORT}", PORT);
});
