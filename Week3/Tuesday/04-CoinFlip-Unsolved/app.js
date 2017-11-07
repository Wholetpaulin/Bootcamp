    // Coin Flip JavaScript
    // These variables are declared for us.
    var headsCount = 0;
    var tailsCount = 0;
    var wins = 0;
    var losses = 0;
    function flipThatCoin(result) {

      //  STEP ONE:

        //  Declare and initialize a variable named randomNumber to either 0 or 1. Make it random.
        var random = Math.floor(Math.random() * 2);
      //  STEP TWO:

        //  If randomNumber is equal to zero then:
          if(random === 0){
            $("#coin-image").html('<img src = "http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg">');
          }
          else{
            $("#coin-image").html('<img src = "http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg">');
          }
        

      //  STEP THREE:
          if(result===randomNumber){
            wins++;
            $("#win-lose").html('<h2>Winner!</h2>');
            $("#wins").html(wins);
          }
          else{
            losses++;
            $("#win-lose").html('<h2>Loser!</h2>');
            $("#losses").html(losses);
          }

    }

    // This on click function has been completed for us.
    $("#heads").on("click", function() {
      headsCount++;
      $("#heads-chosen").text(headsCount);
      $("#guess").html("<b>Heads</b>");
      flipThatCoin(0);
    });

    $("#tails").on("click", function() {
      headsCount++;
      $("#tail-chosen").text(tailsCount);
      $("#guess").html("<b>Tails</b>");
      flipThatCoin(1);

          //  Find the span with an id of tails-chosen. Replace the html inside of the span with the tailsCount.
          //  Find the div with an id of guess. Update it with the word "Tails" bolded.
          //  Call the flipThatCoin function and pass value 1 into it.

    });
