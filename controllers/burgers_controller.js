const express = require('express');
const burgerLoader = require('../models/burger');

var router = express.Router();

router.get('/',function(req,res){
    console.log("Get is working");
    res.render('index');
});



module.exports = router;




