const mongoose = require("mongoose");

var utenteSchema = mongoose.Schema({
  nome: String,
  cognome: String,
  email: String,
  username: String,
  password: String,
  nazionalita: String,
  altro: String,
});

module.exports = mongoose.model("Utente", utenteSchema);
