const express = require('express');
const orm = require("./config/orm");
var app = express();


orm.selectAll("burgers");
//orm.insertOne("burgers","burger_name","devoured","Test Mother Fucka",0);
orm.end();

