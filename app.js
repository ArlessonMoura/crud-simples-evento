const express = require('express');
const fs = require('fs').promises;
const crypto = require('crypto');
const path = require('path');
const { error } = require('console');
const { json } = require('stream/consumers');

const app = express();
const port = 3000;
const filePath = path.join(__dirname, 'casting.json');

let currentToken = null;

app.use(express.json());

app.listen(port, () => {
  console.log(`API de gestão de convidados iniciada na porta ${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1>API de gestão de convidados do Festival de Inovação</h1>");
});

app.get("/casting", async (req, res) => {
  console.log("Rota /casting foi chamada");

  let data = [];

  try {
    data = await fs.readFile(filePath, "utf8");

    res.json(JSON.parse(data)).status(200);
  } catch (err) {
    res.send("Erro ao ler o arquivo: ", err).status(404);
  }
});


app.get("/casting/:id", async (req, res) => {
  const guestID = req.params.id;

  console.log(`Rota /casting/:id foi chamada para o id: ${guestID}`);

  try {
    const data = await fs.readFile(filePath, "utf8");

    const transformData = JSON.parse(data);
    const guest = transformData[guestID];

    // console.log(" guest: '", guest, "'");

    if (guest) {
      res.json(guest).status(200);
      return;
    }

    res.send(`O convidade de ID '${guestID}' não foi encontrado`).status(404);

  } catch (err) {
    res.send("Erro ao ler o arquivo: ", err).status(404);
  }
});
