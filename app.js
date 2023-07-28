const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes");
const port = process.env.DB_PORT;
dotenv.config();
const error_handler = require("./middlewares/error_handler");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.use(error_handler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
