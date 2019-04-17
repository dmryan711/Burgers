const express = require('express');
const burgerLoader = require('../models/burger');

var router = express.Router();

router.get('/',function(req,res){
    res.render('index');
    burgerLoader.showAllBurgers();
    
    
});



module.exports = router;




