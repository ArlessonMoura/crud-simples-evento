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

// CREATE - Q4
app.post('/casting', nameValidation, ageValidation, castingValidation, async (req, res) => {
  try {
    let talkers = [];

    talkers = await fs.readFile(filePath, 'utf8');
    let parseTalkers = await JSON.parse(talkers);

    parseTalkers.sort((a, b) => a.id - b.id);

    let usedIds = [];

    parseTalkers.forEach(({ id }) => {
      usedIds.push(id);
    });

    let userId = usedIds.length + 1;

    for (let i = 0; i < usedIds.length; i++) {
      if (i + 1 !== usedIds[i]) {
        userId = i + 1;
        break;
      }
    }

    console.log(usedIds, userId);

    const newGuest = {
      "id": userId,
      "nomeCompleto": req.body.nomeCompleto,
      "idade": req.body.idade,
      "participacao": req.body.participacao
    }

    parseTalkers.push(newGuest);
    
    const infoObject = await fs.writeFile(
      filePath,
      JSON.stringify(parseTalkers, null, 2),
      'utf8',
    );
    res.status(201).json(newGuest);

  } catch (error) {
    res.status(400).send(`Error ao ler o arquivo: ${error}`);
  }
});

// READ ALL - Q1
app.get('/casting', async (_req, res) => {
  let talkers = [];

  try {
    talkers = await fs.readFile(filePath, 'utf8');
    res.status(200).json(JSON.parse(talkers));
  } catch (error) {
    res.status(404).send(`Error ao ler o arquivo: ${error}`);
  }
});

// BUSCAR POR NOME GET - Q7
app.get('/casting/search', async (req, res) => {
  try {
    const nome = req.query.q;

    talkers = await fs.readFile(filePath, 'utf8');

    const guest = JSON.parse(talkers).find(({ nomeCompleto }) => {
      const nomeCompletoAjustado = nomeCompleto.toLowerCase().replaceAll(" ", "");
      const nomeAjustado = nome.toLowerCase().replaceAll(" ", "");

      return nomeCompletoAjustado.includes(nomeAjustado);
    });
    
    res.status(200).send(guest);
  } catch (error) {
    res.status(404).send(`Error ao ler o arquivo: ${error}`);
  }
});

// READ BY ID - Q2
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

// LOGIN - Q3
app.post('/login', emailValidation, passwordValidation, async (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');

  try {
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).send(`No momento não conseguimos efetuar seu login: ${error}`);
  }
});

// PUT - Q5
app.put('/casting/:id', nameValidation, ageValidation, castingValidation, async (req, res) => {
  let talkers = [];
  const userId = Number(req.params.id);

  try {
    talkers = await fs.readFile(filePath, 'utf8');
    let parseTalkers = await JSON.parse(talkers);
    
    const guestID = parseTalkers.findIndex(({ id }) => {
      return id === userId;
    });

    if(guestID == -1) {
      return res.status(404).send(`O convidado não consta em nossa lista.`);
    }

    const newGuest = {
      "id": userId,
      "nomeCompleto": req.body.nomeCompleto,
      "idade": req.body.idade,
      "participacao": req.body.participacao
    }

    parseTalkers[guestID] = newGuest;
    
    const infoObject = await fs.writeFile(
      filePath,
      JSON.stringify(parseTalkers, null, 2),
      'utf8',
    );
    
    res.status(200).json(parseTalkers);
  } catch (error) {
    res.status(404).send(`Error ao ler o arquivo: ${error}`);
  }
});

// DELETE - Q6
app.delete('/casting/:id', async (req, res) => {
  let talkers = [];
  const userId = Number(req.params.id);

  try {
    talkers = await fs.readFile(filePath, 'utf8');
    let parseTalkers = await JSON.parse(talkers);
    
    const guestID = parseTalkers.findIndex(({ id }) => {
      return id === userId;
    });

    if(guestID === -1) {
      return res.status(404).send(`O convidado não consta em nossa lista.`);
    }

    const { nomeCompleto } = parseTalkers[guestID];

    parseTalkers.splice(guestID, 1);

    await fs.writeFile(
      filePath,
      JSON.stringify(parseTalkers, null, 2),
      'utf8',
    );
    
    res.status(200).json(`O convidado de ID ${userId}, ${nomeCompleto}, foi removido do banco de dados`);
  } catch (error) {
    res.status(404).send(`Error ao ler o arquivo: ${error}`);
  }
});
