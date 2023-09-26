const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = async (plainPassword) => {
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(plainPassword, salt);
};

const comparePasswords = async (plainPassword, dataBasePassword) => {
  return await bcrypt.compare(plainPassword, dataBasePassword);
};

module.exports = { hashPassword, comparePasswords };
