const express = require('express');
const fs = require('fs').promises;
const crypto = require('crypto');
const path = require('path');

const app = express();
const port = 3000;
const filePath = path.join(__dirname, 'casting.json');

let currentToken = null;

app.use(express.json());

app.listen(port, () => {
  console.log(`API de gestão de convidados iniciada na porta ${port}`);
});
