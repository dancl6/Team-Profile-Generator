function Intern(name, id, email, school) {
  // email = "danielclyons@yahoo.com";
  this.name = name;
  this.id = id;
  this.email = email;
  this.school = school;

}

Intern.prototype.getName = function() {
  return `${this.name} is the intern's name.`;
}

Intern.prototype.getId = function() {
  return `${this.id} is the intern's id.`
}

Intern.prototype.getEmail = function() {
  return `${this.email} is the intern's email.`;
}

Intern.prototype.getSchool = function() {
  return `${this.school} is the intern's school.`;
}

Intern.prototype.getRole = function() {
  return 'Intern';
}

module.exports =  Intern;