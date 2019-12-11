var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employee_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "question",
      type: "list",
      message: "Would you like to do?",
      choices: ["ADD a New Department", "ADD a New Role", "ADD a New Employee", "VIEW Current Departments", "VIEW Current Roles", "VIEW Current Employees", "UPDATE Employee Roles"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.question === "ADD a New Department") {
        newDepartment();
      }
      else if(answer.question === "ADD a New Role") {
        newRole();
      } 
      else if(answer.question === "ADD a New Employee") {
        newEmployee();
      }
      else if(answer.question === "VIEW Current Departments") {
        viewDepartments ();
      }
      else if(answer.question === "VIEW Current Roles") {
        viewRoles ()
      }
      else if(answer.question === "VIEW Current Employees") {
        viewEmployees()
      }
      else if(answer.question === "UPDATE Employee Roles") {
        UpdateEmployeeRoles()
      }
      else{
        connection.end();
      }
    });
}

function newDepartment() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "What is the department you would like to add?"
      },
    ])
    .then(function(answer) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          department_name: answer.department,
        },
        function(err) {
          if (err) throw err;
          console.log("Your department was added successfully!");
          
          start();
        }
      );
    });
}

function newRole () {
    inquirer
      .prompt([
        {
          name: "role",
          type: "input",
          message: "What is the role (title) you would like to add?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary for this position?"
          },
          {
            name: "department",
            type: "choice",
            message: "What department is this in?",
            choices:  connection.query("SELECT * FROM department", function(err, results) {
                if (err) throw err;
          })},
      ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO role SET ?",
          {
            title: answer.role,
            salary: answer.salary,
            department_id: answer.department.department_id
          },
          function(err) {
            if (err) throw err;
            console.log("Your role was added successfully!");
            
            start();
          }
        );
      });
  }

  function newEmployee() {
    inquirer
      .prompt([
        {
          name: "first",
          type: "input",
          message: "What is the first name of the employee?"
        },
        {
            name: "last",
            type: "input",
            message: "What is the last name of the employee?"
          },

          {
            name: "role",
            type: "choice",
            message: "What role is this employee?",
            choices:  connection.query("SELECT * FROM role", function(err, results) {
                if (err) throw err;
          })},
      ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first,
            last_name: answer.last,
            role_id: answer.role.role_id,
            department_id: answer.role.department_id
          },
          function(err) {
            if (err) throw err;
            console.log("Your employee was added successfully!");
            
            start();
          }
        );
      });
  }


function viewDepartments () {
  connection.query("SELECT * FROM department", function(err, results) {
    if (err) throw err;
    console.log(results)
    start();
  })}

  function viewRoles () {
    connection.query("SELECT * FROM role", function(err, results) {
      if (err) throw err;
      console.log(results)
      start();
    })}

    function viewEmployees () {
        connection.query("SELECT * FROM employee", function(err, results) {
          if (err) throw err;
          console.log(results)
          start();
        })}