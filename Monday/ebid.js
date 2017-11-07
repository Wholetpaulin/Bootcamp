var inquirer = require("inquirer");
var mysql = require("mysql");

//------------------------SERVER BULLSPIT---------------------------------------
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bids_db"
});


connection.connect(function(err) {
if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});

//------------------------------------------------------------------------------

function start() {

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "list",
      message: "Would you like to post or bid?",
      choices: ["Post", "Bid"],
      name: "start"
    }
  ])
  .then(function(inquirerResponse) {

    if (inquirerResponse.start == 'Post') {
      //console.log("\nYou've chosen post! ");
//--------------------------------SECOND NESTED QUESTION-------------------------
		inquirer
		  .prompt([
		    // Here we create a basic text prompt.
		        {
			      type: "input",
			      message: "What's the name of the item you're posting?",
			      name: "item_name"
			    },
			    {
					      type: "input",
					      message: "How much is the starting bid?",
					      name: "price"
				}
		  ])
		  .then(function(param2) {
		  		//TODO: SAVE THE NAME INTO DA DATABASE!
		  		//-------------THIRD NESTED QUESTION--------------------
				
				  		createItem(param2.item_name, param2.price);
				  		start();
				  		//console.log(param2.item_name + " & " + "have been pushed to the database.");
		  		//------------------------------------------------------
		  });
//-----------------------------------------------------------------------------
    }
    else {
      console.log("\nYou've chosen bid.\n");
//--------------------------------SECOND NESTED QUESTION-------------------------
		inquirer
		  .prompt([
		    // Here we create a basic text prompt.
			        {
				      type: "input",
				      message: "Which item are we bidding on?",
				      name: "item_name"
				    },
			        {
				      type: "input",
				      message: "How much would you like to bid?",
				      name: "bid_price"
				    }
		  ])
		  .then(function(inquirerResponse) {
		  		//TODO: LOOK IN THE DATABASE FOR item_name
		  		updateProduct(inquirerResponse.item_name, inquirerResponse.bid_price);
		  		console.log("We'll be using " + inquirerResponse.item_name + " & " + inquirerResponse.bid_price);
		  		start();
		  		//------------------------------------------------------
		  });
//-----------------------------------------------------------------------------

    }
  });
}//end of start function


function createItem(item_name, price) {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO item SET ?",
    {
      item_name: item_name,
      price: price
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}


function updateProduct(item_name, newprice) {
  console.log("Updating all items...\n");
  var query = connection.query(
    "UPDATE item SET ? WHERE ?",
    [
      {
        price: newprice
      },
      {
        item_name: item_name
      }
    ],
    function(err, res) {
      //console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      //readProducts();
    }
  );
}

