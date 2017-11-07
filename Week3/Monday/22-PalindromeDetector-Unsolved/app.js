
// Reverse in Place w/Palindrome Detector


// Instructions
// ============

  // A palindrome is a sentence that reads the same backwards and forwards:
  // "Was it a car or a cat I saw?"

  // Reverse each word in a sentence
  // and display it on the screen in the same order.

  // For example, the sentence "This is an example"
  // would become "siht si na elpmaxe."

  // If the word is a palindrome, have it display in red.


// Notes:
// ======

  // Remove periods.
  // Add the result to the page in the div with the id "Result".
  // Here are some test phrases to put in your JavaScript:
    // "Otto bought a racecar he cannot afford."
    // "Otto lost the deed to his house."
    // "Otto needs Xanax."


// Bonus:
// ======

  // Remove all "special characters" (commas, periods, etc).
  // Do not use the reverse() method.



var rev = function(word){
  var newWord = [];

  for(var i = 0; i < word.length; i++){
    newWord.push(word[word.length - 1 - i]);
  }//end of for loop

  var output = newWord.join("");
  output = output.replace(/\./g, "");
  return output;
}

console.log(rev("Otto needs Xanax."));

if(rev("Otto needs Xanax.")==="Otto needs Xanax."){
    document.getElementById("result").innerHTML = "This is a palindrome.";
}else  document.getElementById("result").innerHTML = 'This is not a palindrome.';