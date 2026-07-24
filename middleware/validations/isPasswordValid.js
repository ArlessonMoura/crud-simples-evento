function isPasswordValid(req, res, next) {
  const { password } = req.body;

  if(!password) {
    return res.send("O campo de senha não foi preenchido").status(400);
  }
  if(password.length <= 5) {
    return res.status(400).send("A senha deve conter ao menos 6 caracteres");
  }

  next();
}

module.exports = isPasswordValid;