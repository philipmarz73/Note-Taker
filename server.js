var express = require("express");
var htmlRoutes = require("./routes/htmlRoutes");
var apiRoutes = require ("./routes/apiRoutes");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  