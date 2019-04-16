var express = require("express");
var router = require("./controllers/burgers_controller");

var port =  8080;

var expHB = require('express-handlebars');

var app = express();

app.engine("handlebars", expHB({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/',router);

app.listen(port,function(){
    console.log("Listening on port "+port);
});


//burgerLoader.addABurger("Devon's Hairy Burger",false);

// burgerLoader.showAllBurgers();

//QUESTIONS
// Where do you handle GET / POST / PUT / DELETE, in burger controller?
//
