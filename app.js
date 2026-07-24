const express = require('express');
const fs = require('fs').promises;
const crypto = require('crypto');
const path = require('path');
const {
  emailValidation,
  passwordValidation,
  nameValidation,
  ageValidation,
  castingValidation,
  tokenValidation,
} = require('./middleware/validations');

const app = express();
const port = 3000;
const filePath = path.join(__dirname, 'casting.json');

app.use(express.json());

app.listen(port, () => {
  console.log(`API de gestão de convidados iniciada na porta ${port}`);
});


//CRUD - É um acrônimo para Create, Read, Update e Delete.

// CREATE
app.post('/casting', nameValidation, ageValidation, castingValidation, tokenValidation, async (req, res) => {
  try {
    const infoObject = await fs.writeFile(
      filePath,
      JSON.stringify(req.body, null, 2),
      'utf8',
    );
    res.status(201).json(req.body);

    console.log(infoObject)
  } catch (error) {
    res.status(400).send(`Error ao ler o arquivo: ${error}`);
  }
});


// READ ALL
app.get('/casting', async (_req, res) => {
  let talkers = [];

  try {
    talkers = await fs.readFile(filePath, 'utf8');
    res.status(200).json(JSON.parse(talkers));
  } catch (error) {
    res.status(404).send(`Error ao ler o arquivo: ${error}`);
  }
});

// READ BY ID
app.get('/casting/:id', async (req, res) => {
  let talkers = [];
  const userId = Number(req.params.id);
  try {
    talkers = await fs.readFile(filePath, 'utf8');
    const guest = JSON.parse(talkers).find(({ id }) => {
      return id === userId;
    })

    if(!guest) {
      return res.status(404).send(`O convidado não consta em nossa lista.`);
    }
    res.status(200).json(guest);
  } catch (error) {
    res.status(404).send(`Error ao ler o arquivo: ${error}`);
  }
});



// LOGIN
app.post('/login', emailValidation, passwordValidation, async (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');

  try {
    return res.status(200).json({ token });

    
  } catch (error) {
    return res.status(400).send(`No momento não conseguimos efetuar seu login: ${error}`);
  }
});

