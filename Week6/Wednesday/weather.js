var weather = require("weather-js");
var fs = require("fs");
var UserSearch = function (name, location){
  this.date = Date.now();
  this.name = name;
  this.location = location;
  var theText = "\nDate: " + this.date + " Name: " + this.name + " Location: " + this.location;
  fs.appendFile("log.txt", theText);
  this.getWeather = function() {
    weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
      if(err) console.log(err);
      console.log(JSON.stringify(result, null, 2));
    });
  };
}
module.exports = UserSearch;
