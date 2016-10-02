var express = require("express"); // requiring this means we save the entire express functionality into a variable called express... then we can access the express api by using express.*out api call we want*

// create our app
var app = express(); // we run the entire express library as a function.
app.use(express.static('public')); // this defines the directory it will use to show the files
app.listen(3000, function(){ // this is to start the server. it takes 2 arguments: a port number and a function.
    console.log("express server is up on port 3000");
});
