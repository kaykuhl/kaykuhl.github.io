// Dependencies
var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var path = req.url;

  switch (path) {
  case "/notes":
    return renderNotesPage(req, res);
  default:
    return renderWelcomePage(req, res);
  }
}

function renderWelcomePage(req, res) {
  fs.readFile(__dirname + "/Develop/public/index.html", function(err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
    }
    else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

function renderNotesPage(req, res) {
  fs.readFile(__dirname + "/Develop/public/notes.html", function(err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
    }
    else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

// Starts the server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
