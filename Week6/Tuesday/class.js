var Student = require("./student");

// Constructor function for creating Movie objects
var Class = function(professorName, roomNum) {
  // this.cast will hold all of our CastMember objects
  this.students = [];
  this.professorName = professorName;
  this.roomNum = roomNum;

  // This method that creates a Student object from the constructor function we required and pushes it to the `this.students` array
  this.addStudent = function(g, n, r) {
    this.students.push(new Student(g, n, r));
  };
};

var bootcamp = new Class("Jim",  "3.122");
bootcamp.addStudent("Paul", "JavaScript", 3.19);
