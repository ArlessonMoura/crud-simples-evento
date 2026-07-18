function isEmailValid(req, res, next) {
  const emailRegex =
  /^(?!.*\.\.)(?!\.)(?!.*\.$)[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;

  const { email } = req.body;

  if(!email) {
    return res.status(400).send("O campo de e-mail não foi preenchido");
  }
  if(!emailRegex.test(email)) {
    return res.status(400).send("Favor insira um e-mail com padrão valido - example@example.com");
  } 
  
  next();
}

module.exports = isEmailValid;