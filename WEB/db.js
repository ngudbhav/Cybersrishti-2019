var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database : 'cyber2019',
  insecureAuth : true
});

connection.connect();
console.log("Connection Complete");

module.exports = connection;