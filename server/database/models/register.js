const mongoose = require("mongoose");
const RegisterSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  "confirm password": { type: String, required: true },
  "phone number": { type: String, required: true },
  "card name": { type: String, required: true },
  "card number": { type: String, required: true },
  role: { type: String, required: true },
  username: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Register", RegisterSchema);
