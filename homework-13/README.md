# Eat-Da-Burger

## Description

This application demonstrates the principles of CRUD and allows users to add, eat, and delete burgers to a mySQL database.

## Deployed Application

[View Application on Heroku](https://enigmatic-eyrie-27131.herokuapp.com/)

## Technology

* mySQL
* Express
* Node.js
* CRUD basic functions (GET, POST, and UPDATE)
* Handlebars
* Heroku deployement with JawsDB
* Sequalize ORM

## User Story

As a foodie, I want an application to add new burgers and track when they are eaten so that I can keep track of my burger eating adventure.

## Instructions

1. Either view on Heroku (link above), or using this repo and connecting through mySQL and command line, you will see the following index.

![Index](https://kaykuhl.github.io/homework-13/public/assets/img/index.JPG)

2. You can now add burgers you wish to eat! Type in the name of the burger and select "Add Burger".

![Index](https://kaykuhl.github.io/homework-13/public/assets/img/add-burgers.JPG)

3. Your burgers can now be devoured! Eat the burgers by selecting "Eat".

![Index](https://kaykuhl.github.io/homework-13/public/assets/img/eat-burgers.JPG)

4. Lastly, you can delete your devoured burgers.

## Future Development

Future development could include a rating scale for the burgers so that you can save the ratings and devour them again.

## Challenges

On challenge I had with creating this app was an issue I had getting the burgers to show up in the handlebars. 
I finally found that I had 2 routes set up for the index. The one in the server file was being used and did not include the
GET request. Therefore, the index was rendering without any burger information.  The other biggest challenge was deploying to Heroku through JawsDB.