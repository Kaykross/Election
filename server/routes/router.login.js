const router = require("express").Router();
const { validateLogin } = require("../auth/joi");
const { loginSchema } = require("../database/constructor");
const Register = require("../database/models/register");
const { comparePasswords } = require("../auth/bcrypt");

router.post("/login", async (req, res) => {
  console.log(req.body);
  const { error, value } = validateLogin.validate(req.body);
  if (error) return res.json({ error: { msg: error.details[0].message } });

  const account = await Register.findOne({ username: value.username });
  if (!account) return res.json({ error: { msg: "Username does not exist" } });
  const pass = await comparePasswords(req.body.password, account.password);
  if (!pass) return res.json({ error: { msg: "invalid password" } });

  const savedUser = await loginSchema(value, account.password);
  res.send(savedUser);
});

module.exports = router;
