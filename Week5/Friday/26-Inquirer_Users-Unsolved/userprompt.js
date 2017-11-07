// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm
// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer.prompt([

    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "So.. you like frogs?:",
      name: "confirm",
      default: true
    },
    {
      type: "input",
      message: "What yo frog name is?",
      name: "username"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "What's your froggy code?",
      name: "password"
    },
    {
      type: "list",
      message: "What color frog is your favorite?",
      choices: ["Purple", "Yellow", "Red", "Green"],
      name: "color"
    },
    // Here we give the user a list to choose from.
    { type: "checkbox",
      message: "Check the famous frogs?",
      choices: ["Bulbasaur", "Slippy", "Frogger"],
      name: "famous"
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    console.log("You are the frog master.");
  });

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
