const mysql = require('../node_modules/mysql');
const DB = "burgers_db";
const PORT = "3000";


var connection = mysql.createConnection({
    host: "localhost",
  
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
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