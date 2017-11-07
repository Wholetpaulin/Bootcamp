// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmer objects
function coinflip(){
  var coin = Math.floor(Math.random() * 2) + 1; //Take a random number

  if(coin === 1){   //If the "coin lands on heads" return true
    return true;
  }
  else{
    return false; //if it "lands on tails" return false
  }

}

function playGame(){
    var compareOff = Math.floor(Math.random() * 50) + 1;
    var compareDef = Math.floor(Math.random() * 50) + 1;
    //If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
    if(compareOff < offSum){
      score++;
      console.log("Your offense has gained a point!");
    }
    // If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
    if(compareDef > defSum){
      score--;
      console.log("Your defense has lost a point!");
    }
  //After the score has been changed, prompt the user to allow them to choose to substitute any of the players within the starters array with any of the players within the subs array.
}

function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;

  this.goodGame = function() {
     //Method which increases either the player's offense or defense property based upon a coinflip.
     if(cointFlip()){
        if(this.offense < 10){
            this.offense++;
            console.log(this.name + " has gained an offense rating point!");
        }
     }
     else{
        if(this.defense < 10){
            this.defense++;
            console.log(this.name + " has gained an defense rating point!");
          }
     }
  };

  this.badGame = function() {
     //Method which increases either the player's offense or defense property based upon a coinflip.
    if(cointFlip()){
        if(this.offense > 1){
            this.offense--;
            console.log(this.name + " has lost an offense rating point.");
        }
     }
     else{
        if(this.defense > 1){
                this.defense--;
                console.log(this.name + " has lost a defense rating point.");
              }
         }
  };

  this.printStats = function() {
     console.log("Player name: " + this.name);
     console.log("Position: " + this.position);
     console.log("Offense rating: " + this.offense);
     console.log("Defense rating: " + this.position);
  };
}       //end of constructor declaration



// variable we will use to count how many times our questions have been asked
var count = 0;
// array in which we will store each of our new programmer objects
var starter = [];
var sub = [];
var offSum = 0;
var defSum = 0;
var score = 0;

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 3) {
    console.log("NEW PLAYER");
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "name",
        message: "What is the new player's name?"
      }, {
        name: "position",
        message: "What is thier position?"
      }, {
        name: "offense",
        message: "What is their offense rating?"
      }, {
        name: "defense",
        message: "What is their defense rating?"
      }
    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will
      // take in all of the user's answers to the questions above
      var newGuy = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense);

      if(count < 2){
        // pushes newguy object into our array
        starter.push(newGuy);
      }
      else{
        sub.push(newGuy);
      }
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printStats() for each object inside of our array
  }
  else {  //if count is 3 or greater
    for (var x = 0; x < starter.length; x++) {
      starter[x].printStats();

    }
    for (var y = 0; y < 10; y++) {
      for(var o = 0; o < starter.length; o++){
        offSum += starter[o].offense; //This may be out of scope
        defSum += starter[o].defense;
      }
      playGame();
      //How are they going to keep asking questions and playing game without breking out
      //What's that logic look like?
    }
  }
};

// call askQuestion to run our code
askQuestion();

