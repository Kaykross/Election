const router = require("express").Router();
const LoginRoute = require("./router.login");
const RegisterRoute = require("./router.register");

router.get("/", (req, res) => {
  res.send("hello router");
});
router.get("/hello", (req, res) => {
  res.send("hello router");
});

router.use(LoginRoute);
router.use(RegisterRoute);

module.exports = router;
