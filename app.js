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
    res.json(JSON.parse(data)).status(200);
  }
});
