const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1/Elections";

mongoose.set("strictQuery", false);
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once("open", () => console.log("Db Connected successfully"));
db.on("error", console.error.bind(console, "Mongodb Connection error"));

module.exports = db;
