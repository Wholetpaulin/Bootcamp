// Constructor function for creating CastMember objects
var Student = function(name, subject, gpa) {
  //Name of the student Favorite subject Current GPA
  this.name = name;
  this.subject = subject;
  this.gpa = gpa;
};

// Exporting our CastMember constructor. We will require it in movie.js
module.exports = Student;
