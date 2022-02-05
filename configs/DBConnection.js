const mysql = require("mysql2");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pratik79",
  database: "data_repository_faculty",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = connection;
