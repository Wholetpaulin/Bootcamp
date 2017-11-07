var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",
  // Your password
  password: "",
  database: "example"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
});

function readProducts() {
  console.log("Selecting all items...\n");
  connection.query("SELECT * FROM item", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement


    res.forEach(function(dataRow){      //this is a more elegant way to print data to the console.
      console.log(dataRow.item_name);
    });


    console.log(res);
    connection.end();
  });
}
