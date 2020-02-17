# Express Note Taker

[Link to the deployed application on Heruko](https://fierce-escarpment-71149.herokuapp.com/)

## Description

This is an express node application that allows the user to create and delete notes. The notes will be saved onto a local server (db.json file). 

## Technology

Note: the front-end was already developed for this project. My contribution was linking up the back-end and server This was completed using:

* Node.js
* Express
* fs (read and write file)
* HTML routes to already created HTML pages
* API routes following CRUD basic functions (GET, POST, and DELETE)

## User Story

As a professional, I want a note-taking application that allows me to write, save, and delete notes so that I can keep my notes (and life) organized.

## Instructions

1. After connecting to the server through node or the deployed Heroku app and going to the index page (/), you will see a button to the note-taking page:

![Index Page](https://kaykuhl.github.io/09-express-note-taker/Develop/public/assets/images/index.JPG)

2. On the note-taking page, you will see a blank canvas for writing your notes!

![Notes Page](https://kaykuhl.github.io/09-express-note-taker/Develop/public/assets/images/notes.JPG)

3. Click on the “save” icon to save your note

![Writing your first note](https://kaykuhl.github.io/09-express-note-taker/Develop/public/assets/images/notes1.JPG)

4. You can save multiple notes by clicking the pencil icon and creating a new note.

![Saving notes](https://kaykuhl.github.io/09-express-note-taker/Develop/public/assets/images/notes2.JPG)

5. You can delete the notes you’ve created by clicking on the trash icon next to the note.

![Deleting Notes](https://kaykuhl.github.io/09-express-note-taker/Develop/public/assets/images/notes4.JPG)

6. Notes are saved in JSON and the API can be seen through the application through the route (/api/notes)

![Notes API](https://kaykuhl.github.io/09-express-note-taker/Develop/public/assets/images/notes3.JPG)