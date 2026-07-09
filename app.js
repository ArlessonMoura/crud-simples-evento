const express = require('express');
const fs = require('fs').promises;
const crypto = require('crypto');
const path = require('path');
const { error } = require('console');

const app = express();
const port = 3000;
const filePath = path.join(__dirname, 'casting.json');

let currentToken = null;

app.use(express.json());

app.listen(port, () => {
  console.log(`API de gestão de convidados iniciada na porta ${port}`);
});

app.get("/", (req, res) => {
  res.send("texto");
});

app.get("/casting", async (req, res) => {
  console.log("Rota /casting foi chamada");

  try {
    const data = await fs.readFile(filePath, "utf8");

    res.send(data);
  } catch (err) {
    res.status(500).send(`Erro ao ler o arquivo: ${err.message}`);
  }
});
