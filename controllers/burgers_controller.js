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



router.post('/add',function(req,res){
    console.log(req.body.name);
    burgerLoader.addABurger(req.body.name,false);
    res.json({success : "Updated Successfully", status : 200});
});



module.exports = router;




