function Employee(name, id, email) {
  // email = "danielclyons@yahoo.com";
  this.name = name;
  this.id = id;
  this.email = email;
}

Employee.prototype.getName = function() {
  return `${this.name} is the employee's name.`;
}

Employee.prototype.getId = function() {
  return `${this.id} is the employee's id.`
}

Employee.prototype.getEmail = function() {
  return `${this.email} is the employee's email.`;
}

Employee.prototype.getRole = function() {
  return 'Employee';
}


module.exports =  Employee;