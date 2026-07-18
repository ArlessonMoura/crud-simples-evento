const emailValidation = require("./isEmailValid");
const passwordValidation = require("./isPasswordValid");
const nameValidation = require("./isNameInputValid");
const ageValidation = require("./isAgeInputValid");
const castingValidation = require("./isCastingValid");
const tokenValidation = require("./isTokenValid");

module.exports = { 
  emailValidation, 
  passwordValidation, 
  nameValidation, 
  ageValidation, 
  castingValidation,
  tokenValidation,
 };