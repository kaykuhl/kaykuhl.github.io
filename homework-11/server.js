// Dependencies/server & middleware set up
const express = require("express");
const path = require("path")
const fs = require("fs");

const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/Develop/public'));

// Routes for index and notes pages
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'Develop/public/index.html'));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
});

//fs read file used to read db.json file and put it into variable "notes"
let notes 

const listOfNotes = fs.readFileSync("Develop/db/db.json");
if(listOfNotes) {
    notes = JSON.parse(listOfNotes)
}

// Displays all notes
app.get("/api/notes", function (req, res) {
    return res.json(notes);
});

//post request
app.post('/api/notes', function (req, res) {
    var newNote = req.body;
    console.log(newNote)
    notes.push(newNote);
    res.json(newNote);
    renderNotes()
})

//app.delete request
app.delete('/api/notes/:id', function (req, res) {
    const NoteId = req.params.id;
    //splice removed from array
    notes.splice(NoteId, 1);
    renderNotes()
    })

//Function for assigning IDs to notes
function assignNoteIds (){
    for(i = 0; i < notes.length; i++){
        notes[i].id = i;
    }}

//Function for assigning rendering notes onto notes route
function renderNotes () {
    fs.writeFileSync("Develop/db/db.json", JSON.stringify(notes, null, 2), function(err) {
        if (err)
            throw err    
        })
        assignNoteIds()
}

// Starts the server
app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT))
