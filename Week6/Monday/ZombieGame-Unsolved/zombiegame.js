// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).
var youHealth = 100;
var zombieHealth = 15;
// For each round, you will be asked to guess a random number between 1 and 5.
var inquirer = require("inquirer");
// while(youHealth > 0 || zombieHealth > 0){
// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
	  type: "list",
      message: "Choose a number between 1-5.",
      choices: ["1", "2", "3", "4", "5"],
      name: "input"
    }
  ])
  .then(function(response) {
  	var random = Math.floor(Math.random() * 5) + 1;
  	var damage = Math.floor(Math.random() * 5) + 1;
  	var choice = parseInt(response.input);


 	// console.log("You choose " + choice);
 	// console.log("Zombie choose " + random);
 	// console.log("Damage done was " + damage);

 	if(choice === random){
 		console.log("You did  " + damage + " damage to the zombie.");
 	}

 	else{
 		console.log("Zombie did  " + damage + " damage to the you!");
 	}

  });
//}
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt. 

// ===========================================================================================================
