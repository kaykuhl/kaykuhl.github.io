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

// Handlebar Routes
app.get("/", function(req, res) {
  res.render("index");
});

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start Server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
