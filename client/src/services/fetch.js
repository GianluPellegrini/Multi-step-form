const endpoint = "http://localhost:3001";

export default class MongoService {
  static async addUser(user, pass) {
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        cognome: cognome,
        email: email,
        username: user,
        password: pass,
        nazionalita: nazioanlita,
        altro: altro,
      }),
    };
    return fetch(`${endpoint}/nuovoutente`, options)
      .then((res) => res.json())
      .catch((err) => console.log("errore Iscrizione", { msg: err }));
  }
}
