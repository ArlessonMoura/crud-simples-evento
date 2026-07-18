function isAgeInputValid(req, res, next) {
  const { idade } = req.body;

  if(!idade|| isNaN(idade)) {
    return res.status(400).send("O campo de idade não foi preenchido");
  }
  
  next();
}

module.exports = isAgeInputValid;