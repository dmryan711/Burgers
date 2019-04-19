const mysql = require('../node_modules/mysql');
const DB = "yyu6e957ea2ude27";



var connection = mysql.createConnection({
    host: "fnx6frzmhxw45qcb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "k6h7uv75lputo8g4",
  
    // Your password
    password: "kmxcdmja6d45puy2",
    database: DB
  });



connection.connect(function(err){
    if(err){
        console.log("HERE");
        console.log("Error Connecting "+err.stack);
        return;
    }
    console.log("Connected as ID "+connection.threadId);

});

module.exports = connection;