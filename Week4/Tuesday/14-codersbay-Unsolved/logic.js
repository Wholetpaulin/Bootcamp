// Initialize Firebase
var config = {
    apiKey: "AIzaSyBvi-YmM91JwWR-JjTvevM6axk4JinrJBQ",
    authDomain: "aname-c27c7.firebaseapp.com",
    databaseURL: "https://aname-c27c7.firebaseio.com",
    projectId: "aname-c27c7",
    storageBucket: "aname-c27c7.appspot.com",
    messagingSenderId: "317268419129"
  };
firebase.initializeApp(config);


// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
var database =  firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {
  console.log(snapshot);
  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = snapshot.val().highPrice;
    highBidder = snapshot.val().highBidder;

    // Change the HTML to reflect the stored values
    $("#highest-bidder").html(highBidder);
    $("#highest-price").html(highPrice);


    // Print the data to the console.
    console.log("highest-bidder" + highBidder);
    console.log("highest-price" + highPrice);
  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-bidder").html(initialBidder);
    $("#highest-price").html(initialBid);


    // Print the data to the console.
    console.log("highest-bidder" + initialBidder);
    console.log("highest-price" + initialBid);
  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidderName = $("#bidder-name").val().trim();
  var bidderPrice = $("#bidder-price").val().trim();
  console.log("bidderPrice = " + bidderPrice);
  console.log("bidderName = " + bidderName);




  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
        highPrice: bidderPrice,
        highBidder: bidderName
      });

    // Log the new High Price
    console.log(highPrice);

    // Store the new high price and bidder name as a local variable
    var newHighPrice = highPrice;
    var newHighBidder= highBidder;


    // Change the HTML to reflect the new high price and bidder
    $("#highest-bidder").html(newHighBidder);
    $("#highest-price").html(newHighPrice);
  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
