const express = require("express");
const Utente = require("../models/Utente");
const router = express.Router();

router.post("/nuovoutente", async function (req, res) {
  const nome = req.body.nome;
  const cognome = req.body.cognome;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const nazionalita = req.body.nazionalita;
  const altro = req.body.altro;

  console.log(nome + " " + cognome + " " + password);
  bcrypt.hash(password, 10).then((hash) => {
    try {
      var nuovoUtente = new Utente({
        nome: nome,
        cognome: cognome,
        email: email,
        nazionalita: nazionalita,
        alto: altro,
        username: username,
        password: hash,
      });
    } catch (error) {
      console.log("errore inserimento");
    }
    Utente.create(nuovoUtente, function (err) {
      if (err) {
        console.log("errore");
      } else {
        console.log("Riuscito");
      }
    });
  });
});

module.exports = router;
