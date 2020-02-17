var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

var PORT = process.env.PORT || 8080;

// Set static folder
app.use(express.static(__dirname + '/public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// This code below is not needed and broke my app for weeks. It appears the index was rendering without the data even though there was a seperate route on another page. Once I commented this out, the code started working. Leaving this in as a note for myself.
// // Handlebar Routes
// app.get("/", function(req, res) {
//   res.render("index");
// });

// Import routes and give the server access to them.
app.use('/', require('./controllers/burgers_controller'));

// Start Server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


