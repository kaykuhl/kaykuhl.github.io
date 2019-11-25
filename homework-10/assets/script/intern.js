const Employee = require("../script/employee");

//Intern Class
class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id);
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Intern";
      this.school = school;
    }
    getSchool() {
      return this.school
    }
  }

  module.exports = Intern;