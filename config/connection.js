
// Set up MySQL connection.
const util = require("util");
var mysql = require("mysql");

if (process.env.JAWSDB_URL){ 
    connecton = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "checksix",
  database: "covid19_db"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id2 " + connection.threadId);
});



// Export connection for our ORM to use.
module.exports = connection;