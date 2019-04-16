const orm = require("../config/orm");
const BURGER_TABLE = "burgers";
const BURGER_NAME_COL = "burger_name";
const DEVOURED_COL = "devoured";
const ID_COL = "id";




var burgerLoader = {
    changeExistingBurgerByName: function(newBurgerNameString,isDevoured,nameOfBurgerToChange){
        orm.updateOne(BURGER_TABLE,BURGER_NAME_COL,newBurgerNameString,DEVOURED_COL,isDevoured,BURGER_NAME_COL,nameOfBurgerToChange);
    },
    changeExistingBurgerById: function(newBurgerNameString,isDevoured,idOfBurgerToChange){
        orm.updateOne(BURGER_TABLE,BURGER_NAME_COL,newBurgerNameString,DEVOURED_COL,isDevoured,ID_COL,idOfBurgerToChange);
    },

    showAllBurgers: function(){
        orm.selectAll(BURGER_TABLE);
    },

    addABurger:function(nameofNewBurgerString,isDevoured){
        orm.insertOne(BURGER_TABLE,BURGER_NAME_COL,DEVOURED_COL,nameofNewBurgerString,isDevoured);
    },

    doneWithBurgers:function(){
        orm.end();
    }
}

module.exports = burgerLoader;

