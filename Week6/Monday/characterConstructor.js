// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function Character(name, profession, gender, age, strength, hp) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hp = hp;

  this.printStats = function() {
      console.log("Name: " + this.name);
      
      console.log("Profession: " + this.profession);

      console.log("Gender: " + this.gender);

      console.log("Age: " + this.age);

      console.log("Strength: " + this.strength);

      console.log("Health Points: " + this.hp);
  };

  this.isAlive = function() {
      if(this.hp > 0){
        console.log(this.name + " is alive.");
      }
  };

  this.attacks = function(opp) {
      opp.hp = opp.hp - this.strength;
  };

  this.levelUp= function(opp) {
      this.age += 1;
      this.strength += 5;
      this.hp += 25;
  };
}
  
//---------------------------------MAIN APPLICATION-----------------------
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your profession?",
      name: "profession"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "confirm",
      message: "Are you a boy?",
      name: "confirm",
      default: true
    },
    {
      type: "input",
      message: "How old are you?",
      name: "age"
    },
        {
      type: "input",
      message: "An opponent appears! What is thier name?",
      name: "username2"
    },
    {
      type: "input",
      message: "What is thier profession?",
      name: "profession2"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "input",
      message: "How old is your opponent?",
      name: "age2"
    },
    {
      type: "list",
      message: "How do you proceed?",
      choices: ["Attack!", "Defend", "Check yourself out","Check them out", "Run away!!"],
      name: "action"
    }
    // Here we give the user a list to choose from.
  ])
  .then(function(response) {
    if(response.confirm){
      var gen = "male";
    }
    else{
      var gen = "female";
    }
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
   var player1 = new Character(response.username, response.profession, gen, response.age, 5, 10);
   var player2 = new Character(response.username2, response.profession2, "male", response.age2, 5, 10);

   if(response.action === "Attack!"){
    player1.attacks(player2);
    player1.printStats();
   }
   if(response.action === "Defend"){
    player2.attacks(player1);
    player1.printStats();
   }
   if(response.action === "Check yourself out"){
    player1.printStats();
   }
   if(response.action === "Check them out"){
    player2.printStats();
   }
   if(response.action === "Run away!!"){
    console.log("You get away safely");
   }

  });








// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
// var jim = new Character("Jim", "Teacher", "Male", 35, 5, 10);
// var paul = new Character("Paul", "Student", "Male", 24, 10, 10);

// jim.printStats();
// jim.isAlive();
// jim.attacks(paul);
// paul.printStats();
// paul.levelUp();
// paul.printStats();