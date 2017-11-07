var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "join_example"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  readProducts();
  });

connection.end();

function readProducts() {
    console.log("Selecting all comments...");
    connection.query("SELECT * FROM comments", function (err, res) {
        //log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}