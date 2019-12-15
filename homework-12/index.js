var mysql = require("mysql");
var inquirer = require("inquirer");



//Message Box for start-up
const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.white.bold("Employee Manager");

const boxenOptions = {
    padding: 1,
    margin: 1,
    width: 30,
    borderStyle: "round",
    borderColor: "white",
    backgroundColor: "gray"
};
const msgBox = boxen(greeting, boxenOptions);


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
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log(msgBox);
    start();
});

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "question",
            type: "list",
            message: "Would you like to do?",
            choices: ["ADD a New Department", "ADD a New Role", "ADD a New Employee", "VIEW Departments", "VIEW Roles", "VIEW Employees", "UPDATE Employee Role", "EXIT"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.question === "ADD a New Department") {
                newDepartment();
            }
            else if (answer.question === "ADD a New Role") {
                newRole();
            }
            else if (answer.question === "ADD a New Employee") {
                newEmployee();
            }
            else if (answer.question === "VIEW Departments") {
                viewDepartments();
            }
            else if (answer.question === "VIEW Roles") {
                viewRoles()
            }
            else if (answer.question === "VIEW Employees") {
                viewEmployees()
            }
            else if (answer.question === "UPDATE Employee Role") {
                UpdateEmployeeRole()
            }
            else {
                connection.end();
            }
        });
}

//Add new Department
function newDepartment() {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input",
                message: "What is the department you would like to add?"
            },
        ])
        .then(function (answer) {
            connection.query(
                "INSERT INTO department SET ?;",
                {
                    department_name: answer.department,
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your department was added successfully!");
                    start();
                }
            );
        });
}

//Add new Role
function newRole() {
    let departments = []

    connection.query("SELECT department_name, department_id FROM department;", function (err, results) {
        if (err) throw err;

        for (var i = 0; i < results.length; i++) {
            let storedDepartment = results[i].department_name
            departments.push(storedDepartment)
        }

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
                    type: "list",
                    message: "What department is this in?",
                    choices: departments
                },
            ])
            .then(function (answer) {
                console.log(answer.department)
                let deptID
                for (var i = 0; i < results.length; i++) {
                    if (results[i].department_name === answer.department) {
                        deptID = results[i].department_id;
                    }
                }
                connection.query(
                    "INSERT INTO roles SET ?;",
                    {
                        title: answer.role,
                        salary: answer.salary,
                        department_id: deptID
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your role was added successfully!");
                        start();
                    }
                )


            })
    })

}


function newEmployee() {
    let roles = []

    connection.query("SELECT title, role_id FROM roles;", function (err, results) {
        if (err) throw err;

        for (var i = 0; i < results.length; i++) {
            let storedRole = results[i].title
            roles.push(storedRole)
        }


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
                    type: "list",
                    message: "What role is this employee?",
                    choices: roles,
                }])
            .then(function (answer) {
                let roleID
                for (var i = 0; i < results.length; i++) {
                    if (results[i].title === answer.role) {
                        roleID = results[i].role_id;
                    }
                }


                connection.query(
                    "INSERT INTO employee SET ?;",
                    {
                        first_name: answer.first,
                        last_name: answer.last,
                        role_id: roleID,
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your employee was added successfully!;");

                        start();
                    }
                );
            });
    })
}

function viewDepartments() {
    let sql = "SELECT * FROM department;"
    connection.query(sql, function (err, results) {
        if (err) throw err;
        console.table(results)
        start();
    })
}

function viewRoles() {
    let sql = "SELECT * FROM roles LEFT JOIN department ON roles.department_id = department.department_id;"
    connection.query(sql, function (err, results) {
        if (err) throw err;
        console.table(results)
        start();
    })
}

function viewEmployees() {
    let sql = "SELECT * FROM employee LEFT JOIN roles ON roles.role_id = employee.role_id LEFT JOIN department ON roles.department_id = department.department_id;"
    connection.query(sql, function (err, results) {
        if (err) throw err;
        console.table(results)
        start();
    })
}



//Update Employee Role Function

function UpdateEmployeeRole() {
    let name = []
    let roles = []
    connection.query("SELECT first_name,last_name FROM employee;", function (err, results) {
        if (err) throw err;
        
        for (var i = 0; i < results.length; i++) {
            let storedName = `${results[i].first_name} ${results[i].last_name}`
            name.push(storedName)
        }

        connection.query("SELECT title, role_id FROM roles;", function (err, results) {
            if (err) throw err;

            for (var i = 0; i < results.length; i++) {
                let storedRole = results[i].title
                roles.push(storedRole)
            }
    
        inquirer
            .prompt([
                {
                    name: "employee",
                    type: "list",
                    message: "Which Employee would you like to update?",
                    choices: name
                },
                {
                    name: "change",
                    type: "list",
                    message: "What role would you like to update this employee to?",
                    choices: roles
                }]).then(function (answer) {
                    let chosenName = answer.employee
                    let firstName = chosenName.toString().split(" ");     
                    console.log(firstName[0])
                    console.log(typeof(firstName[0]))               
                    let roleID
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].title === answer.change) {
                            roleID = results[i].role_id;
                        }
                    }
                    let sql = `UPDATE employee SET role_id = ${roleID} WHERE first_name = '${firstName[0]}' and last_name= '${firstName[1]}';`
                    connection.query(sql, function (err, results) {
                        if (err) throw err;
                        console.log("Your employee was updated successfully!;");
                        start();
                    })
                })
})
})
}