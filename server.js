var express = require("express");
var router = require("./controllers/burgers_controller");

var port =  process.env.PORT || 3000;

var expHB = require('express-handlebars');

var app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expHB({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/',router);
app.use(express.static("public"));


app.listen(port,function(){
    console.log("Listening on port "+port);
});


//burgerLoader.addABurger("Devon's Hairy Burger",false);

// burgerLoader.showAllBurgers();

//QUESTIONS
//When using a router aka a mini-app  and using the app.use function what routes should go into use vs router.HTTPVerb (should these be sub routes from app.use?)
//ANSWER: It can contain all subroutes and params