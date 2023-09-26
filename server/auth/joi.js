const Joi = require("joi");
const validateLogin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9.]{3,30}$")),
  role: Joi.string(),
}).with("username", "password");

const validateRegister = Joi.object({
  fullname: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9.]{3,30}$")),
  "confirm password": Joi.ref("password"),
  "phone number": Joi.number(),
  "card name": Joi.string(),
  "card number": [Joi.string(), Joi.number()],
  role: Joi.string(),
})
  .with("fullname", "email")
  .with("card name", "card number")
  .with("password", "confirm password");

module.exports = { validateRegister, validateLogin };
