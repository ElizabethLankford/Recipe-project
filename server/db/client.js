const { Client } = require("pg");
//const client = new Client("postgres://localhost:54321/recipedatabase");
const client = new Client(
  "postgres://recipedatabase_itx5_user:OEWbfILuWlCeCujk5mValm4QnU2U0e5m@dpg-cmreh3un7f5s738j8lm0-a/recipedatabase_itx5"
);

module.exports = client;
