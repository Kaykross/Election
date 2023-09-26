const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/routes");
const db = require("./database/db");

dotenv.config();
const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(port, () => console.log(`Server started on port: ${port}`));
