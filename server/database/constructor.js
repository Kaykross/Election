const Login = require("./models/login");
const Register = require("./models/register");
const loginSchema = (val, hashedPassword) =>
  new Login({
    username: val.username,
    password: hashedPassword,
    role: val.role,
  });

const registerSchema = (val, hashedPassword) =>
  new Register({
    fullname: val.fullname,
    email: val.email,
    password: hashedPassword,
    "confirm password": hashedPassword,
    "phone number": val["phone number"],
    "card name": val["card name"],
    "card number": val["card number"],
    role: val.role,
    username: val.username,
  });

module.exports = { loginSchema, registerSchema };
