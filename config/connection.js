const mysql = require('../node_modules/mysql');
const DB = "heroku_285e97a9be3d8eb";

var db_config = {
    host: 'us-cdbr-iron-east-02.cleardb.net',
      user: 'b6d59087604cdb',
      password: '7d75b4ac',
      database: DB
  };
  

var connection;

// var connection = mysql.createConnection({
//     host: "us-cdbr-iron-east-02.cleardb.net",
  
  
//     // Your port; if not 3306
//     // port: 3306,
  
//     // Your username
//     user: "b6d59087604cdb",
  
//     // Your password
//     password: "7d75b4ac",
//     database: DB
//   });


function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();


// connection.connect(function(err){
//     if(err){
//         console.log("HERE");
//         console.log("Error Connecting "+err.stack);
//         return;
//     }
//     console.log("Connected as ID "+connection.threadId);

// });

module.exports = connection;