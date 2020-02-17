// Required Node Modules
const inquirer = require("inquirer");
const fs = require('fs');

// Require external modules (classes)
const Manager = require("./assets/script/manager");
const Employee = require("./assets/script/employee");
const Engineer = require("./assets/script/engineer");
const Intern = require("./assets/script/intern");


// Global Variables
let theManager
let engineers = []
let interns = []

//Initial Function to get manager info (there is only 1 manager)
function getManagerInfo() {
  console.log("Welcome to the development team builder!")
  inquirer.prompt([{
    type: "input",
    name: "managerName",
    message: "What is the name of the Manager of the Team?",
  }, {
    type: "input",
    message: "What is the Manager's ID?",
    name: "managerID"
  }, {
    type: "input",
    message: "What is the Manager's Email?",
    name: "managerEmail"
  }, {
    type: "input",
    message: "What is the Manager's Office Number?",
    name: "managerOffice"
  }]).then(function (managerInfo) {
    theManager = new Manager(managerInfo.managerName, managerInfo.managerID, managerInfo.managerEmail, managerInfo.managerOffice)
    addNewTeamMember()
  })
}

//Function to add additional team members
function addNewTeamMember() {
  inquirer.prompt({
    type: "list",
    message: "What Type of Employee Would you like to add to the team?",
    name: "typeOfEmployee",
    choices: ["Engineer", "Intern", "There are no more team members"]
  }).then(function (answers) {
    if (answers.typeOfEmployee === "Engineer") {
      getEngineerInfo()
    }
    if (answers.typeOfEmployee === "Intern") {
      getInternInfo()
    }
    if (answers.typeOfEmployee === "There are no more team members") {
      endApplication()
    }
  })
}

//Function to get engineer info
function getEngineerInfo() {
  console.log("You are adding an Engineer to the team!")
  inquirer.prompt([{
    type: "input",
    message: "What is the name of the Engineer?",
    name: "engineerName"
  }, {
    type: "input",
    message: "What is the Engineer's ID?",
    name: "engineerID"
  }, {
    type: "input",
    message: "What is the Engineer's Email?",
    name: "engineerEmail"
  }, {
    type: "input",
    message: "What is the Engineer's GitHub?",
    name: "engineerGitHub"
  }]).then(function (engineerInfo) {
    engineers.push(new Engineer(engineerInfo.engineerName, engineerInfo.engineerID, engineerInfo.engineerEmail, engineerInfo.engineerGitHub))
    addNewTeamMember()
  })
}

//Function to get intern info
function getInternInfo() {
  console.log("You are adding an Intern to the team!")
  inquirer.prompt([{
    type: "input",
    message: "What is the name of the Intern?",
    name: "internName"
  }, {
    type: "input",
    message: "What is the Intern's ID?",
    name: "internID"
  }, {
    type: "input",
    message: "What is the Intern's Email?",
    name: "internEmail"
  }, {
    type: "input",
    message: "What is the Intern's School?",
    name: "internSchool"
  }]).then(function (internInfo) {
    interns.push(new Intern(internInfo.internName, internInfo.internID, internInfo.internEmail, internInfo.internSchool))
    addNewTeamMember()
  })
}

//Function to end application and write file
function endApplication() {
  console.log(theManager)
  console.log(interns)
  console.log(engineers)

  //Write file (just manager info)
  fs.writeFile("team-info.html", `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Oxygen&display=swap" rel="stylesheet">
  <script src="https://use.fontawesome.com/890ca3b31e.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
  <title>Team Info</title>
</head>
<body>
<style>
.jumbotron {
  background: rgb(4,1,48);
background: linear-gradient(90deg, rgba(4,1,48,1) 0%, rgba(99,108,185,1) 24%, rgba(40,187,242,1) 100%);  height: fit-content
}
.card {
float: left;
width: 300px;
padding: 10px;
margin: 20px;
height: 250px;
background: rgb(4,1,48);
color: whitesmoke;
}
hr {
  border: 1px solid whitesmoke;
}
body {
  font-family: 'Open Sans', sans-serif, Arial, Helvetica, sans-serif;
background-image: url("assets/images/background.png");
background-repeat: repeat;
}
.card-title {
  font-size: 25px;
}
p {
  font-size: 18px;
}
h1 {
  font-size: 40px;
  text-align: center;
  color: whitesmoke
}
</style>
<div class="jumbotron"><h1>Team Info</h1></div>
  <div class="container">
  <div class="card">
  <h5 class="card-title">Manager <i class="fa fa-building"></i></h5><hr>
  <p>Name: ${theManager.getName()}</p>
  <p>ID: ${theManager.getId()}</p>
  <p>Email: ${theManager.getEmail()}</p>
  <p>Office Number: ${theManager.getOfficeNumber()}</p>
  </div>
  <script type="text/javascript" src="script.js"></script>
</body>
</html>`
    , function (err) {
      if (err) {
        return console.log(err);
      }
    })

  //creation of js file to push engineer and intern info into (so that it can be appended in the HTML)
  fs.writeFile("script.js", "", function (err) {
    if (err) {
      return console.log(err);
    }
  })

  //for loops to add engineer and intern info (pushed to js file)
  for (var i = 0; i < engineers.length; i++) {
    var engineerNameText = engineers[i].getName()
    var engineerIDText = engineers[i].getId()
    var engineerEmailText = engineers[i].getEmail()
    var engineerGitHubText = engineers[i].getGithub()
    var divName = "newEngineer" + [i]
    fs.appendFile('script.js', `
  var ${divName} = document.createElement('div')
  ${divName}.className = "card"
  ${divName}.innerHTML = '<h5 class="card-title">Engineer <i class="fa fa-cogs"></i></h5><hr><p>Name: ${engineerNameText}</p><p>ID: ${engineerIDText}</p><p>Email: ${engineerEmailText}</p><p>GitHub: ${engineerGitHubText}</p></div>'
  document.querySelector(".container").appendChild(${divName})`, function (err) {
      if (err) throw err;
    });
  }

  for (var i = 0; i < interns.length; i++) {
    var internNameText = interns[i].getName()
    var internIDText = interns[i].getId()
    var internEmail = interns[i].getEmail()
    var internSchool = interns[i].getSchool()
    var divName = "newIntern" + [i]
    fs.appendFile('script.js', `
  var ${divName} = document.createElement('div')
  ${divName}.className = "card"
  ${divName}.innerHTML = '<h5 class="card-title">Intern <i class="fa fa-mortar-board"></i></h5><hr><p>Name: ${internNameText}</p><p>ID: ${internIDText}</p><p class = "card-text">Email: ${internEmail}</p><p>School: ${internSchool}</p></div>'
  document.querySelector(".container").appendChild(${divName})`, function (err) {
      if (err) throw err;
    });
  }
  console.log("Successfully wrote to HTML!")
}

//start the application by getting manager info
getManagerInfo()

