const { Pool } = require("pg");

const pool = new Pool({
  user: "franklynumeh",
  host: "localhost",
  database: "fetchdb",
  password: "",
  port: 5432,
});

module.exports = pool;