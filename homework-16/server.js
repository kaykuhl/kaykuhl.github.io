var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/html-routes.js")(app);
require("./routes/apiRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/imageperformance", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
