const pg = require("pg");

const { Pool } = pg;

const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "test",
  password: "Muskan@2001",
  port: 5432,
});

module.exports = db;
