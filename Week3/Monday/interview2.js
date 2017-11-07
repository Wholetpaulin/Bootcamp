//Pseudocode

//Print 1 - 100 in a for loop

//Use the modulo operator in 3 if statements to 


$(document).ready(function() {


  for(var i = 1; i < 101; i++){
  
    if((i % 3 === 0) && (i % 5 === 0)){
      console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
      console.log("Fizz");
    }
    else if(i % 5 === 0){
      console.log("Buzz");
    }
  	else{
      console.log(i);
    }       


  }


});