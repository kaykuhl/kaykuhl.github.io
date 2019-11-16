
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const pdf = require('html-pdf');

const writeFileAsync = util.promisify(fs.writeFile);

let repos
let imageUrl


function promptUser() {

  return inquirer.prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
    .then(function ({ username }) {
      const queryUrl = `https://api.github.com/users/${username}`;

      axios.get(queryUrl).then(function (response) {
        repos = response.data.public_repos
        imageUrl = response.data.avatar_url
        console.log(repos)
        console.log(imageUrl)
        });
    }) }
.then 


function generateHTML(answers) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid"></div>
    <div class="container">
      <h1 class="display-4">Hi! My name is ***NAME***</h1>
      <h2> I am from ***LOCATIONHERE***.</h2>
      <div class = "row">
      <div class = "col-xs-6">
      Repositories
      <br>${repos}
      </div>
      <div class = "col-xs-6">
      Followers
      <br>***FOLLOWERS***
      </div>
      </div>
      <div class = "row">
      <div class = "col-xs-6">
      GitHubStars
      <br>***GITHUBSTARS*** ${imageUrl}
      </div>
      <div class = "col-xs-6">
      FOLLOWING
      <br>***FOLLOWING***
      </div>
      </div>
    </div>
  </body>
  </html>`;
}



async function init() {
  try {
    const answers = await promptUser();
    const html = generateHTML(answers);

    await writeFileAsync("index.html", html);

    var readHtml = fs.readFileSync('index.html', 'utf8');
    var options = { format: 'Letter' };

    pdf.create(readHtml, options).toFile('github-info.pdf', function (err, res) {
      if (err) return console.log(err);
      console.log(res);
    });

    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
}

init();

