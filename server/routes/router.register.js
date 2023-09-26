const router = require("express").Router();
const { validateRegister } = require("../auth/joi");
const Register = require("../database/models/register");
const { registerSchema } = require("../database/constructor");
const { hashPassword } = require("../auth/bcrypt");

let index = 1;

const generateUsername = (indexLen) =>
  indexLen == 1
    ? `NDC/2024/00${index}`
    : indexLen == 2
    ? `NDC/2024/0${index} max limit`
    : indexLen == 3
    ? `NDC/2024/${index}`
    : null;

router.post("/register", async (req, res) => {
  const indexLen = index.toString().length;
  const username = generateUsername(indexLen);
  index++;

  const { error, value } = validateRegister.validate(req.body);
  if (error) return res.json(error);
  await Register.find().deleteMany();
  const account = await Register.findOne({ email: value.email });
  if (account)
    return res.json({
      error: {
        msg: `account: Email ${value.email} already exist`,
      },
    });
  value.username = username;

  console.log(value);
  const hashedPassword = await hashPassword(value.password);
  const savedUser = await registerSchema(value, hashedPassword);
  console.log(savedUser);
  res.json({
    savedUser,
    success: { msg: `Account: ${savedUser.email} successfully registered` },
    route: "",
  });
  await savedUser.save();
});

module.exports = router;
