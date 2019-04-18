var connection = require("./connection");

var orm = {
    selectAll: function(table,res){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString,[table],function(err,result){
            if(err){
                console.log(err.message);
            }
            res.json(result);
        });

    },

    insertOne: function(table,col1, col2,val1, val2){
        var queryString = "INSERT INTO ??(??,??) VALUES(?,?)"
        connection.query(queryString,[table,col1,col2,val1,val2],function(err,result){
            if(err){
                throw err;
            }
            console.log("Added the burger");
        });
    },

    updateOne: function(table,col1,val1,col2,val2,whereCol,whereColVal){
        var queryString = "UPDATE ?? SET ?? = ?, ?? = ? WHERE ?? = ?";
        connection.query(queryString,[table,col1,val1,col2,val2,whereCol,whereColVal],function(err,result){
            if(err){
                throw err;
            }
            console.log(result);
        });
    },

    end:function(){
        connection.end();
    }
};

module.exports = orm;