function Manager(name, id, email, officeNumber) {
  // email = "danielclyons@yahoo.com";
  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNumber = officeNumber;

}

Manager.prototype.getName = function() {
  return `${this.name} is the manager's name.`;
}

Manager.prototype.getId = function() {
  return `${this.id} is the manager's id.`
}

Manager.prototype.getEmail = function() {
  return `${this.email} is the manager's email.`;
}

Manager.prototype.getRole = function() {
  return 'Manager';
}


module.exports =  Manager;