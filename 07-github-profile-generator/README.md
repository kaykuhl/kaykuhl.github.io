# Developer Profile Generator

## Description

This is a command-line application that generates a PDF profile based on user input of color and GitHub username.

## Technology

* HTML
* CSS
* Node.js
* Axios/API Call
* ES6+
* Bootstrap

## Example User Stories

As an employer hiring developers, I want a developer profile generator, so that I can easily prepare reports for the hiring team.

As a web developer job searching, I want a developer profile generator, so that I can generate an updated pdf of my GitHub information.

## Instructions

After opening the application with Node.js, the user will be prompted for a favorite color. This color will be saved and later used to generate the pdf.

The user will then be prompted for a GitHub username, which will be stored for an Axios/API call in order to obtain the information needed for the pdf.

After this information is gathered, the application will render the HTML and pdf. these files will be created and saved in the same folder as the application.

The PDF will contain the following:
* Profile image
* user name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

Additionally, the color selected at the beginning of the application will be shown on the pdf.

## Demo

![Running Application Demo](https://kaykuhl.github.io/07-github-profile-generator/assets/application.gif)

![Rendering of PDF](https://kaykuhl.github.io/07-github-profile-generator/assets/pdf.JPG)
