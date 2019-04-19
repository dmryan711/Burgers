const express = require('express');
const burgerLoader = require('../models/burger');

var router = express.Router();




router.get('/',function(req,res){
    res.render('index');
});

router.get('/burgers',function(req,res){
    console.log("Get burgers called");
    burgerLoader.showAllBurgers(res);
});

router.put('/update/::burgerId/::newBurgerName/::isDevoured',function(req,res){
    console.log("Update Burger called");
    
    var id = parseInt(req.params.burgerId);
    var isDevoured;
    if(req.params.isDevoured === "true"){
        isDevoured = true;
    }else{
        isDevoured = false;
    }
    
    burgerLoader.changeExistingBurgerById(req.params.newBurgerName,isDevoured,id,res);
});



router.post('/add',function(req,res){
    console.log(req.body.name);
    burgerLoader.addABurger(req.body.name,false);
    res.json({success : "Added Successfully", status : 200});
});




module.exports = router;




