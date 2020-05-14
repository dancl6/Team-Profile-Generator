function Engineer(name, id, email, github) {
  // email = "danielclyons@yahoo.com";
  this.name = name;
  this.id = id;
  this.email = email;
  this.github = github;

}

Engineer.prototype.getName = function() {
  return `${this.name} is the engineer's name.`;
}

Engineer.prototype.getId = function() {
  return `${this.id} is the engineer's id.`
}

Engineer.prototype.getEmail = function() {
  return `${this.email} is the engineer's email.`;
}

Engineer.prototype.getGithub = function() {
  return `${this.github} is the engineer's github.`;
}

Engineer.prototype.getRole = function() {
  return 'Engineer';
}


module.exports =  Engineer;