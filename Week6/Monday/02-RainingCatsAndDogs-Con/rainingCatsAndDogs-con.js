// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function Animal(name, profession, gender, age, strength, hp) {
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
}

// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var jim = new Animal("Jim", "Teacher", "Male", 35, 5, 100);

Jim.printStats();