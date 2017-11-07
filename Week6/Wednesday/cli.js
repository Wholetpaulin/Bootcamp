var fs = require("fs");
var UserSearch = require("./weather.js");

var input = "";

if(process.argv[2] === "user"){
  for(var i = 4; i<process.argv.length; i++ ){
     input = input + process.argv[i];
  }



var kyle = new UserSearch(process.argv[3], input);

kyle.getWeather();
}

if(process.argv[2] === "admin"){
for(var i = 4; i<process.argv.length; i++ ){
     input = input + process.argv[i];	//MAY NEED TO CHANGE THE VAR NAME
  }


fs.readFile("log.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
        return console.log(error);
    }

    // We will then print the contents of data
    console.log(data);

});

}