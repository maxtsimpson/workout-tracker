// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
const connection = require("./config/mongo.js")
const express = require("express");
//const Burger = require("./models/burger")

// Sets up the Express App
// =============================================================
let app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//add the api routes
require("./routes/api_routes")(app);

//add the html routes
require("./routes/html_routes")(app);

// Static directory to be served
app.use(express.static("public"));

connection.then(() => {
    app.listen(PORT, function() {
        //this console log uses %s to subsitute an argument for a parameter. that's why PORT is passed in twice as parameters
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
      });
});
