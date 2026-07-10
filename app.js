const express = require('express');
const fs = require('fs').promises;
const crypto = require('crypto');
const path = require('path');
const { error } = require('console');
const { json } = require('stream/consumers');

const app = express();
const port = 3000;
const filePath = path.join(__dirname, 'casting.json');

const secret = "nao-sei";

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

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (typeof email === "undefined") {
    res.send("O campo de email não foi preenchido, retornado um valor indefinido").status(400);
    return;
  }

  if (typeof password === "undefined") {
    res.send("O campó de senha não foi preenchido, retornando um valor idefinido").status(400);
    return;
  }

  if (!validateEmail(email)) {
    res.send("O email informado é inválido, por favor insira um email válido").status(400);
    return;
  }

  if (!validatePassword(password)) {
    res.send("A senha informada é invalida. A senha deve conter pelo menos 6 caractéres").status(400);
    return;
  }

  currentToken = generateToken();

  res.send(`Login efetuado com sucesso com o token: "${currentToken}" gerado`).status(200);

});

app.post("/casting", (req, res) => {
  const informedToken = req.header.authorization;

  if (informedToken !== currentToken) {
    res.send("O token de autenticação enviado é inválido").status(400);
    return;
  }

  const { nomeCompleto, idade, participacao } = req.body;
  const { dataPresenca, nota } = participacao;

  if (nomeCompleto && idade && participacao && dataPresenca && nota) {
    
  }
});

//#region Validação de login

function validateEmail(email) {
  const emailParts = email.split("@");

  if (emailParts.length !== 2) {
    return false;
  }

  const emailName = emailParts[0];
  const emailDomain = emailParts[1];

  if ((emailName.length > 0) && emailDomain.includes(".") && (emailDomain.length >= 3)) {
    return true;
  }

  return false;
}

// console.log("teste validação email: " + validateEmail("teste@gmail@com"));

function validatePassword(password) {
  return (password.length >= 6) ? true : false;
}

// console.log("teste validação senha: " + validatePassword("123456"));

function generateToken() {
  const token = crypto.randomBytes(8).toString("hex");
  console.log(token);
  return token;
}

//#endregion

//#region Validação de cadastro

function validarNomeCompleto(nome) {
  
}

//#endregion