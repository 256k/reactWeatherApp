var express = require("express"); // requiring this means we save the entire express functionality into a variable called express... then we can access the express api by using express.*out api call we want*

// create our app
var app = express(); // we run the entire express library as a function.
const PORT = process.env.PORT || 3000;
app.use(function(req, res, next){
    if (req.headers['x-forwarded-proto'] === 'https'){
        res.redirect("http://" + req.hostname + req.url);

    } else{
        next();
    }
});
app.use(express.static('public')); // this defines the directory it will use to show the files
app.listen(PORT, function(){ // this is to start the server. it takes 2 arguments: a port number a function.
    console.log("express server is up on port "+ PORT);
});
