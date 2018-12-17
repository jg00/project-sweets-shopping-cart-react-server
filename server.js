const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const products = require("./routes/products");
const users = require("./routes/users");
const auth = require("./routes/auth");

const db = require("./config/keys").mongoUrl;
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => console.log("Connected to database!"))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors());
app.use("/api/products", products);
app.use("/api/users", users);
app.use("/api/auth", auth);

app.listen(PORT, () => {
  console.log("Server started on port ${PORT}", PORT);
});
