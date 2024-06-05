const mysql = require("mysql");

const database = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "P@ssword23",
  database: "proyek_rpl",
});

database.connect((err) => {
  if (err) throw err;
  console.log("Database connetnd");
});

module.exports = database;
