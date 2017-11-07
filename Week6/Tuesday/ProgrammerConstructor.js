function Programmer(axc ) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.favoriteLan = favoriteLan;

  this.printInfo = function() {
      console.log("Name: " + this.name);
      
      console.log("Profession: " + this.position);

      console.log("Age: " + this.age);

      console.log("favorite Language: " + this.favoriteLan);
  };

}

var paul = new Programmer("paul", "overlord", 24, "JavaScript");
paul.printInfo();