const inquirer = require("inquirer");

function promptUser () {
inquirer
  .prompt ({
    message: "What Type of Employee Would you like to add?",
    name: "typeOfEmployee",
    choices: ["Manager", "Engineer", "Intern"],
    type: "list"
  })
  .then(function ({typeOfEmployee}) {
    
  })
}

class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  getName()
  getId()
  getEmail()
  getRole() {
    return "Employee"
  };
}

class Manager extends Employee {
  constructor(officeNumber) {
    super(id, name);
    this.name = name;
    this.id = id;
    this.officeNumber = officeNumber
  }
  getRole() {
    return "Manager"
  };
}

class Engineer extends Employee {
  constructor(github) {
  super(id, name);
  this.name = name;
  this.id = id;
  this.github = github;
}
getRole() {
  return "Manager"
};
}

class Intern extends Employee {
  constructor(school) {
  super(id, name);
  this.name = name;
  this.id = id;
  this.school = school;
}
getRole() {
  return "Manager"
};
getSchool(){
}
}