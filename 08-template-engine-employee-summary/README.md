# Template Engine - Employee Summary

## Description

This is a command-line application that generates a software engineering team based on user input.

Once all data is entered, the team will be displayed neatly in an HTML file.  This application passes all unit tests.

## Technology

* HTML
* CSS
* Node.js
* ES6+
* Jest

## Instructions

1. First, find the directory of the application in your terminal and install the required node modules by running '$ npm i'

2. The Application will prompt you will several questions. First, asking the name of the manager and then asking to add additional team members.

![Running Application Demo](https://kaykuhl.github.io/08-template-engine-employee-summary/assets/images/prompt.gif)

3. When the user is done inputting all the team members, they can select the "There are no more team members" option and the application will finish

![Example of user input](https://kaykuhl.github.io/08-template-engine-employee-summary/assets/images/prompt.JPG)

4. The application will generate HTML with the team member information printed out in team-info.html (occupied with a script file that is needed to render the HTML).

![Example of HTML output](https://kaykuhl.github.io/08-template-engine-employee-summary/assets/images/html.JPG)

## Tests

This application has a built-in jest test file.  Run these tests with `$ npm run test` (Ensure jest is installed).

Passing test output should look like this:

![Passing Tests](https://kaykuhl.github.io/08-template-engine-employee-summary/assets/images/test.JPG)