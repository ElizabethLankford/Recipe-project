const express = require("express");
const app = express();
const PORT = 8081;

const morgan = require("morgan");
//app.use(morgan("dev"));

const bodyParser = require("body-parser");
//app.use(bodyParser.json());

const cors = require("cors");
//app.use(cors());

const client = require("./db/client");
client.connect();

app.get("/", (req, res) => {
  res.send("Home path WORKS!!!!");
});

app.use("/api", require("./api"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
