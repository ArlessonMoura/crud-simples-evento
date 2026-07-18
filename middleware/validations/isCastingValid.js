function isCastingInputValid(req, res, next) {
  const regexBissextoPerfeita = /^(?:(?:(?:0[1-9]|[12]\d|3[01])\/(?:0[13578]|1[02])|(?:0[1-9]|[12]\d|30)\/(?:0[469]|11))\/|0[1-9]|[12]\d\/02\/)(?:\d{4})$|^(?:29\/02\/(?:(?:\d{2}(?:0[48]|[2468][048]|[13579][26]))|(?:(?:[02468][048]|[13579][26])00)))$/;
  
  const { participacao } = req.body;

  if (!participacao || !participacao.dataPresenca || !participacao.nota ) {
    return res.status(400).send("Os dados da participação não foram preenchidos.");
  }
  const { dataPresenca, nota } = participacao;

  if(!dataPresenca || dataPresenca.trim().length === 0) {
    return res.status(400).send("O campo de data de presença não foi preenchido");
  }

  if(!regexBissextoPerfeita.test(dataPresenca)) {
    return res.status(400).send("O campo de data de presença não foi preenchido corretamente");
  }

  if(!nota || isNaN(nota)) {
    return res.status(400).send("O campo de nota não foi preenchido");
  }  

  next();
}

module.exports = isCastingInputValid;