const Employee = require("../script/employee");

//Manager Class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Manager";
      this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
      return this.officeNumber
    }
  }

  module.exports = Manager;