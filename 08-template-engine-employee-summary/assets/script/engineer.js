const Employee = require("../script/employee");

//Engineer Class
class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Engineer";
      this.github = github;
    }
    getGithub() {
      return this.github
    }
  }

  module.exports = Engineer;