const endpoint = "http://localhost:3001";

export default class MongoService {
  static async addUser(data) {
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: data.nome,
        cognome: data.cognome,
        email: data.email,
        username: data.username,
        password: data.password,
        nazionalita: data.nazionalita,
        altro: data.altro,
      }),
    };
    return fetch(`${endpoint}/nuovoutente`, options)
      .then((res) => res.json())
      .catch((err) => console.log("errore Iscrizione", { msg: err }));
  }
}
