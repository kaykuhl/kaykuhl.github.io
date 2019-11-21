const inquirer = require("inquirer");

let theManager
let engineers = []
let interns = []

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "employee";
  }
  getName() {
    return this.name
  }
  getId() {
    return this.Id
  }
  getEmail() {
    return this.email
  }
  getRole() {
    return this.role
  };
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "manager";
    this.officeNumber = officeNumber;
  }
  getRole() {
    return this.role
  };
  getOfficeNumber() {
    return this.officeNumber
  };
}

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
  super(name, id, email);
  this.name = name;
  this.id = id;
  this.email = email;
  this.role = "engineer";
  this.gitHub = gitHub;
}
getRole() {
  return this.role
};
getGithub() {
  return this.gitHub
};
}

class Intern extends Employee {
  constructor(name, id, school) {
  super(name, id);
  this.name = name;
  this.id = id;
  this.role = "intern";
  this.school = school;
}
getRole() {
  return this.role
};
getSchool(){
  return this.school
}
}


function getManagerInfo () {
  console.log("Welcome to the development team builder!")
  inquirer.prompt ([{
      type: "input",
      name: "managerName",
      message: "What is the name of the Manager of the Team?",
    },{
      type: "input",
      message: "What is the Manager's ID?",
      name: "managerID"
    },{
      type: "input",
      message: "What is the Manager's Email?",
      name: "managerEmail"
    },{
      type: "input",
      message: "What is the Manager's Office Number?",
      name: "managerOffice"
    }]).then (function (managerInfo){
     theManager = new Manager(managerInfo.managerName, managerInfo.managerID, managerInfo.managerEmail, managerInfo.managerOffice)
     addNewTeamMember()
    })
}

function addNewTeamMember (){
 inquirer.prompt ({
      type: "list",
      message: "What Type of Employee Would you like to add to the team?",
      name: "typeOfEmployee",
      choices: ["Engineer", "Intern", "There are no more team members"]
    }).then( function (answers) {
      if(answers.typeOfEmployee === "Engineer") {
        getEngineerInfo()
      }
      if(answers.typeOfEmployee === "Intern") {
        getInternInfo()
      }
      if(answers.typeOfEmployee === "There are no more team members") {
        endApplication()
      }}
    )
  }

function getEngineerInfo() {
  console.log("You are adding an Engineer to the team!")
  inquirer.prompt ([{
    type: "input",
        message: "What is the name of the Engineer?",
        name: "engineerName"
      },{
        type: "input",
        message: "What is the Engineer's ID?",
        name: "engineerID"
      },{
        type: "input",
        message: "What is the Engineer's Email?",
        name: "engineerEmail"
      },{
        type: "input",
        message: "What is the Engineer's GitHub?",
        name: "engineerGitHub"
      }]).then (function (engineerInfo){
       engineers.push(new Engineer(engineerInfo.engineerName, engineerInfo.engineerID, engineerInfo.engineerEmail, engineerInfo.engineerGitHub))
       addNewTeamMember()
      })
}

  function getInternInfo() {
    console.log("You are adding an Intern to the team!")
    inquirer.prompt ([{
      type: "input",
        message: "What is the name of the Intern?",
        name: "internName"
      },{
        type: "input",
        message: "What is the Intern's ID?",
        name: "internID"
      },{
        type: "input",
        message: "What is the Intern's School?",
        name: "internSchool"
      }]).then (function (internInfo){
       interns.push(new Intern(internInfo.internName, internInfo.internID, internInfo.internSchool))
       addNewTeamMember()
      })
}

  function endApplication() {
    console.log(theManager)
    console.log(interns)
    console.log(engineers)
  }

getManagerInfo()