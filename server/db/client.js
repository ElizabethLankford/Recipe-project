const { Client } = require("pg");

const client = new Client(
  "postgres://elankford:2vlyd8U950nmIvKCfvcnu9cJb5O10lvu@dpg-cmrdf1v109ks73fhj0v0-a/recipedatabase_pnu7"
);

module.exports = client;
