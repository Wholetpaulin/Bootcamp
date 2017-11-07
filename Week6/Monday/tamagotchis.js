// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function DigitalPal() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  

  this.feed = function() {
    if(this.hungry === true){
      console.log("That was yummy!"); 
      this.hungry = false;
      this.sleepy = true;
    }
    else{
      console.log("No thanks, I'm full."); 
    }
  };

  this.sleep = function() {
    if(this.sleepy){ 
      console.log("Zzzzzzzz");
      this.sleepy = false;
      this.bored = true;  //then set bored to true, and then run increaseAge().
      this.increaseAge(); //may not need a ".this" in front??? 
    }
    else{
    console.log("No way! I'm not tired.");
    }
  };

  this.play = function() {
    if(this.bored){
      console.log("Yay! Let's play!");
      this.bored = false;
      this.hungry = true; 
    } 
    else{
    console.log("Not right now. Later?");
    }
  };

  this.increaseAge = function() {
    this.age += 1;
    console.log("Happy Birthday to me! I am "+this.age+" old!");
  };
}
  
//---------------------------------MAIN APPLICATION-----------------------

var dog = new DigitalPal();

dog.outside = false;  //Outside - Initially set to false

dog.bark = function(){
  console.log("Woof! Woof!");
};
dog.goOutside = function(){
  if(outside === false){
    console.log("Yay! I love the outdoors!");
    outside = true;
    dog.bark();
  }
  else{
    console.log("We're already outside though.");
  }
};
dog.goInside = function(){
  if(outside){
    console.log("So we have to? Fine...");
    outside = false;
    dog.bark();
  }
  else{
    console.log("We're already inside though.");
  }
};

var cat = new DigitalPal();

cat.houseCondition = 100; 

cat.meow = function(){
  console.log("Meow! Meow!");
};
cat.destroyFurniture = function(){
  if(cat.houseCondition > 0){
    cat.houseCondition -= 10;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
  }
  else{
    console.log("The furniture is already fucked.");
  }
};
cat.buyNewFurniture = function(){
    this.houseQuality += 50;
    console.log("Are you sure about that?");
};
