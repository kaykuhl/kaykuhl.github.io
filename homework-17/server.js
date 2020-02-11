var express = require("express");
var exphbs = require("express-handlebars");
var app = express();


const mongoose = require("mongoose");
const logger = require("morgan"); 

var PORT = process.env.PORT || 8080;

// Set static folder
app.use(express.static(__dirname + '/public'));

app.use(logger("dev"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use('/', require('./controllers/burgers_controller'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/offlineburgerlist", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});

// Start Server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


