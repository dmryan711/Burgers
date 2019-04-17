const express = require('express');
const burgerLoader = require('../models/burger');

var router = express.Router();

router.get('/',function(req,res){
    res.render('index');
    
});

router.post('/add',function(req,res){
    console.log(req.body.name);
    burgerLoader.addABurger(req.body.name,false);
    burgerLoader.showAllBurgers();

});



module.exports = router;




