// As always, we grab the fs package to handle read/write
var fs = require("fs");

// We then store the textfile filename given to us from the command line
var argument = process.argv[2];
var amount = process.argv[3];
var total = 0;


switch(argument) {
    //Deposit appends the number with a comma into the bank.txt
    case "deposit":
        //Error catching in case user forgets to put amount as second parameter
        if(amount === undefined){
            console.log("Please put an amount in to deposit.");
            return;
        }
        //Append the amount(second parameter) into the next file with a comma and space
        fs.appendFile("bank.txt", amount + ", ", function(err) {
		  // If an error was experienced we say it.
		  if (err) {
		    console.log(err);
		  }

		  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
		  else {
		    console.log("$" + amount + " was added to your account.");
		  }

		});
        break;

    case "withdraw":
//Withdraw appends the number with a - in front, followed by a comma into the bank.txt
    	//Error catching in case user forgets to put amount as second parameter
        if(amount === undefined){
            console.log("Please put an amount in to deposit.");
            return;
        }
        //Append the amount(second parameter) into the next file with a comma and space
        fs.appendFile("bank.txt", "-" + amount + ", ", function(err) {
          // If an error was experienced we say it.
          if (err) {
            console.log(err);
          }

          // If no error is experienced, we'll log the phrase "Content Added" to our node console.
          else {
            console.log("-$" + amount + " was added to your account.");
          }

        });
        break;
    case "total":
        fs.readFile("bank.txt", "utf8", function(error, data) {

          // If the code experiences any errors it will log the error to the console.
          if (error) {
            return console.log(error);
          }

          // Then split it by commas (to make it more readable)
          var dataArr = data.split(",");

          for(var i = 0; i < dataArr.length-1; i++){
            var place = parseFloat(dataArr[i]);
            //console.log(place);
            total = place + total;
            //console.log(total);
          }
          console.log("Your total is " + total);


        });       
        break;  

    case "lotto":

        //Append the amount(second parameter) into the next file with a comma and space
        fs.appendFile("bank.txt", "-0.25, ", function(err) {
          // If an error was experienced we say it.
          if (err) {
            console.log(err);
          }

          // If no error is experienced, we'll log the phrase "Content Added" to our node console.
          else {
            var random = Math.floor(Math.random() * 4);
            if (random === 3){
                fs.appendFile("bank.txt", "1, ", function(err) {
                // If an error was experienced we say it.
                if (err) {
                    console.log(err);
                }

                // If no error is experienced, we'll log the phrase "Content Added" to our node console.
                else {
                    console.log("You've won! $1 was added to your account.");
                }

                });
            }
            else{
                console.log("Miss! Try again later.");
            }

          }

        });
        break;  

    default:
        console.log("Format to run commands is node bank.js command amount.");
}
// We then append the contents the amount into the file
// If the file didn't exist then it gets created on the fly.



