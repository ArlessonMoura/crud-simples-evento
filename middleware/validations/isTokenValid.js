const crypto = require('crypto');

const PALAVRA_SUPER_SECRETA = '123456superSecreto';

function isTokenValid(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).send('Token de autorização não fornecido.');
  }

  if (!/^[a-fA-F0-9]{64}$/.test(authorization)) {
    return res.status(401).send('Token inválido.');
  }

  const hashBuffer = crypto.createHash('sha256').update(PALAVRA_SUPER_SECRETA).digest();

  const authBuffer = Buffer.from(authorization, 'hex');

  if (authBuffer.length !== hashBuffer.length) {
    return res.status(401).send('Token inválido.');
  }

  const isValid = crypto.timingSafeEqual(hashBuffer, authBuffer);

  if (!isValid) {
    return res.status(401).send('Token inválido.');
  }

  next();
}

module.exports = isTokenValid;
