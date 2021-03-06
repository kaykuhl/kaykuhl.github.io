const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const pdf = require('html-pdf');

const writeFileAsync = util.promisify(fs.writeFile);

//prompt using inquirer to get color choice and git hub username from the user 
function promptUser() {
  return inquirer.prompt([
    {
      type: "list",
      name: "color",
      message: "What is your favorite color?",
      choices: ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    },
    {
      type: "input",
      name: "username",
      message: "What is your github username?"
    }
  ])
  
  //then perform axios call for the github user info and starred repos
    .then(
      function getData(answers) {
        const queryUrl = `https://api.github.com/users/${answers.username}`;
        const starsUrl = `https://api.github.com/users/${answers.username}/starred?`;
        res = axios.get(queryUrl).then(function (res) {
          stars = axios.get(starsUrl).then(function (stars) {

            //write file async function to render HTML
            return writeFileAsync("index.html", `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://bootswatch.com/sandstone/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Oxygen&display=swap" rel="stylesheet">
    <title>Document</title>
  </head>
  <body>
  <style>
  .img-circle {
    width: 20%;
  }
  .jumbotron {
      background: ${answers.color} !important;
      text-align: center;
  }
  .bottom-block {
    border-bottom: dashed 2px ${answers.color} !important;
  }
  .container {
    text-align: center;
  }
  body {
    margin: auto;
    align-content: center;
    font-size: 20px;
    font-family: 'Oxygen', sans-serif, Arial, Helvetica, sans-serif;
  }
  h3 {
    font-size: 20px;
    font-style: italic;
    padding: 20px;
    background: ${answers.color} !important;
  }
  .col-xs-6 {
    padding: 20px;
  }
  </style>
    <div class="jumbotron jumbotron-fluid">
    <img class = "img-circle" src ="${res.data.avatar_url}">
      <h1 class="display-4">Hello, my name is ${res.data.name}!</h1></div>
    <div class="container">
      <ul>Links:</ul>
      <li>GitHub: <a href='https://github.com/${answers.username}'>${answers.username}</a></li>
      <li>Location: <a href='https://www.google.com/maps?q=${res.data.location}'>${res.data.location}</a></li>
      <li>Blog: <a href='${res.data.blog}'>${res.data.blog}</a></li>
      <h3>Bio: ${res.data.bio}</h3>
      <div class = "row">
      <div class = "col-xs-6">
      <b>Repositories</b>
      <br>${res.data.public_repos}
      </div>
      <div class = "col-xs-6">
      <b>Followers</b>
      <br>${res.data.followers}
      </div>
      </div>
      <div class = "row">
      <div class = "col-xs-6">
      <b>Starred Repos</b>
      <br>${stars.data.length}
      </div>
      <div class = "col-xs-6">
      <b>Following</b>
      <br>${res.data.following}
      </div>
      </div>
      <div class ="bottom-block"><br></div>
    </div>
  </body>
  </html>`
            )
          })
      })
    })}

// init function
async function init() {
        try {
          await promptUser();
          var readHtml = fs.readFileSync('index.html', 'utf8');
          var options = { format: 'Letter' };
          //render pdf
          await pdf.create(readHtml, options).toFile('github-info.pdf', function (err, res) {
            if (err) return console.log(err);
            console.log(res);
          });
          console.log("Successfully wrote to index.html");
        } catch (err) {
          console.log(err);
        }
      }

// run init function
init();

