function isNameInputValid(req, res, next) {
  const { nomeCompleto } = req.body;

  if(!nomeCompleto || nomeCompleto.trim().length === 0) {
    return res.status(400).send("O campo de nome não foi preenchido");
  }
  
  next();
}

module.exports = isNameInputValid;