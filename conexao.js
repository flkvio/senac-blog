var mysql = require("mysql");

var conectarBanco = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blogsegundaquarta",
});

module.exports = conectarBanco;
