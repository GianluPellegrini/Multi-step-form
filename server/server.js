const express = require("express");
const router = require("./routes/routes");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(express.json());
app.use(cors());
app.use("/", router);

try {
  app.listen(port, function () {
    console.log(`Connesso | Porta : ${port}`);
  });
  mongoose.connect("mongodb://localhost/Utenti-form");
  console.log("Connesso al DB");
} catch (err) {
  console.log(err);
}
